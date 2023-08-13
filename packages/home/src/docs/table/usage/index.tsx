import { Heading } from 'fidget-ui';
import { Preview } from '../../../components';
import { TableUsage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <Preview id="table/usage" code={`__FIDGET_DEMO_CODE`}>
        <TableUsage />
      </Preview>
    </>
  );
}
