import { colors, Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { DividerUsage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5"></Heading>

      <P>
        Add a divider to visually divide elements. Pass a <Pre>margin</Pre> prop to customize the
        spacing between the divider and other elements.
      </P>

      <Preview id="divider/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case fill={colors.neutral[50]} direction={'vertical'} width={'fill-parent'} padding={24}>
          <DividerUsage />
        </Case>
      </Preview>
    </>
  );
}
