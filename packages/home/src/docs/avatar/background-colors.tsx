import { Heading, Avatar, colors, Tabs } from 'fidget-ui';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

export default function AvatarBackgroundColors() {
  return (
    <>
      <Heading as="h5">Background colors</Heading>
      <P width={'fill-parent'}>
        Set the <Pre>fill</Pre> prop to customize the background color of an Avatar.
      </P>

      <Tabs
        id="avatar/background-colors"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8}>
                <Avatar fill={colors.emerald[500]} />
                <Avatar fill={colors.rose[500]} />
                <Avatar fill={colors.yellow[500]} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Avatar fill={colors.emerald[500]} />
<Avatar fill={colors.rose[500]} />
<Avatar fill={colors.yellow[500]} />`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
