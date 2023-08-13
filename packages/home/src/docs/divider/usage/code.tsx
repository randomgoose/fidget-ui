import { Divider } from 'fidget-ui';
import { P } from '../../typography';

export function DividerUsage() {
  return (
    <>
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
        nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
        autem unde, nobis suscipit ratione earum.
      </P>
      <Divider />
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
        nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
        autem unde, nobis suscipit ratione earum.
      </P>
      <Divider margin={{ vertical: 36, horizontal: 64 }} />
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
        nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
        autem unde, nobis suscipit ratione earum.
      </P>
    </>
  );
}
