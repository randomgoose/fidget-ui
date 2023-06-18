import { colors } from '../styles';
import { HeadingProps } from './interface';

const { widget } = figma;
const { Text } = widget;

const NODE_NAME_MAP = {
  heading: 'Heading',
};

export function Heading({ as, ...rest }: HeadingProps) {
  const getTextStyle = (as: HeadingProps['as']): TextProps => {
    const commonStyle: Partial<TextProps> = { fontWeight: 'bold' };
    switch (as) {
      case 'h1':
        return { ...commonStyle, fontSize: 36, lineHeight: 54 };
      case 'h2':
        return { ...commonStyle, fontSize: 32, lineHeight: 48 };
      case 'h3':
        return { ...commonStyle, fontSize: 28, lineHeight: 42 };
      case 'h4':
        return { ...commonStyle, fontSize: 24, lineHeight: 36 };
      case 'h5':
        return { ...commonStyle, fontSize: 20, lineHeight: 30 };
      case 'h6':
        return { ...commonStyle, fontSize: 16, lineHeight: 24 };
      default:
        return { ...commonStyle, fontSize: 16, lineHeight: 24 };
    }
  };

  return (
    <Text name={NODE_NAME_MAP.heading} fill={colors.neutral[900]} {...getTextStyle(as)} {...rest} />
  );
}
