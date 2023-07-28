import { renderChildren } from '../utils';
import { CardBodyProps } from './interface';
import { getCardStyles } from './styles';

const { AutoLayout } = figma.widget;

export function CardBody(props: CardBodyProps) {
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

  const { body } = getCardStyles();

  return (
    <AutoLayout {...body} name="Card Body">
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
