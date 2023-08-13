import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { NoticeTitleDescription } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Title and description</Heading>

      <P>
        Pass <Pre>title</Pre> and <Pre>description</Pre> props to customize your messages.
      </P>

      <Preview id="notice/title-description" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} padding={72}>
          <NoticeTitleDescription />
        </Case>
      </Preview>
    </>
  );
}
