import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { AvatarGroups } from './code';

const { AutoLayout } = figma.widget;

export default function () {
  const id = 'avatar/avatar-groups';

  return (
    <>
      <Heading as="h5">Avatar Group</Heading>
      <AutoLayout direction="vertical" width={'fill-parent'}>
        <P width={'fill-parent'}>AvatarGroup component is used for containing multiple avatars.</P>
        <P width={'fill-parent'}>
          · Specify <Pre>max</Pre> prop to hide excessive avatars.
        </P>
        <P width={'fill-parent'}>
          · Set <Pre>size</Pre> prop to control the sizes of all avatars inside.
        </P>
        <P width={'fill-parent'}>
          · Enable <Pre>stacked</Pre> prop to stack avatars. Or specify <Pre>spacing</Pre> to adjust
          the spacing between avatars.
        </P>
      </AutoLayout>

      <Preview id={id} code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={32}>
          <AvatarGroups />
        </Case>
      </Preview>
    </>
  );
}
