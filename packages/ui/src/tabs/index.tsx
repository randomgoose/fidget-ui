import { useFetchGlobalConfig } from '../config-provider';
import { colors } from '../styles';
import { renderChildren, getSyncedKeys } from '../utils';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { TabsProps } from './interface';
import { getTabsStyles } from './styles';

const { widget } = figma;
const { AutoLayout, Rectangle, useSyncedState } = widget;

const NODE_NAME_MAP = {
  root: 'Tabs Container',
  tabs: 'Tabs Tab List',
  tab: 'Tabs Tab',
  panels: 'Tabs Tab Panels',
  panel: 'Tab Panel',
  divider: 'Divider',
};

export function Tabs({
  id,
  variant = 'line',
  items,
  isFitted,
  defaultActiveKey,
  colorScheme = 'neutral',
  width = 'fill-parent',
  onChange,
  style,
  ...rest
}: TabsProps) {
  const [syncedKeyActiveKey] = getSyncedKeys('Tabs', id, ['activeKey']);
  const [activeKey, setActiveKey] = useSyncedState(
    syncedKeyActiveKey,
    defaultActiveKey || items?.[0].key
  );

  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    globalStyle: globalConfig.Tabs?.style,
    propStyle: style,
    defaultStyle: getTabsStyles({ variant, isFitted, colorScheme, width }),
  });

  const mergedActiveKey = rest.activeKey ? rest.activeKey : activeKey;

  const tabPanels = Array.isArray(items)
    ? items
        .filter(({ key }) => key === mergedActiveKey)
        .map(({ key, children }) => (
          // UPDATE: The width of tab panels should follow the set of Tabs component
          <AutoLayout
            name={NODE_NAME_MAP.panel}
            height="hug-contents"
            width={width || 'fill-parent'}
            {...rest}
            key={key}
          >
            {renderChildren(children, {
              textProps: { fontSize: 14, lineHeight: 22, fill: colors.neutral[900] },
            })}
          </AutoLayout>
        ))
    : null;

  const tabs = Array.isArray(items)
    ? items.map(({ tab, key }) => {
        const isActive = key === mergedActiveKey;
        return (
          <AutoLayout
            key={key}
            name={NODE_NAME_MAP.tab}
            {...(isActive ? { ...styles.activeTab } : { ...styles.tab })}
            onClick={() => {
              setActiveKey(key);
              return onChange?.(key);
            }}
          >
            {renderChildren(tab, {
              textProps: !isActive ? styles.tabLabel : styles.activeTabLabel,
            })}
          </AutoLayout>
        );
      })
    : null;

  const divider = (
    <Rectangle
      name={NODE_NAME_MAP.divider}
      width="fill-parent"
      height={1}
      fill={colors.neutral[200]}
      positioning="absolute"
      x={{ type: 'left-right', leftOffset: 0, rightOffset: 0 }}
      y={{ type: 'bottom', offset: variant === 'line' ? -1 : 0 }}
    />
  );

  return (
    <AutoLayout name={NODE_NAME_MAP.root} {...styles.container} {...rest} width={width}>
      <AutoLayout name={NODE_NAME_MAP.tabs} {...styles.tabList}>
        {variant === 'line' || variant === 'enclosed' ? divider : null}
        {tabs}
      </AutoLayout>

      <AutoLayout
        name={NODE_NAME_MAP.panels}
        overflow={rest.overflow || 'hidden'}
        {...styles.tabPanels}
      >
        {tabPanels}
      </AutoLayout>
    </AutoLayout>
  );
}
