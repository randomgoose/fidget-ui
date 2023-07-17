import { Heading, Tabs, Tag } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

const { useSyncedState } = figma.widget;

export default function DismissibleTags() {
  const [tags, setTags] = useSyncedState('tags', [
    'art rock',
    'prog',
    'britpop',
    'psychedelic rock',
  ]);

  return (
    <>
      <Heading as="h5">Dismissible tags</Heading>

      <Tabs
        id="tags/dismissible-tags"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case spacing={8} height={240}>
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
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`const [tags, setTags] = useSyncedState('tags', ['art rock', 'prog', 'britpop', 'psychedelic rock']);
                            
() => <>
    {tags.map((tag) => (
        <Tag
            dismissible={true}
            key={tag}
            variant={'subtle'}
            onClose={() => setTags((prev) => prev.filter((item) => item !== tag))}
        >
            {tag}
        </Tag>))}
</>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
