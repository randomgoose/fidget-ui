import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { SwitchSizes } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Sizes</Heading>
      <P>
        Switch component comes in three sizes: <Pre>sm(16px), md(20px)</Pre> and <Pre>lg(28px)</Pre>
        .
      </P>

      <Preview id="switch/sizes" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <SwitchSizes />
        </Case>
      </Preview>
    </>
  );
}
