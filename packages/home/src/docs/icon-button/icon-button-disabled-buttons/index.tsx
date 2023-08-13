import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { IconButtonDisabledButtons } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Disabled Buttons</Heading>

      <Preview id="icon-button/disabled-buttons" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <IconButtonDisabledButtons />
        </Case>
      </Preview>
    </>
  );
}
