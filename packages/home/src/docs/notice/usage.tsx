import { Heading, Notice, Tabs } from 'fidget-ui';
import { P, Code } from '../typography';
import { Case } from '../../components/case';

export default function NoticeUsage() {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <P>Wrap a message in a Notice component to highlight it.</P>

      <Tabs
        id="notice/usage"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} padding={72}>
                <Notice>Component updates available!</Notice>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: <Code height={240}>{`<Notice>Component updates available!</Notice>`}</Code>,
          },
        ]}
      />
    </>
  );
}
