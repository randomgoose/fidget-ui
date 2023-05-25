import { docStyle } from './styles';
import * as icons from 'fidget-ui/icons';
import { Heading, SimpleGrid, TextField, Divider, Tabs, colors } from 'fidget-ui';
import { P, Pre } from './typography';

const { AutoLayout, Text, useSyncedState, Span } = figma.widget;

const allIconEntries = Object.entries(icons);
const solidIconEntries = allIconEntries.filter(([k]) => k.endsWith('Solid'));
const outlineIconEntries = allIconEntries.filter(([k]) => !k.endsWith('Solid'));

function IconDisplay({ name, component }: { name: string; component: any }) {
  const Icon = component;

  return (
    <AutoLayout
      direction={'vertical'}
      width={120}
      height={120}
      cornerRadius={8}
      horizontalAlignItems={'center'}
      padding={{ top: 32 }}
      spacing={8}
      stroke={colors.neutral[200]}
      hoverStyle={{ stroke: colors.blue[500] }}
      onClick={() => {}}
    >
      <Icon width={24} height={24} name={name} />
      <Text
        fontSize={9}
        lineHeight={12}
        horizontalAlignText={'center'}
        positioning={'absolute'}
        y={{ type: 'bottom', offset: 24 }}
        x={{ type: 'left-right', leftOffset: 16, rightOffset: 16 }}
      >
        {name.slice(4)}
      </Text>
    </AutoLayout>
  );
}

export function IconsDoc() {
  const [category, setCategory] = useSyncedState<string | number>('icons/category', 'outline');
  const [keyword, setKeyword] = useSyncedState('icons/keyword', '');

  return (
    <AutoLayout {...docStyle} name={'Icons Doc'} width={'hug-contents'}>
      <Heading as="h1">Icons</Heading>
      <P>
        Fidget UI bundles over 500 icons from{' '}
        <Span fill={colors.blue[500]} href="https://heroicons.com/">
          Heroicons
        </Span>
        .
      </P>
      <Divider />

      <Heading as="h5">Usage</Heading>
      <P>
        Use icons as components. For example, <Pre>{`<IconAcademicCapSolid />`}.</Pre> You can
        specify the <Pre>width, height</Pre> and <Pre>color</Pre> props of an Icon.
      </P>
      <AutoLayout spacing={8}>
        <icons.IconCogSolid />
        <icons.IconCogSolid width={16} height={16} color={colors.cyan[500]} />
      </AutoLayout>

      <Heading as="h5">Icon collection</Heading>
      <TextField
        width={'fill-parent'}
        size={'lg'}
        value={keyword}
        onTextEditEnd={(e) => setKeyword(e.characters)}
        leftElement={<icons.IconMagnifyingGlass width={16} height={16} />}
        placeholder={'Search'}
        onClear={() => setKeyword('')}
      />
      <Tabs
        width={'hug-contents'}
        activeKey={category}
        items={[
          {
            tab: 'Solid',
            key: 'solid',
            children: (
              <SimpleGrid columns={12} spacing={8} width={'hug-contents'}>
                {...solidIconEntries
                  .filter(([k]) => k.toLowerCase().includes(keyword.toLowerCase()))
                  .map(([k, Icon]) => <IconDisplay name={k} component={Icon} key={k} />)}
              </SimpleGrid>
            ),
          },
          {
            tab: 'Outline',
            key: 'outline',
            children: (
              <SimpleGrid columns={12} spacing={8} width={'hug-contents'}>
                {...outlineIconEntries
                  .filter(([k]) => k.toLowerCase().includes(keyword.toLowerCase()))
                  .map(([k, Icon]) => <IconDisplay name={k} component={Icon} key={k} />)}
              </SimpleGrid>
            ),
          },
        ]}
        onChange={(key) => setCategory(key)}
      />
    </AutoLayout>
  );
}
