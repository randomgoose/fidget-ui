import { ElementProps } from '../types';

export const splitProps = (
  props: ElementProps
): {
  autoLayoutProps: AutoLayoutProps;
  textProps: TextProps;
} => {
  const {
    fontFamily,
    letterSpacing,
    textDecoration,
    fontSize,
    italic,
    textCase,
    fontWeight,
    fontPostScriptName,
    href = '',
    font,
    paragraphIndent,
    paragraphSpacing,
    horizontalAlignText,
    verticalAlignText,
    lineHeight,
    color = '#000000',
    ...rest
  } = props;

  return {
    autoLayoutProps: { ...rest },
    textProps: {
      fontFamily,
      letterSpacing,
      textDecoration,
      fontSize,
      italic,
      textCase,
      fontWeight,
      fontPostScriptName,
      href,
      font,
      paragraphIndent,
      paragraphSpacing,
      horizontalAlignText,
      verticalAlignText,
      lineHeight,
      fill: color,
    },
  };
};
