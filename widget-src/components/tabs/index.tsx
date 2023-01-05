import { colors } from "../../styles"

const { widget } = figma
const { AutoLayout, Text } = widget

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

interface TabsProps {
    isFitted?: boolean;
    children?: FigmaDeclarativeNode;
}

interface TabPaneProps {
    children: FigmaDeclarativeNode;
}

export function TabPane({ children }: TabPaneProps) {
    const getChildren = (children: FigmaDeclarativeNode) => {
        if (Array.isArray(children)) {
            return children.map(child => {
                if (typeof child === "string") {
                    <Text>{child}</Text>
                } else {
                    return child
                }
            })
        } else {
            return children
        }
    }

    return <AutoLayout width={"fill-parent"} height={"fill-parent"}>
        {getChildren(children)}
    </AutoLayout>
}

export function Tabs({ children }: TabsProps) {
    return <AutoLayout name="Tabs" width={"fill-parent"} direction={"vertical"}>

        <AutoLayout name="Tabs__tab-list" spacing={8}>
            <AutoLayout
                name="Tabs__tab"
                {...styles.tab.base}
            >
                <Text {...styles.text.base}>Tab 1</Text>
                {/* <Line stroke={colors.neutral[900]} length={"fill-parent"} positioning={"absolute"} y={{ type: "bottom", offset: 0 }} /> */}
            </AutoLayout>

            <AutoLayout {...styles.tab.base}>
                <Text>Tab 2</Text>
            </AutoLayout>

            <AutoLayout {...styles.tab.base}>
                <Text>Tab 3</Text>
            </AutoLayout>
        </AutoLayout>

        {/* <AutoLayout name="Tabs__tab-pane" padding={16}>
            <Text>hgu</Text>
        </AutoLayout> */}

        <TabPane>
            <AutoLayout><Text>hi</Text></AutoLayout>
        </TabPane>

        {/* <Line stroke={colors.neutral[200]} length={"fill-parent"} name={"Tabs__divider"} /> */}
    </AutoLayout>
}