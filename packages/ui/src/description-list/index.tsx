import { useFetchGlobalConfig } from '../config-provider';
import { renderChildren } from '../utils';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { DescriptionListItem, DescriptionListProps } from './interface';
import { getDescriptionListStyles } from './styles';

const { widget } = figma;
const { AutoLayout, Text } = widget;

const NODE_NAME_MAP = {
  container: 'Description Container',
  item: 'Description List Item',
  itemLabel: 'Description List Item Label',
  itemValue: 'Description List Item Value',
};

// eslint-disable-next-line
const findLongestLabelIndex = (items: DescriptionListItem[]) => {
  let index = 0;

  for (let i = 0; i < items.length; i++) {
    if (i > 0) {
      if (items[i].label.length > items[i - 1].label.length) {
        index++;
      }
    }
  }

  return index;
};

export function DescriptionList({ items, spacing = 16, style, ...rest }: DescriptionListProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    globalStyle: globalConfig.DescriptionList?.style,
    defaultStyle: getDescriptionListStyles({ spacing }),
    propStyle: style,
  });

  return (
    <AutoLayout name={NODE_NAME_MAP.container} {...styles.container} {...rest} direction="vertical">
      {items?.map(({ value, label }, index) => (
        <AutoLayout key={index} name={NODE_NAME_MAP.item} width="fill-parent" {...styles.item}>
          <Text width={128} name={NODE_NAME_MAP.itemLabel} {...styles.label}>
            {label}
          </Text>
          {renderChildren(value, { textProps: { name: NODE_NAME_MAP.itemValue, ...styles.value } })}
        </AutoLayout>
      ))}
    </AutoLayout>
  );
}
