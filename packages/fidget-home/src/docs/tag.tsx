import { Divider, Heading, SimpleGrid, Tag } from 'fidget-ui';
import { docStyle } from './styles';
import { P } from './typography';
import { COLORS } from './variables';

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

export function TagDoc() {
  const [tags, setTags] = useSyncedState('tags', [
    'art rock',
    'prog',
    'britpop',
    'psychedelic rock',
  ]);

  return (
    <AutoLayout {...docStyle} name={'Tag Doc'}>
      <Heading as="h1">Tag</Heading>
      <P>Tags are used to mark or categorize items.</P>
      <Divider />

      <Heading as="h5">Color Schemes</Heading>

      <AutoLayout spacing={8} width={'fill-parent'}>
        <SimpleGrid columns={8} width={'fill-parent'} spacing={24}>
          {...COLORS.map((color, index) => (
            <Tag width={'fill-parent'} colorScheme={color as any} key={index}>
              {color}
            </Tag>
          ))}
        </SimpleGrid>
      </AutoLayout>

      <Heading as="h5">Variants</Heading>

      <AutoLayout spacing={8}>
        <Tag variant={'solid'}>solid</Tag>
        <Tag variant={'subtle'}>subtle</Tag>
        <Tag variant={'outline'}>outline</Tag>
      </AutoLayout>

      <Heading as="h5">Sizes</Heading>

      <AutoLayout spacing={8}>
        <Tag size="sm">size=sm</Tag>
        <Tag size="md">size=md</Tag>
        <Tag size="lg">size=lg</Tag>
      </AutoLayout>

      <Heading as="h5">Dismissible tags</Heading>

      <AutoLayout spacing={4}>
        {tags.map((tag) => (
          <Tag
            dismissible={true}
            key={tag}
            variant={'subtle'}
            onClose={() => setTags((prev) => prev.filter((item) => item !== tag))}
          >
            {tag}
          </Tag>
        ))}
      </AutoLayout>
    </AutoLayout>
  );
}
