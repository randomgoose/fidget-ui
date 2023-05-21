import { colors } from '../../styles';
import { renderChildren } from '../../utils';
import { TabsProps } from './interface';
import { getTabsStyles } from './styles';

const { widget } = figma;
const { AutoLayout, Rectangle, useSyncedState } = widget;

export function Tabs({
  id,
  variant = 'line',
  items,
  isFitted,
  defaultActiveKey,
  colorScheme = 'neutral',
  width = 'fill-parent',
  onChange,
  ...rest
}: TabsProps) {
  const [activeKey, setActiveKey] = useSyncedState(
    `fidget/tabs/${id}/activeKey`,
    defaultActiveKey || items?.[0].key
  );

  /* ---- Styles ---- */
  const {
    container,
    tabList,
    tabLabel,
    tab: tabStyles,
    tabPanels: tabPanelsStyles,
    activeTab,
    activeTabLabel,
  } = getTabsStyles({ variant, isFitted, colorScheme, width });

  const mergedActiveKey = rest.activeKey ? rest.activeKey : activeKey;

  const tabPanels = Array.isArray(items)
    ? items
        .filter(({ key }) => key === mergedActiveKey)
        .map(({ tab, key, children }) => (
          <AutoLayout name="Tab Panel" height={'hug-contents'} key={key} {...rest}>
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
            name="Tabs Tab"
            {...(isActive ? { ...activeTab } : { ...tabStyles })}
            onClick={() => {
              onChange && onChange(key);
              setActiveKey(key);
            }}
            key={key}
          >
            {renderChildren(tab, { textProps: !isActive ? tabLabel : activeTabLabel })}
          </AutoLayout>
        );
      })
    : null;

  const divider = (
    <Rectangle
      name="Divider"
      width={'fill-parent'}
      height={1}
      fill={colors.neutral[200]}
      positioning={'absolute'}
      x={{ type: 'left-right', leftOffset: 0, rightOffset: 0 }}
      y={{ type: 'bottom', offset: variant === 'line' ? -1 : 0 }}
    />
  );

  return (
    <AutoLayout name="Tabs Container" {...container} {...rest} width={width}>
      <AutoLayout name="Tabs Tab List" {...tabList}>
        {variant === 'line' || variant === 'enclosed' ? divider : null}
        {tabs}
      </AutoLayout>

      <AutoLayout name="Tabs Tab Panels" {...tabPanelsStyles}>
        {tabPanels}
      </AutoLayout>
    </AutoLayout>
  );
}
