import { Heading, Tabs, Tag } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export default function TagSizes() {
  return (
    <>
      <Heading as="h5">Sizes</Heading>

      <Tabs
        id="tag/sizes"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case spacing={8} height={240}>
                <Tag size="sm">size=sm</Tag>
                <Tag size="md">size=md</Tag>
                <Tag size="lg">size=lg</Tag>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Tag size="sm">size=sm</Tag>
<Tag size="md">size=md</Tag>
<Tag size="lg">size=lg</Tag>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
