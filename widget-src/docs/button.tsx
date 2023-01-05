import { Button, Select, Switch } from "../components"

const { widget } = figma
const { useSyncedState, AutoLayout, Text } = widget

export function ButtonDoc() {
    const [switchOn, setSwitchOn] = useSyncedState("switch-on", false);

    const notify = (message: string) => {
        return figma.notify(message);
    }

    return <AutoLayout
        verticalAlignItems={'center'}
        direction={"vertical"}
        spacing={24}
        padding={32}
        cornerRadius={8}
        fill={'#FFFFFF'}
        stroke={'#E6E6E6'}
        overflow={"visible"}
    >
        <Text fontSize={24} fontWeight={"bold"}>Button</Text>

        <Text fontSize={16} fontWeight={"bold"}>Variants</Text>
        <AutoLayout spacing={4}>
            <Button variant="filled" onClick={() => notify("This is a filled button.")}>Button</Button>
            <Button variant="outline" onClick={() => notify("This is an outline button.")}>Button</Button>
            <Button variant="ghost" onClick={() => notify("This is a ghost button.")}>Ghost</Button>
        </AutoLayout>

        <Text fontSize={16} fontWeight={"bold"}>Sizes</Text>
        <AutoLayout spacing={4}>
            <Button size="lg">size=lg</Button>
            <Button size="md">size=md</Button>
            <Button size="sm">size=sm</Button>
        </AutoLayout>

        <Text fontSize={16} fontWeight={"bold"}>Disabled buttons</Text>
        <Text fontSize={14}>Disabled buttons</Text>
        <Button disabled>Disabled</Button>

        <Text fontSize={16} fontWeight={"bold"}>Color Schemes</Text>
        <AutoLayout spacing={4}>
            <Button colorScheme="blue">Blue</Button>
            <Button colorScheme="blue" variant={"outline"}>Blue</Button>
            <Button colorScheme="blue" variant={"ghost"}>Blue</Button>
        </AutoLayout>

        <Select
            options={["Figma", "FigJam", "Dropbox"]}
            id={"s"}
            onChange={(value) => { figma.notify(`Selected ${value}.`) }}
        />

        <Switch
            checked={switchOn}
            onChange={value => setSwitchOn(value)} />

        <Select options={["Figma", "FigJam", "Dropbox"]} id={"w"} />
    </AutoLayout>
}