import { Tag } from 'fidget-ui';

const { useSyncedState } = figma.widget;

export function DismissibleTags() {
  const [tags, setTags] = useSyncedState('tags', [
    'art rock',
    'prog',
    'britpop',
    'psychedelic rock',
  ]);

  return (
    <>
      {tags.map((tag) => (
        <Tag
          key={tag}
          dismissible={true}
          variant={'subtle'}
          onClose={() => setTags((prev) => prev.filter((item) => item !== tag))}
        >
          {tag}
        </Tag>
      ))}
    </>
  );
}
