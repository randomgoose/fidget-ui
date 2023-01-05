import { Accordion } from "../components"

const { widget } = figma
const { AutoLayout, Text } = widget

export function AccordionDoc() {
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
        <Text fontSize={24} fontWeight={"bold"}>Accordion</Text>
        <Accordion data={[
            { key: 1, title: "FAQ", content: "These are some frequently asked questions." },
            { key: 2, title: "Why use this library?", content: "You should definitely use this library." },
            { key: 3, title: "Start with an Accordion component", content: "Start using this library from an accordion component." }
        ]} />
    </AutoLayout>
}