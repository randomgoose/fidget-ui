import { renderChildren } from '../utils';
import { CardFooterProps } from './interface';
import { getCardStyles } from './styles';

const { AutoLayout } = figma.widget;

export function CardFooter(props: CardFooterProps) {
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
  } = props;

  const { footer } = getCardStyles();

  return (
    <AutoLayout {...footer}>
      {renderChildren(props.children, {
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
        },
      })}
    </AutoLayout>
  );
}
