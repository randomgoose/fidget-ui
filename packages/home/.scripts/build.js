/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const path = require('path');
const esbuild = require('esbuild');
const { replace } = require('esbuild-plugin-replace');

const DEMO_CODE_PLACE_HOLDER = '__FIDGET_DEMO_CODE';
const DEMO_CODE_FILENAME = 'code.tsx';

(async function build({ watch }) {
  const packageDir = path.resolve(__dirname, '..');
  const options = {
    entryPoints: [path.resolve(packageDir, 'src/code.tsx')],
    outfile: path.resolve(packageDir, 'dist/code.js'),
    bundle: true,
    minify: true,
    target: 'es6',
    tsconfig: path.resolve(packageDir, 'src/tsconfig.json'),
    plugins: [
      replace({
        [DEMO_CODE_PLACE_HOLDER]: (filePath) => {
          const codeFilePath = path.resolve(path.dirname(filePath), DEMO_CODE_FILENAME);
          if (fs.pathExistsSync(codeFilePath)) {
            return fs.readFileSync(codeFilePath).toString().replace(/`/g, '\\`');
          }

          return `Failed to inject demo code from ${codeFilePath}`;
        },
      }),
    ],
  };

  if (watch) {
    const context = await esbuild.context(options);
    await context.watch();
  } else {
    await esbuild.build(options);
    console.log('Build fidget document done!')
  }
})({ watch: !!process.env.WATCH });
