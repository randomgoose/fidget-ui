import { Divider, Heading, Notice } from 'fidget-ui';
import { IconSunSolid } from 'fidget-ui/icons';
import { docStyle } from './styles';
import { Code, P, Pre } from './typography';

const { AutoLayout, SVG } = figma.widget;

export function NoticeDoc() {
  return (
    <AutoLayout {...docStyle} name="Notice Doc">
      <Heading as="h1">Notice</Heading>
      <P>Use Notice components to communicate important messages.</P>
      <Divider />

      <Heading as="h5">Usage</Heading>

      <P>Wrap a message in a Notice component to highlight it.</P>
      <Code>{`<Notice>Component updates available!</Notice>`}</Code>
      <Notice>Component updates available!</Notice>

      <Heading as="h5">Title and description</Heading>
      <P>
        Pass <Pre>title</Pre> and <Pre>description</Pre> props to customize your messages.
      </P>
      <Code>
        {`<Notice 
    title={"Component updates available!"}
    description={"Click the button below to update components. This may take a while."}
/>`}
      </Code>
      <Notice
        title={'Component updates available!'}
        description={'Click the button below to update components. This may take a while.'}
      />

      <Heading as="h5">Status</Heading>
      <P>
        Pass a <Pre>status</Pre> prop to change the appearance of Notice components. Available
        options are <Pre>info, success, warning</Pre> and <Pre>error</Pre>.
      </P>
      <AutoLayout spacing={8} direction={'vertical'} width={'fill-parent'}>
        <Notice>Component updates available!</Notice>
        <Notice status="success">Components updated successfully!</Notice>
        <Notice status="warning">Update components to resolve this issue.</Notice>
        <Notice status="error">Component updates failed. Check your network.</Notice>
      </AutoLayout>

      <Heading as="h5">Icon</Heading>
      <P>
        Each Notice component comes with an icon by default. Pass <Pre>false</Pre> to the{' '}
        <Pre>icon</Pre> prop to hide the icon. Pass an SVG component or Heroicon to override the
        default icon.
      </P>
      <AutoLayout spacing={8} direction={'vertical'} width={'fill-parent'}>
        <Notice icon={false}>Component updates available.</Notice>
        <Notice icon={<IconSunSolid />}>This is a Heroicon.</Notice>

        <Notice
          icon={
            <SVG
              src={`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.5H8V7.5H2V1.5Z" fill="#000000"/>
                    <path d="M8 7.5H14V13.5L8 7.5Z" fill="#000000"/>
                    <path d="M8 7.5V13.5H2L8 7.5Z" fill="#000000"/>
                    <path d="M8 4.5C8 2.84315 9.34315 1.5 11 1.5C12.6569 1.5 14 2.84315 14 4.5C14 6.15685 12.6569 7.5 11 7.5C9.34315 7.5 8 6.15685 8 4.5Z" fill="#000000"/>
                </svg>
                `}
            />
          }
        >
          This is a custom SVG component.
        </Notice>
      </AutoLayout>
    </AutoLayout>
  );
}
