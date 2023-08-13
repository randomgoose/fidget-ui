import { Heading } from 'fidget-ui';
import { Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { AvatarUsage } from './code';

const { AutoLayout, Text } = figma.widget;

export default function () {
  const id = 'avatar/usage';

  return (
    <>
      <Heading as="h5">Usage</Heading>

      <AutoLayout direction="vertical" width={'fill-parent'} spacing={16}>
        <Text width={'fill-parent'}>
          - Pass in an <Pre>src</Pre> prop (like the built-in Image Component) to set the image that
          represents the user.
        </Text>
        <Text width={'fill-parent'}>
          - If the <Pre>src</Pre> prop is not set, specify the <Pre>name</Pre> prop to display the
          initials of the given name. Otherwise, a default icon is displayed.
        </Text>
      </AutoLayout>

      <Preview id={id} code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <AvatarUsage />
        </Case>
      </Preview>
    </>
  );
}
