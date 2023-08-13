import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { NoticeIcon } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Icon</Heading>

      <P>
        Each Notice component comes with an icon by default. Pass <Pre>false</Pre> to the{' '}
        <Pre>icon</Pre> prop to hide the icon. Pass an SVG component or Heroicon to override the
        default icon.
      </P>

      <Preview id="notice/icon" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} padding={72} spacing={16} direction="vertical">
          <NoticeIcon />
        </Case>
      </Preview>
    </>
  );
}
