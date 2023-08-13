import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { AvatarSizes } from './code';

export default function () {
  const id = 'avatar/sizes';
  return (
    <>
      <Heading as="h5">Sizes</Heading>

      <P width={'fill-parent'}>
        Avatar comes in with 5 predefined sizes: <Pre>xs/sm/md/lg/xl</Pre>. Or you can specify a
        number.
      </P>

      <Preview id={id} code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <AvatarSizes />
        </Case>
      </Preview>
    </>
  );
}
