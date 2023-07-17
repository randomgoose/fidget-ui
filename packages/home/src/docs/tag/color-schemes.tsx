import { Heading, Tabs, Tag } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export default function TagColorSchemes() {
  return (
    <>
      <Heading as="h5">Color Schemes</Heading>
      <Tabs
        id="tag/color-schemes"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case padding={72} width={'fill-parent'} height={240} spacing={8}>
                <Tag colorScheme="neutral">neutral</Tag>
                <Tag colorScheme="indigo">indigo</Tag>
                <Tag colorScheme="blue">blue</Tag>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Tag colorScheme="neutral">neutral</Tag>
<Tag colorScheme="indigo">indigo</Tag>
<Tag colorScheme="blue">blue</Tag>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
