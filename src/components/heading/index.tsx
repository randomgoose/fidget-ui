import { colors } from '../../styles';
import { HeadingProps } from './interface';

const { widget } = figma;
const { Text } = widget;

export function Heading({ as, ...rest }: HeadingProps) {
  const getTextStyle = (as: HeadingProps['as']): TextProps => {
    switch (as) {
      case 'h1':
        return { fontSize: 36, lineHeight: 54, fontWeight: 'bold' };
      case 'h2':
        return { fontSize: 32, lineHeight: 48, fontWeight: 'bold' };
      case 'h3':
        return { fontSize: 28, lineHeight: 42, fontWeight: 'bold' };
      case 'h4':
        return { fontSize: 24, lineHeight: 36, fontWeight: 'bold' };
      case 'h5':
        return { fontSize: 20, lineHeight: 30, fontWeight: 'bold' };
      case 'h6':
        return { fontSize: 16, lineHeight: 24, fontWeight: 'bold' };
      default:
        return { fontSize: 16, lineHeight: 24, fontWeight: 'bold' };
    }
  };

  return <Text name="Heading" fill={colors.neutral[900]} {...getTextStyle(as)} {...rest} />;
}
