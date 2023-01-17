import { Accordion, Button, Heading, IconArrowIconRight } from "../components"
import { colors } from "../styles"
import { docStyle } from "./styles"

const { widget } = figma
const { AutoLayout, Text, Span } = widget

export function AccordionDoc() {
    return <AutoLayout
        {...docStyle}
    >
        <Heading as="h3">Accordion</Heading>
        <Accordion
            data={[
                {
                    key: 1,
                    title: "FAQ", content: "These are some frequently asked questions."
                },
                {
                    key: 2,
                    title: <Text
                        fontWeight={"bold"}
                        fill={colors.neutral[900]}
                        fontSize={14}
                        lineHeight={22}
                    >
                        Why use this <Span fill={colors.blue[500]}>library</Span>?
                    </Text>, content: "You should definitely use this library."
                },
                {
                    key: 3,
                    title: "Start with an Accordion component",
                    content: <Button rightIcon={<IconArrowIconRight />}>Documentation</Button>
                }
            ]} />
    </AutoLayout>
}