import { Heading } from 'fidget-ui';
import { P } from '../../typography';
import { Case, Preview } from '../../../components';
import { NoticeUsage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <P>Wrap a message in a Notice component to highlight it.</P>

      <Preview id="notice/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} padding={72}>
          <NoticeUsage />
        </Case>
      </Preview>
    </>
  );
}
