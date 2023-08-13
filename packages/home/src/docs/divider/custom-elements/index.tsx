import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { DividerCustomElements } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Divider with custom elements</Heading>

      <P>
        Pass a <Pre>children</Pre> prop to add custom elements.
      </P>

      <Preview id="divider/custom-elements" code={`__FIDGET_DEMO_CODE`}>
        <Case direction="vertical" height={'hug-contents'} padding={32}>
          <DividerCustomElements />
        </Case>
      </Preview>
    </>
  );
}
