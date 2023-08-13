/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const path = require('path');
const esbuild = require('esbuild');
const { replace } = require('esbuild-plugin-replace');
const { FIDGET_API_JSON_PATH } = require('./constants');

const DEMO_CODE_PLACEHOLDER = '__FIDGET_DEMO_CODE';
const DEMO_CODE_FILENAME = 'code.tsx';

const API_DOC_PLACEHOLDER = '__FIDGET_COMPONENT_API';

let fidgetAPIs = {};
try  {
  fidgetAPIs = require(FIDGET_API_JSON_PATH)
} catch (err) {
  console.error(`Failed to load fidget-ui APIs from ${FIDGET_API_JSON_PATH}`, err);
}

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
        [DEMO_CODE_PLACEHOLDER]: (filePath) => {
          const codeFilePath = path.resolve(path.dirname(filePath), DEMO_CODE_FILENAME);
          if (fs.pathExistsSync(codeFilePath)) {
            return fs.readFileSync(codeFilePath).toString().replace(/`/g, '\\`');
          }

          return `Failed to inject demo code from ${codeFilePath}`;
        },
        [API_DOC_PLACEHOLDER]: (filePath) => {
          const componentName = path.dirname(filePath).split('/').pop()
            .replace(/(^\w)|(-\w)/g, (match) => match.replace('-', '').toUpperCase());
          const targetAPI = fidgetAPIs[componentName];
          if (targetAPI) {
            return JSON.stringify(targetAPI, null, 2).replace(/`/g, '\\`');
          }
          return '';
        }
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
