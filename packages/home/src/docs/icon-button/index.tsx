import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import { Code, P, Pre } from '../typography';
import IconButtonVariants from './icon-button-variants';
import IconButtonSizes from './icon-sizes';
import IconButtonColorSchemes from './icon-button-color-schemes';
import IconButtonDisabledButtons from './icon-button-disabled-buttons';

const { widget } = figma;
const { AutoLayout } = widget;

export function IconButtonDoc() {
  return (
    <AutoLayout {...docStyle} name={'Icon Button Doc'}>
      <Heading as={'h1'}>IconButton</Heading>
      <P>
        IconButton shares most properties of <Pre>Button</Pre>. The difference is IconButton only
        renders an icon in the button.
      </P>
      <Divider />

      <Code>{`import { IconButton } from 'fidget-ui'`}</Code>

      <IconButtonVariants />
      <IconButtonSizes />
      <IconButtonColorSchemes />
      <IconButtonDisabledButtons />
    </AutoLayout>
  );
}
