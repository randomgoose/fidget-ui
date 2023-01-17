import { Heading } from "../components"
import { Divider } from "../components/divider"
import { docStyle } from "./styles"

const { widget } = figma
const { AutoLayout, Text } = widget

export function DividerDoc() {
    return <AutoLayout name="divider" {...docStyle}>
        <Heading as={"h3"}>Divider</Heading>

        <AutoLayout direction={"vertical"} width={400}>
            <Text width={"fill-parent"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum quam earum. Fugiat nulla, assumenda voluptatibus pariatur sed nostrum ducimus perspiciatis enim incidunt id autem unde, nobis suscipit ratione earum.</Text>
            <Divider>Divider</Divider>
            <Text width={"fill-parent"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium impedit sequi eaque qui voluptates labore maiores officiis omnis fuga facilis ex suscipit, placeat, dolorum tempora voluptas alias fugiat eos!</Text>
        </AutoLayout>

        <AutoLayout>
            <Text>Item 1</Text>
            <Divider orientation={"vertical"} />
            <Text>Item 2</Text>
            <Divider orientation={"vertical"} />
            <Text>Item 3</Text>
        </AutoLayout>
    </AutoLayout>
}