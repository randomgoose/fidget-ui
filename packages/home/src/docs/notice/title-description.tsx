import { Heading, Notice, Tabs } from 'fidget-ui';
import { P, Pre, Code } from '../typography';
import { Case } from '../../components/case';

export default function NoticeTitleDescription() {
  return (
    <>
      <Heading as="h5">Title and description</Heading>
      <P>
        Pass <Pre>title</Pre> and <Pre>description</Pre> props to customize your messages.
      </P>

      <Tabs
        id="notice/title-description"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} padding={72}>
                <Notice
                  title={'Component updates available!'}
                  description={
                    'Click the button below to update components. This may take a while.'
                  }
                />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code>
                {`<Notice 
    title={"Component updates available!"}
    description={"Click the button below to update components. This may take a while."}
/>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
