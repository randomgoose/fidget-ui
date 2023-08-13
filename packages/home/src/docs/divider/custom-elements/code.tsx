import { colors, Divider } from 'fidget-ui';
import { IconCog } from 'fidget-ui/icons';
import { P } from '../../typography';

export function DividerCustomElements() {
  return (
    <>
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
        nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
        autem unde, nobis suscipit ratione earum.
      </P>
      <Divider margin={{ vertical: 16 }}>Divider</Divider>
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
        nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
        autem unde, nobis suscipit ratione earum.
      </P>
      <Divider margin={{ vertical: 16 }}>✦✦✦</Divider>
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
        nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
        autem unde, nobis suscipit ratione earum.
      </P>
      <Divider margin={{ vertical: 16 }}>
        <IconCog color={colors.neutral[400]} />
      </Divider>
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat
        nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id
        autem unde, nobis suscipit ratione earum.
      </P>
    </>
  );
}
