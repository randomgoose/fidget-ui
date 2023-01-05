import { Tabs } from "../components/tabs"

const { widget } = figma
const { AutoLayout, Text } = widget

export function TabsDoc() {
    return <AutoLayout
        verticalAlignItems={'center'}
        direction={"vertical"}
        spacing={24}
        padding={32}
        cornerRadius={8}
        fill={'#FFFFFF'}
        stroke={'#E6E6E6'}
        overflow={"visible"}
        width={480}
    >
        <Text fontSize={24} fontWeight={"bold"}>Tabs</Text>

        <Tabs />
    </AutoLayout>
}