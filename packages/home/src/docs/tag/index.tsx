import { Divider, Heading } from 'fidget-ui';
import { docStyle } from '../styles';
import { P } from '../typography';
import TagColorSchemes from './color-schemes';
import TagVariants from './variants';
import TagSizes from './sizes';
import DismissibleTags from './dismissible-tags';
import { APIs } from '../../components';

const { widget } = figma;
const { AutoLayout } = widget;

export function TagDoc() {
  return (
    <AutoLayout {...docStyle} name={'Tag Doc'}>
      <Heading as="h1">Tag</Heading>
      <P>Tags are used to mark or categorize items.</P>
      <Divider />
      <TagColorSchemes />
      <TagVariants />
      <TagSizes />
      <DismissibleTags />

      <APIs code={`__FIDGET_COMPONENT_API`} />
    </AutoLayout>
  );
}
