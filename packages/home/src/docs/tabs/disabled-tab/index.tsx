import { Heading } from 'fidget-ui';
import { Preview } from '../../../components';
import { DisabledTab } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Disable a tab</Heading>

      <Preview id="tabs/disabled" code={`__FIDGET_DEMO_CODE`}>
        <DisabledTab />
      </Preview>
    </>
  );
}
