/* eslint-disable @typescript-eslint/no-var-requires */
const { sync } = require('glob');
const fs = require('fs-extra');
const path = require('path');
const { generate, Project } = require('ts-document');
const { FIDGET_API_JSON_PATH } = require('./constants');

/**
 * get doc-prop for preview from parsed ts-property
 */
function getDocProp({ name, type, isOptional, tags }) {
  const findDescription = (tags) => {
    return tags.find(({ name }) => name === 'en' || name === 'zh')?.value || '';
  };
  const findDefault = (tags) => {
    return tags.find(({ name }) => name === 'defaultValue')?.value;
  };
  const findVersion = (tags) => {
    return tags.find(({ name }) => name === 'version')?.value;
  };

  return {
    name,
    type,
    required: !isOptional,
    description: findDescription(tags),
    defaultValue: findDefault(tags),
    version: findVersion(tags),
  };
}

(async function migrate() {
  const fidgetDistDir = path.dirname(require.resolve('fidget-ui'));
  const filePaths = sync(`${fidgetDistDir}/*/interface.d.ts`);
  const fidgetAPIMap = {};

  filePaths.forEach((filePath) => {
    try {
      // transform package name like date-picker to component name DatePicker
      const componentName = path
        .relative(fidgetDistDir, path.dirname(filePath))
        .replace(/(^\w)|(-\w)/g, (match) => match.replace('-', '').toUpperCase());

      console.log(`Parse API info for ${componentName}...`);

      const apiInfos = generate(filePath, {
        sourceFilesPaths: [filePath],
        escapeChars: false,
        strictDeclarationOrder: true,
        project: new Project({
          compilerOptions: {
            jsx: 'react',
          },
        }),
      });

      // componentInfo will be an Array when strictDeclarationOrder is true
      if (Array.isArray(apiInfos)) {
        fidgetAPIMap[componentName] = apiInfos.map(({ title, schema }) => {
          let properties = [];
          let type = null;

          if (typeof schema.data === 'string') {
            type = schema.data;
          } else if (Array.isArray(schema.data)) {
            properties = schema.data.map(getDocProp);
          } else if (Array.isArray(schema.params)) {
            properties = schema.params.map((parsedProp) => {
              const docProp = getDocProp(parsedProp);
              if (parsedProp.initializerText) {
                docProp.description = parsedProp.initializerText;
              }
              return docProp;
            });
          }

          return {
            name: title,
            type,
            properties,
          };
        });
      }
    } catch (err) {
      console.error(`failed parsing docs on path ${filePath} with error`, err);
    }
  });

  console.log('\nAPIs of all components are parsed!');

  fs.writeFileSync(FIDGET_API_JSON_PATH, JSON.stringify(fidgetAPIMap, null, 2));
})();
