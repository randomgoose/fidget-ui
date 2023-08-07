/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const path = require('path');
const esbuild = require('esbuild');
const { replace } = require('esbuild-plugin-replace');

const DEMO_CODE_PLACE_HOLDER = '__FIDGET_DEMO_CODE';
const DEMO_CODE_FILENAME = 'code.tsx';

esbuild
  .build({
    entryPoints: ['src/code.tsx'],
    outfile: 'dist/code.js',
    bundle: true,
    target: 'es6',
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
  })
  .then(() => {});
