import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { ButtonSizes } from './code';

export default function () {
  return (
    <>
      <Heading as={'h5'}>Sizes</Heading>
      <P>
        Button component comes in with 3 sizes: <Pre>lg(40px), md(32px)</Pre> and{' '}
        <Pre>sm(28px)</Pre>. The default value is <Pre>md</Pre>.
      </P>

      <Preview id="button/sizes" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <ButtonSizes />
        </Case>
      </Preview>
    </>
  );
}
