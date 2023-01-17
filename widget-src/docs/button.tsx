import { Button, Heading, IconAcademicIconCap, IconButton, IconCogIcon6IconTooth, IconGlobeIconAlt, TextField } from "../components"
import { ButtonSize } from "../components/button/interface";
import { colors } from "../styles";
import { docStyle } from "./styles";

const { widget } = figma
const { AutoLayout, Text } = widget

export function ButtonDoc() {

    const notify = (message: string) => {
        return figma.notify(message);
    }

    return <AutoLayout
        {...docStyle}
        name="Button Doc"
        direction={"horizontal"}
        verticalAlignItems={"start"}
    >
        <AutoLayout name="Button" direction="vertical" spacing={24}>
            <Heading as={"h3"}>Button</Heading>

            <Heading as={"h5"}>Variants</Heading>
            <AutoLayout spacing={8}>
                <Button variant="filled" onClick={() => notify("This is a filled button.")}>Filled</Button>
                <Button variant="outline" onClick={() => notify("This is an outline button.")}>Outline</Button>
                <Button variant="ghost" onClick={() => notify("This is a ghost button.")}>Ghost</Button>
            </AutoLayout>

            <AutoLayout spacing={8}>
                <Button colorScheme="blue" variant="filled" onClick={() => notify("This is a filled button.")}>Filled</Button>
                <Button colorScheme="blue" variant="outline" onClick={() => notify("This is an outline button.")}>Outline</Button>
                <Button colorScheme="blue" variant="ghost" onClick={() => notify("This is a ghost button.")}>Ghost</Button>
            </AutoLayout>

            <Heading as={"h5"}>Sizes</Heading>
            <AutoLayout spacing={8}>
                <Button size="lg">size=lg</Button>
                <Button size="md">size=md</Button>
                <Button size="sm">size=sm</Button>
            </AutoLayout>

            <Heading as={"h5"}>Color Schemes</Heading>
            <AutoLayout spacing={4}>
                <Button colorScheme="blue">Blue</Button>
                <Button colorScheme="cyan" variant={"outline"}>Blue</Button>
                <Button colorScheme="rose" variant={"ghost"}>Blue</Button>
            </AutoLayout>

            <Heading as="h5">Disabled buttons</Heading>
            <AutoLayout spacing={8}>
                <Button variant="filled" colorScheme="blue" disabled>Disabled</Button>
                <Button variant="outline" colorScheme="red" disabled>Disabled</Button>
                <Button disabled variant="ghost">Disabled</Button>
            </AutoLayout>

            <Heading as="h5">Button with icon</Heading>
            <AutoLayout spacing={4}>
                <Button leftIcon={<IconAcademicIconCap />}>Share</Button>
                <Button rightIcon={<IconAcademicIconCap />}>Share</Button>
            </AutoLayout>

            <Heading as="h5">Block button</Heading>

            <AutoLayout name="Demo" stroke={colors.neutral[200]} padding={24} cornerRadius={6} direction={"vertical"} spacing={8} horizontalAlignItems={"center"}>
                <Heading as="h3">Feedback</Heading>
                <Text fontSize={14} fill={colors.neutral[500]}>Do you like this component library?</Text>
                <TextField width={240} id="button/block-button" value={""} onTextEditEnd={() => { }} placeholder={"Your email address..."} />
                <Button block>Submit</Button>
            </AutoLayout>
        </AutoLayout>

        <AutoLayout name="Icon Button" direction="vertical" spacing={24}>
            <Heading as={"h3"}>Icon Button</Heading>
            <Heading as="h5">Variants</Heading>
            <AutoLayout spacing={4}>
                <IconButton icon={<IconGlobeIconAlt />} onClick={() => { }} />
                <IconButton variant="outline" icon={<IconGlobeIconAlt />} onClick={() => { }} />
                <IconButton variant="ghost" icon={<IconGlobeIconAlt />} onClick={() => { }} />
            </AutoLayout>
            <AutoLayout spacing={4}>
                <IconButton colorScheme="blue" icon={<IconGlobeIconAlt />} onClick={() => { }} />
                <IconButton colorScheme="blue" variant="outline" icon={<IconGlobeIconAlt />} onClick={() => { }} />
                <IconButton colorScheme="blue" variant="ghost" icon={<IconGlobeIconAlt />} onClick={() => { }} />
            </AutoLayout>

            <Heading as="h5">Sizes</Heading>
            <AutoLayout spacing={4}>
                {
                    ["sm", "md", "lg"].map(size => <IconButton icon={<IconAcademicIconCap />} size={size as ButtonSize} />)
                }
            </AutoLayout>

            <Heading as="h5">Disabled Buttons</Heading>
            <AutoLayout spacing={4}>
                <IconButton icon={<IconCogIcon6IconTooth />} variant="filled" colorScheme="blue" >Disabled</IconButton>
                <IconButton icon={<IconCogIcon6IconTooth />} variant="outline" colorScheme="cyan" >Disabled</IconButton>
                <IconButton icon={<IconCogIcon6IconTooth />} variant="ghost" colorScheme="rose">Disabled</IconButton>
            </AutoLayout>

            <Heading as="h5">Disabled Buttons</Heading>
            <AutoLayout spacing={4}>
                <IconButton icon={<IconCogIcon6IconTooth />} variant="filled" colorScheme="blue" disabled>Disabled</IconButton>
                <IconButton icon={<IconCogIcon6IconTooth />} variant="outline" colorScheme="red" disabled>Disabled</IconButton>
                <IconButton icon={<IconCogIcon6IconTooth />} disabled variant="ghost">Disabled</IconButton>
            </AutoLayout>
        </AutoLayout>

    </AutoLayout>
}