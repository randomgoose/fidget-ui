import { renderChildren } from '../utils';
import { CardHeaderProps } from './interface';
import { getCardStyles } from './styles';

const { AutoLayout } = figma.widget;

export function CardHeader(props: CardHeaderProps) {
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

  const { header } = getCardStyles();

  return (
    <AutoLayout {...header} name="Card Header">
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
