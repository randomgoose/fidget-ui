import { Heading, Avatar, Tabs } from 'fidget-ui';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

export default function AvatarSizes() {
  return (
    <>
      <Heading as="h5">Sizes</Heading>
      <P width={'fill-parent'}>
        Avatar comes in with 5 predefined sizes: <Pre>xs/sm/md/lg/xl</Pre>. Or you can specify a
        number.
      </P>

      <Tabs
        id="avatar/sizes"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8}>
                {['xl', 'lg', 'md', 'sm', 'xs', 72].map((size) => (
                  <Avatar
                    size={size as any}
                    src="https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    key={size}
                  />
                ))}
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code>
                {`['xl', 'lg', 'md', 'sm', 'xs', 72].map((size) => (
<Avatar
    size={size as any}
    src="https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    key={size}
/>))`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
