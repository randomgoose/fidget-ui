import { Heading, Tabs, Tag } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export default function TagVariants() {
  return (
    <>
      <Heading as="h5">Variants</Heading>

      <Tabs
        id="tag/variants"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8}>
                <Tag variant={'solid'}>solid</Tag>
                <Tag variant={'subtle'}>subtle</Tag>
                <Tag variant={'outline'}>outline</Tag>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Tag variant={'solid'}>solid</Tag>
<Tag variant={'subtle'}>subtle</Tag>
<Tag variant={'outline'}>outline</Tag>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
