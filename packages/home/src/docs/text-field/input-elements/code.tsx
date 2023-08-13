import { TextField, colors } from 'fidget-ui';
import { IconEnvelope, IconCheck } from 'fidget-ui/icons';

const { useSyncedState } = figma.widget;

export function InputElements() {
  const [email, setEmail] = useSyncedState('email', '');

  return (
    <TextField
      id="o4mf"
      elementLeft={<IconEnvelope color={colors.neutral[500]} width={16} height={16} />}
      elementRight={<IconCheck color={colors.emerald[500]} width={14} height={14} />}
      value={email}
      onTextEditEnd={(e) => setEmail(e.characters)}
      placeholder={'Please enter your email...'}
      width={240}
    />
  );
}
