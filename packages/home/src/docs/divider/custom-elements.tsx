import { Heading, colors, Divider, Tabs } from 'fidget-ui';
import { IconCog } from 'fidget-ui/icons';
import { P, Pre, Code } from '../typography';
import { Case } from '../../components/case';

export default function DividerCustomElements() {
  return (
    <>
      <Heading as="h5">Divider with custom elements</Heading>
      <P>
        Pass a <Pre>children</Pre> prop to add custom elements.
      </P>

      <Tabs
        id="divider/custom-elements"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case direction="vertical" height={'hug-contents'} padding={32}>
                <P>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum.
                  Fugiat nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis
                  enim incidunt id autem unde, nobis suscipit ratione earum.
                </P>
                <Divider margin={{ vertical: 16 }}>Divider</Divider>
                <P>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum.
                  Fugiat nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis
                  enim incidunt id autem unde, nobis suscipit ratione earum.
                </P>
                <Divider margin={{ vertical: 16 }}>✦✦✦</Divider>
                <P>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum.
                  Fugiat nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis
                  enim incidunt id autem unde, nobis suscipit ratione earum.
                </P>
                <Divider margin={{ vertical: 16 }}>
                  <IconCog color={colors.neutral[400]} />
                </Divider>
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
<Divider margin={{ vertical: 16 }}>Divider</Divider>
<Text>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
    nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
    autem unde, nobis suscipit ratione earum.
</Text>
<Divider margin={{ vertical: 16 }}>✦✦✦</Divider>
<Text>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
    nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
    autem unde, nobis suscipit ratione earum.
</Text>
<Divider margin={{ vertical: 16 }}>
    <IconCog color={colors.neutral[400]} />
</Divider>
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
