import { Heading, Notice, Tabs } from 'fidget-ui';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

export default function NoticeStatus() {
  return (
    <>
      <Heading as="h5">Status</Heading>
      <P>
        Pass a <Pre>status</Pre> prop to change the appearance of Notice components. Available
        options are <Pre>info, success, warning</Pre> and <Pre>error</Pre>.
      </P>

      <Tabs
        id="notice/status"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} direction="vertical" padding={72} spacing={16}>
                <Notice>Component updates available!</Notice>
                <Notice status="success">Components updated successfully!</Notice>
                <Notice status="warning">Update components to resolve this issue.</Notice>
                <Notice status="error">Component updates failed. Check your network.</Notice>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Notice>Component updates available!</Notice>
<Notice status="success">Components updated successfully!</Notice>
<Notice status="warning">Update components to resolve this issue.</Notice>
<Notice status="error">Component updates failed. Check your network.</Notice>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
