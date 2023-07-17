import { Heading, colors, Divider, Tabs } from 'fidget-ui';
import { P, Pre, Code } from '../typography';
import { Case } from '../../components/case';

export default function DividerUsage() {
  return (
    <>
      <Heading as="h5">Usage</Heading>
      <P>
        Add a divider to visually divide elements. Pass a <Pre>margin</Pre> prop to customize the
        spacing between the divider and other elements.
      </P>

      <Tabs
        id="divider/usage"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case
                fill={colors.neutral[50]}
                direction={'vertical'}
                width={'fill-parent'}
                padding={24}
              >
                <P>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum.
                  Fugiat nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis
                  enim incidunt id autem unde, nobis suscipit ratione earum.
                </P>
                <Divider />
                <P>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum.
                  Fugiat nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis
                  enim incidunt id autem unde, nobis suscipit ratione earum.
                </P>
                <Divider margin={{ vertical: 36, horizontal: 64 }} />
                <P>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum.
                  Fugiat nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis
                  enim incidunt id autem unde, nobis suscipit ratione earum.
                </P>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code>
                {`<Text>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
    nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
    autem unde, nobis suscipit ratione earum.
</Text>
<Divider />
<Text>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
    nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
    autem unde, nobis suscipit ratione earum.
</Text>
<Divider margin={{ vertical: 36, horizontal: 64 }} />
<Text>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
    nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
    autem unde, nobis suscipit ratione earum.
</Text>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
