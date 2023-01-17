import { colors } from "../../styles"
import { renderChildren } from "../../utils";
import { TabPaneProps, TabsProps } from "./interface";
import { getTabsStyles } from "./styles";

const { widget } = figma
const { AutoLayout, Rectangle } = widget

const styles = {
    tab: {
        base: {
            padding: { vertical: 5, horizontal: 12 },
        },
        active: {

        }
    },
    text: {
        base: {
            fontSize: 14,
            lineHeight: 22,
            fill: colors.neutral[500]
        },
        active: {

        }
    }
}

export function TabPanel({ children, tab }: TabPaneProps) {

    return <AutoLayout
        name="TabPane"
        width={"fill-parent"}
        height={"fill-parent"}
    >
        {renderChildren(children)}
    </AutoLayout>
}

function Tab() {
    return <AutoLayout name="Tab tab">

    </AutoLayout>
}

export function Tabs({
    variant = "line",
    items,
    isFitted,
    activeKey,
    colorScheme = "neutral",
    onChange
}: TabsProps) {

    const { container, tabList, tabLabel, tab: tabStyles, tabPanels: tabPanelsStyles, activeTab, activeTabLabel } = getTabsStyles({ variant, isFitted, colorScheme })

    const tabPanels = Array.isArray(items)
        ? items.filter(({ key }) => key === activeKey).map(({ tab, key, children, }) => (
            <TabPanel
                key={key}
                tab={tab}
            >
                {renderChildren(children, { textProps: { fontSize: 14, lineHeight: 22, fill: colors.neutral[900] } })}
            </TabPanel>
        ))
        : null

    const tabs = Array.isArray(items)
        ? items.map(({ tab, key }) => {

            const isActive = key === activeKey

            return <AutoLayout
                name="Tabs Tab"
                {...isActive ? { ...activeTab } : { ...tabStyles }}
                key={key}
                onClick={() => {
                    onChange && onChange(key)
                }}
            >
                {renderChildren(tab, { textProps: !isActive ? tabLabel : activeTabLabel })}
            </AutoLayout>
        })
        : null

    const divider = <Rectangle
        name="Divider"
        width={"fill-parent"}
        height={1}
        fill={colors.neutral[200]}
        positioning={"absolute"}
        x={{ type: "left-right", leftOffset: 0, rightOffset: 0 }}
        y={{ type: "bottom", offset: 0 }}
    />

    return <AutoLayout
        name="Tabs Container"
        {...container}
    >
        <AutoLayout
            name="Tabs Tab List"
            {...tabList}
        >
            {(variant === "line" || variant === "enclosed") ? divider : null}

            {tabs}
        </AutoLayout>

        <AutoLayout name="Tabs Tab Panes" {...tabPanelsStyles}>
            {tabPanels}
        </AutoLayout>
    </AutoLayout>
}