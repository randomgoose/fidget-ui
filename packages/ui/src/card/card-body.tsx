import { renderChildren, splitProps } from '../utils';
import { CardBodyProps } from './interface';
import { getCardStyles } from './styles';
import { NODE_NAME_MAP } from './utils';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';

const { AutoLayout } = figma.widget;

export function CardBody(props: CardBodyProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    defaultStyle: getCardStyles(),
    propStyle: props.style,
    globalStyle: globalConfig.Card?.style,
  });

  const { autolayoutProps, textProps } = splitProps(styles.body);

  return (
    <AutoLayout {...autolayoutProps} name={NODE_NAME_MAP.body}>
      {renderChildren(props.children, { textProps })}
    </AutoLayout>
  );
}
