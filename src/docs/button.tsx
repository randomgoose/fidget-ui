import { Button, Heading, TextField } from "../components"
import { Divider } from "../components/divider";
import { IconShare } from "../icons";
import { colors } from "../styles";
import { codeStyle, docStyle } from "./styles";
import { P, Pre } from "./typography";

const { widget } = figma
const { AutoLayout, Text, Span, useSyncedState } = widget

export function ButtonDoc() {
    const [, setPage] = useSyncedState("currentPage", "button")

    const notify = (message: string) => {
        return figma.notify(message);
    }

    return <AutoLayout
        {...docStyle}
        name="Button Doc"
    >
        <Heading as={"h1"}>Button</Heading>
        <P>Buttons are used to trigger actions or events.</P>
        <Divider />

        <Heading as={"h5"}>Variants</Heading>
        <P>Set the <Pre>Variant</Pre> prop to control the style of Button components.
            Available variants include <Pre>filled</Pre>, <Pre>outline</Pre> and <Pre>ghost</Pre>.
        </P>
        <AutoLayout spacing={8}>
            <Button variant="filled" onClick={() => notify("This is a filled button.")}>Filled</Button>
            <Button variant="outline" onClick={() => notify("This is an outline button.")}>Outline</Button>
            <Button variant="ghost" onClick={() => notify("This is a ghost button.")}>Ghost</Button>
        </AutoLayout>

        <Heading as={"h5"}>Sizes</Heading>
        <P>Button component comes in with 3 sizes: <Pre>lg(40px), md(32px)</Pre> and <Pre>sm(28px)</Pre>. The default value is <Pre>md</Pre>.
        </P>
        <AutoLayout spacing={8}>
            <Button size="lg">size=lg</Button>
            <Button size="md">size=md</Button>
            <Button size="sm">size=sm</Button>
        </AutoLayout>

        <Heading as={"h5"}>Color Schemes</Heading>
        <P onClick={() => setPage("colors")}>Set <Span {...codeStyle}>colorScheme</Span> prop to customize Button colors. See <Span fill={colors.blue[500]}>Colors</Span> for available color.</P>
        <AutoLayout spacing={4}>
            <Button colorScheme="blue">Blue</Button>
            <Button colorScheme="cyan" variant={"outline"}>Cyan</Button>
            <Button colorScheme="rose" variant={"ghost"}>Red</Button>
        </AutoLayout>

        <Heading as="h5">Disabled buttons</Heading>

        <AutoLayout spacing={8}>
            <Button variant="filled" colorScheme="blue" disabled>Disabled</Button>
            <Button variant="outline" colorScheme="red" disabled>Disabled</Button>
            <Button disabled variant="ghost">Disabled</Button>
        </AutoLayout>

        <Heading as="h5">Button with icon</Heading>
        <P>Add left and right icons to Button components with <Pre>leftIcon</Pre> and <Pre>rightIcon</Pre> props. You can pass in Heroicons or custom <Pre>Svg</Pre> component.</P>
        <AutoLayout spacing={8}>
            <Button leftIcon={<IconShare />}>Share</Button>
            <Button rightIcon={<IconShare />} variant={"outline"} colorScheme={"blue"}>Share</Button>
        </AutoLayout>

        <Heading as="h5">Block button</Heading>
        <P>Enable <Pre>block</Pre> prop to make a button fit its parent's width.</P>
        <AutoLayout name="Demo" stroke={colors.neutral[200]} padding={24} cornerRadius={6} direction={"vertical"} spacing={8} horizontalAlignItems={"center"}>
            <Heading as="h3">Feedback</Heading>
            <Text fontSize={14} fill={colors.neutral[500]}>Do you like this component library?</Text>
            <TextField width={240} id="button/block-button" value={""} onTextEditEnd={() => { }} placeholder={"Your email address..."} />
            <Button block>Submit</Button>
        </AutoLayout>
    </AutoLayout>
}