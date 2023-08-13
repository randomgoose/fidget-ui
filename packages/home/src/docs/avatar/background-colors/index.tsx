import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Preview, Case } from '../../../components';
import { AvatarBackgroundColors } from './code';

export default function () {
  const id = 'avatar/background-colors';
  return (
    <>
      <Heading as="h5">Background colors</Heading>
      <P width={'fill-parent'}>
        Set the <Pre>fill</Pre> prop to customize the background color of an Avatar.
      </P>

      <Preview id={id} code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <AvatarBackgroundColors />
        </Case>
      </Preview>
    </>
  );
}
