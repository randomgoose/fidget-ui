import { Heading, Select } from "../components"
import { Option } from "../components/select/interface"
import { TimePicker } from "../components/time-picker"
import { docStyle } from "./styles"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

const OPTIONS: Option[] = [
    { value: "alpha", label: "Alpha" },
    { value: "beta", label: "Beta" },
    { value: "gamma", label: "Gamma" }
]

export function SelectDoc() {
    const [letter, setLetter] = useSyncedState("select/letter", "alpha");

    return <AutoLayout {...docStyle} name={"Select Doc"}>
        <Heading as="h3">
            Select
        </Heading>

        <Text>
            You selected {letter}.
        </Text>

        <Select
            placeholder="Select a letter"
            width={240}
            id={"doc/select"}
            options={OPTIONS}
            onChange={(value) => setLetter(value)}
        />

        {/* <TimePicker width={240}/> */}
    </AutoLayout>
}