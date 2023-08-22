import { Heading } from 'fidget-ui';
import { Preview } from '../../../components';
import { TableUsage } from './code';
import { P } from '../../typography';

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>
      <P>Use tables to organize and display data, or add custom controls to manipulate the data.</P>

      <Preview id="table/usage" code={`__FIDGET_DEMO_CODE`}>
        <TableUsage />
      </Preview>
    </>
  );
}
