import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { CardUsage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>
      <P>
        Compose a Card with <Pre>CardHeader</Pre>, <Pre>CardBody</Pre> and <Pre>Card Footer</Pre>.
      </P>

      <Preview id="card/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <CardUsage />
        </Case>
      </Preview>
    </>
  );
}
