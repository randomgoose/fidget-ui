import { Heading, Tabs, TextField, colors } from 'fidget-ui';
import { IconEnvelope, IconCheck } from 'fidget-ui/icons';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

const { useSyncedState } = figma.widget;

export default function InputElements() {
  const [email, setEmail] = useSyncedState('email', '');

  return (
    <>
      <Heading as="h5">Input elements</Heading>
      <P width={'fill-parent'}>
        Pass in <Pre>leftElement</Pre> and <Pre>rightElement</Pre> prop to add elements inside
        TextField components.
      </P>

      <Tabs
        id="text-field/input-elements"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} direction="vertical" spacing={8}>
                <TextField
                  id="o4mf"
                  elementLeft={<IconEnvelope color={colors.neutral[500]} width={16} height={16} />}
                  elementRight={<IconCheck color={colors.emerald[500]} width={14} height={14} />}
                  value={email}
                  onTextEditEnd={(e) => setEmail(e.characters)}
                  placeholder={'Please enter your email...'}
                  width={240}
                />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<TextField
    id="o4mf"
    elementLeft={<IconEnvelope color={colors.neutral[500]} width={16} height={16} />}
    elementRight={<IconCheck color={colors.emerald[500]} width={14} height={14} />}
    value={email}
    onTextEditEnd={(e) => setEmail(e.characters)}
    placeholder={'Please enter your email...'}
    width={240}
/>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
