import { Heading, IconButton, IconGlobeAlt, IconAcademicCap, IconCog6Tooth } from "../components";
import { ButtonSize } from "../components/button/interface";
import { Divider } from "../components/divider";
import { docStyle } from "./styles";
import { P, Pre } from "./typography";

const { widget } = figma;
const { AutoLayout } = widget;

export function IconButtonDoc() {
    return <AutoLayout {...docStyle} name={"Icon Button Doc"}>
        <Heading as={"h1"}>IconButton</Heading>
        <P>IconButton shares most properties of <Pre>Button</Pre>. The difference is IconButton only renders an icon in the button.</P>
        <Divider />

        <Heading>Usage</Heading>
        <P>Pass in </P>

        <Heading as="h5">Variants</Heading>
        <P>Identical to Button <Pre>variant</Pre> prop.</P>
        <AutoLayout spacing={4}>
            <IconButton icon={<IconGlobeAlt />} onClick={() => { }} />
            <IconButton variant="outline" icon={<IconGlobeAlt />} onClick={() => { }} />
            <IconButton variant="ghost" icon={<IconGlobeAlt />} onClick={() => { }} />
        </AutoLayout>
        <AutoLayout spacing={4}>
            <IconButton colorScheme="blue" icon={<IconGlobeAlt />} onClick={() => { }} />
            <IconButton colorScheme="blue" variant="outline" icon={<IconGlobeAlt />} onClick={() => { }} />
            <IconButton colorScheme="blue" variant="ghost" icon={<IconGlobeAlt />} onClick={() => { }} />
        </AutoLayout>

        <Heading as="h5">Sizes</Heading>
        <P>Identical to Button <Pre>size</Pre> prop.</P>
        <AutoLayout spacing={4}>
            {
                ["sm", "md", "lg"].map(size => <IconButton icon={<IconAcademicCap />} size={size as ButtonSize} />)
            }
        </AutoLayout>

        <Heading as="h5">Color Schemes</Heading>
        <P>Identical to Button <Pre>colorScheme</Pre> prop.</P>
        <AutoLayout spacing={4}>
            <IconButton icon={<IconCog6Tooth />} variant="filled" colorScheme="blue" >Disabled</IconButton>
            <IconButton icon={<IconCog6Tooth />} variant="outline" colorScheme="cyan" >Disabled</IconButton>
            <IconButton icon={<IconCog6Tooth />} variant="ghost" colorScheme="rose">Disabled</IconButton>
        </AutoLayout>

        <Heading as="h5">Disabled Buttons</Heading>
        <AutoLayout spacing={4}>
            <IconButton icon={<IconCog6Tooth />} variant="filled" colorScheme="blue" disabled>Disabled</IconButton>
            <IconButton icon={<IconCog6Tooth />} variant="outline" colorScheme="red" disabled>Disabled</IconButton>
            <IconButton icon={<IconCog6Tooth />} disabled variant="ghost">Disabled</IconButton>
        </AutoLayout>
    </AutoLayout>
}