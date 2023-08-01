import { ElementProps } from '../types';

export const splitProps = (
  props: ElementProps
): {
  autolayoutProps: AutoLayoutProps;
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
    autolayoutProps: { ...rest },
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
