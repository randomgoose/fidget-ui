import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { NoticeStatus } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Status</Heading>

      <P>
        Pass a <Pre>status</Pre> prop to change the appearance of Notice components. Available
        options are <Pre>info, success, warning</Pre> and <Pre>error</Pre>.
      </P>

      <Preview id="notice/status" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} padding={72} spacing={16} direction="vertical">
          <NoticeStatus />
        </Case>
      </Preview>
    </>
  );
}
