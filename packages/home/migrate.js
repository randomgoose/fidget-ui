/* eslint-disable @typescript-eslint/no-var-requires */
const { sync } = require('glob');
const fs = require('fs-extra');
const path = require('path');

(async function migrate() {
  const demos = sync('src/docs/*/*').filter(
    (filePath) => /\.tsx?/i.test(filePath) && !filePath.endsWith('index.tsx')
  );
  demos.forEach((filePath) => {
    const dirName = filePath.replace(/\.tsx?/, '');
    const content = fs.readFileSync(filePath);
    fs.ensureDirSync(dirName);
    fs.writeFileSync(path.resolve(dirName, 'code.tsx'), content);
    fs.writeFileSync(
      path.resolve(dirName, 'index.tsx'),
      `import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { Usage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5"></Heading>

      <Preview id="" code={\`__FIDGET_DEMO_CODE\`}>
        <Case height={240}>
          <Usage />
        </Case>
      </Preview>
    </>
  );
}
`
    );
  });
})();
