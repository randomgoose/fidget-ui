import { Notice } from 'fidget-ui';
import { IconSunSolid } from 'fidget-ui/icons';

const { SVG } = figma.widget;

export function NoticeIcon() {
  return (
    <>
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
    </>
  );
}
