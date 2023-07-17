import { Heading, Notice, Tabs } from 'fidget-ui';
import { IconSunSolid } from 'fidget-ui/icons';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

const { SVG } = figma.widget;

export default function NoticeIcon() {
  return (
    <>
      <Heading as="h5">Icon</Heading>
      <P>
        Each Notice component comes with an icon by default. Pass <Pre>false</Pre> to the{' '}
        <Pre>icon</Pre> prop to hide the icon. Pass an SVG component or Heroicon to override the
        default icon.
      </P>

      <Tabs
        id="notice/icon"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} padding={72} spacing={16} direction="vertical">
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
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code width={'fill-parent'}>
                {`<Notice icon={false}>Component updates available.</Notice>
<Notice icon={<IconSunSolid />}>This is a Heroicon.</Notice>
<Notice
    icon={
        <SVG
            src={"<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.5H8V7.5H2V1.5Z" fill="#000000" />
                    <path d="M8 7.5H14V13.5L8 7.5Z" fill="#000000" />
                    <path d="M8 7.5V13.5H2L8 7.5Z" fill="#000000" />
                    <path d="M8 4.5C8 2.84315 9.34315 1.5 11 1.5C12.6569 1.5 14 2.84315 14 4.5C14 6.15685 12.6569 7.5 11 7.5C9.34315 7.5 8 6.15685 8 4.5Z" fill="#000000" />
                </svg>"}
        />}
>
    This is a custom SVG component.
</Notice>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
