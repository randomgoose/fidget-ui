import { Heading } from 'fidget-ui';
import { Usage } from './code';
import { Case, Preview } from '../../../components';

export default function () {
  const id = 'accordion/usage';
  return (
    <>
      <Heading as="h5">Usage</Heading>
      <Preview id={id} code={`__FIDGET_DEMO_CODE`}>
        <Case height={480} padding={{ horizontal: 72 }}>
          <Usage />
        </Case>
      </Preview>
    </>
  );
}
