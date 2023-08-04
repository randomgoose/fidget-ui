import { IconChevronDown, IconChevronUp } from '../icons';
import { AccordionItemProps, AccordionProps } from './interface';
import { renderChildren, getSyncedKeys } from '../utils';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { getAccordionStyles } from './styles';

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

const NODE_NAME_MAP = {
  container: 'Accordion',
  panel: 'Accordion Panel',
  item: 'Accordion Item',
  itemButton: 'Accordion Button',
  itemTitle: 'Accordion Title Container',
  itemChevron: 'Accordion Chevron Container',
};

export function Accordion({ id, data, width = 320, style, ...rest }: AccordionProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    globalStyle: globalConfig.Accordion?.style,
    defaultStyle: getAccordionStyles(),
    propStyle: style,
  });

  const [syncedKeyActiveKeys] = getSyncedKeys('Accordion', id, ['activeKeys']);
  const [activeKeys, setActiveKeys] = useSyncedState<AccordionItemProps['key'][]>(
    syncedKeyActiveKeys,
    []
  );

  const isActiveKey = (key: AccordionItemProps['key']) => activeKeys.indexOf(key) > -1;
  const toggleActive = (key: AccordionItemProps['key']) => {
    if (isActiveKey(key)) {
      setActiveKeys([...activeKeys].filter((item) => item !== key));
    } else {
      setActiveKeys((prev) => [...prev, key]);
    }
  };

  const renderItem = ({ title, content, key }: AccordionItemProps) => {
    const isActive = isActiveKey(key);
    return (
      <AutoLayout name={NODE_NAME_MAP.item} key={key} {...styles.item}>
        <AutoLayout
          name={NODE_NAME_MAP.itemButton}
          onClick={() => toggleActive(key)}
          {...styles.button}
        >
          <AutoLayout name={NODE_NAME_MAP.itemTitle} width="fill-parent">
            {renderChildren(title, { textProps: styles.title })}
          </AutoLayout>

          <AutoLayout name={NODE_NAME_MAP.itemChevron} {...styles.chevronContainer}>
            {isActive ? (
              <IconChevronUp {...styles.chevron} />
            ) : (
              <IconChevronDown {...styles.chevron} />
            )}
          </AutoLayout>
        </AutoLayout>

        {isActive && (
          <AutoLayout name={NODE_NAME_MAP.panel} {...styles.panel}>
            {renderChildren(content, { textProps: styles.content })}
          </AutoLayout>
        )}
      </AutoLayout>
    );
  };

  return (
    <AutoLayout name={NODE_NAME_MAP.container} {...styles.container} width={width} {...rest}>
      {data.map((item) => renderItem(item))}
    </AutoLayout>
  );
}
