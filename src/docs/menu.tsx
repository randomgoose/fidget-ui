import { Button, Heading } from "../components"
import { Menu } from "../components/menu"
import { docStyle } from "./styles"

const { widget } = figma
const { AutoLayout } = widget

export function MenuDoc() {
    return <AutoLayout {...docStyle} name={"Menu Doc"}>
        <Heading as={"h3"}>Menu</Heading>
        <Heading as={"h5"}></Heading>
        <Menu />
    </AutoLayout>
}