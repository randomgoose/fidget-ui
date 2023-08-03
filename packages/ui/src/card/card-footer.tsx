import { renderChildren, splitProps } from '../utils';
import { CardFooterProps } from './interface';
import { getCardStyles } from './styles';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

export function CardFooter(props: CardFooterProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    defaultStyle: getCardStyles(),
    propStyle: props.style,
    globalStyle: globalConfig.Card?.style,
  });

  const { autolayoutProps, textProps } = splitProps(styles.footer);

  return (
    <AutoLayout {...autolayoutProps} name={NODE_NAME_MAP.footer}>
      {renderChildren(props.children, { textProps })}
    </AutoLayout>
  );
}
