import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import { Code, P } from '../typography';
import AvatarUsage from './usage';
import AvatarBackgroundColors from './background-colors';
import AvatarSizes from './sizes';
import AvatarGroups from './avatar-groups';
import { APIs } from '../../components';

const { widget } = figma;
const { AutoLayout } = widget;

export function AvatarDoc() {
  return (
    <AutoLayout {...docStyle} name="avatar">
      <Heading as="h1">Avatar</Heading>
      <P width={'fill-parent'}>
        Use Avatar component to display pictures, name initials or an default icon that represents a
        user.
      </P>
      <Divider />
      <Code>{`import { Avatar } from "fidget-ui"`}</Code>

      <AvatarUsage />
      <AvatarBackgroundColors />
      <AvatarSizes />
      <AvatarGroups />

      <APIs code={`__FIDGET_COMPONENT_API`} />
    </AutoLayout>
  );
}
