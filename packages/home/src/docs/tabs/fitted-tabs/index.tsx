import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { FittedTabs } from './code';
import { P, Pre } from '../../typography';

export default function () {
  return (
    <>
      <Heading as="h5">Fitted tabs</Heading>

      <P>
        Pass <Pre>isFitted</Pre> prop to make the tab list fill its container.
      </P>

      <Preview id="tabs/filterd-tabs" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} padding={72}>
          <FittedTabs />
        </Case>
      </Preview>
    </>
  );
}
