import { Heading } from "../components";
import { colors } from "../styles";
import { Code } from "./code";

const { widget } = figma
const { AutoLayout, Text } = widget

export default function HeadingDoc() {
    return <AutoLayout
        verticalAlignItems={'center'}
        direction={"vertical"}
        spacing={24}
        padding={32}
        cornerRadius={8}
        fill={'#FFFFFF'}
        stroke={'#E6E6E6'}
        overflow={"visible"}
        width={"hug-contents"}
    >
        <Heading as={"h3"}>Heading</Heading>

        <AutoLayout name="Flex" direction="vertical">
            <Heading as="h1">Heading 1</Heading>
            <Heading as="h2">Heading 2</Heading>
            <Heading as="h3">Heading 3</Heading>
            <Heading as="h4">Heading 4</Heading>
            <Heading as="h5">Heading 5</Heading>
            <Heading as="h6">Heading 6</Heading>
        </AutoLayout>

        <Code>
            {
                `<AutoLayout name="Flex" direction="vertical">
    <Heading as="h1">Heading 1</Heading>
    <Heading as="h2">Heading 2</Heading>
    <Heading as="h3">Heading 3</Heading>
    <Heading as="h4">Heading 4</Heading>
    <Heading as="h5">Heading 5</Heading>
    <Heading as="h6">Heading 6</Heading>
</AutoLayout>`
            }
        </Code>
    </AutoLayout >
}