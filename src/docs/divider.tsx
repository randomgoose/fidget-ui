import { Heading } from '../components';
import { Divider } from '../components/divider';
import { IconCog } from '../icons';
import { colors } from '../styles';
import { docStyle } from './styles';
import { Code, P, Pre } from './typography';

const { widget } = figma;
const { AutoLayout, Text } = widget;

export function DividerDoc() {
  return (
    <AutoLayout name="divider" {...docStyle}>
      <Heading as={'h1'}>Divider</Heading>
      <Divider />
      <Code>{`import { Divider } from "fidget-ui"`}</Code>
      <Heading as="h5">Usage</Heading>
      <P>
        Add a divider to visually divide elements. Pass a <Pre>margin</Pre> prop to custmoize the
        spacing between the divider and other elements.
      </P>

      <Code>
        {`<AutoLayout direction="vertical">
    <Text>...</Text>
    <Divider />
    <Text>...</Text>
    <Divider margin={{ vertical: 36, horizontal: 64 }} />
    <Text>...</Text>
</AutoLayout>`}
      </Code>

      <AutoLayout
        fill={colors.neutral[50]}
        direction={'vertical'}
        width={'fill-parent'}
        padding={24}
      >
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
          nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
          autem unde, nobis suscipit ratione earum.
        </P>
        <Divider />
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
          nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
          autem unde, nobis suscipit ratione earum.
        </P>
        <Divider margin={{ vertical: 36, horizontal: 64 }} />
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
          nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
          autem unde, nobis suscipit ratione earum.
        </P>
      </AutoLayout>

      <Heading as="h5">Orientation</Heading>
      <P>
        Set the orientation of a Divider with <Pre>oritentation</Pre> prop. It can either be{' '}
        <Pre>horizontal</Pre> or <Pre>vertical</Pre>.
      </P>

      <AutoLayout direction={'vertical'} width={400}>
        <Divider />
      </AutoLayout>

      <AutoLayout>
        <Text>Item 1</Text>
        <Divider orientation={'vertical'} />
        <Text>Item 2</Text>
        <Divider orientation={'vertical'} />
        <Text>Item 3</Text>
      </AutoLayout>

      <Heading as="h5">Divider with custom elements</Heading>
      <P>
        Pass a <Pre>children</Pre> prop to add custom elements.
      </P>
      <Code>
        {`<Divider>Divider</Divider>
<Divider>✦✦✦</Divider>
<Divider><IconCog color={colors.neutral[400]}/></Divider>`}
      </Code>

      <AutoLayout
        fill={colors.neutral[50]}
        direction={'vertical'}
        width={'fill-parent'}
        padding={24}
      >
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
          nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
          autem unde, nobis suscipit ratione earum.
        </P>
        <Divider margin={{ vertical: 16 }}>Divider</Divider>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
          nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
          autem unde, nobis suscipit ratione earum.
        </P>
        <Divider margin={{ vertical: 16 }}>✦✦✦</Divider>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
          nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
          autem unde, nobis suscipit ratione earum.
        </P>
        <Divider margin={{ vertical: 16 }}>
          <IconCog color={colors.neutral[400]} />
        </Divider>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
          nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
          autem unde, nobis suscipit ratione earum.
        </P>
      </AutoLayout>
    </AutoLayout>
  );
}
