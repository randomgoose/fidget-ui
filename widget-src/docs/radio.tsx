import { Heading, Radio, RadioGroup } from "../components"
import { Code } from "./code";

const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget

export function RadioDoc() {
    const [animal, setAnimal] = useSyncedState("animal", "cat");

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
        <Heading as="h3">Radio</Heading>

        <Heading as={"h5"}>Orientation</Heading>

        <RadioGroup
            name={"options"}
            options={[
                { value: "dogs", label: "Dogs" },
                { value: "cats", label: "Cats" },
                { value: "sheep", label: "Sheep" },
            ]}
            onChange={({ value }) => setAnimal(value)}
        />

        <Text>You selected {animal}.</Text>

        <Code>
            {
                `const [animal, setAnimal] = useSyncedState("animal", "cat");

return <RadioGroup
    name={"options"}
    options={[
        { value: "dogs", label: "Dogs" },
        { value: "cats", label: "Cats" },
        { value: "sheep", label: "Sheep" },
    ]}
    onChange={({ value }) => setAnimal(value)}/>`
            }
        </Code>

        <Heading as={"h5"}>Disabled radios</Heading>
        <RadioGroup
            name="more options"
            orientation={"vertical"}
            options={[
                { value: "a", label: "Option A" },
                { value: "b", label: "Option B" },
                { value: "c", label: "Option C", disabled: true },
            ]}
            onChange={(option) => { figma.notify(option.value) }}
        />
    </AutoLayout>
}