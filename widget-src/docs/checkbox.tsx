import { Heading } from "../components"
import { Checkbox, CheckboxGroup } from "../components/checkbox"
import { docStyle } from "./styles"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

export function CheckboxDoc() {
    const [checked, setChecked] = useSyncedState<boolean>("checkbox/a", false);

    return <AutoLayout name="Checkbox Doc" {...docStyle}>
        <Heading as="h3">Checkbox</Heading>
        <Heading as="h5">Single checkbox</Heading>

        <Checkbox
            checked={checked}
            onChange={(value) => setChecked(value)}
        >
            😊
        </Checkbox>

        <Text>Happy? {checked ? "Yes!" : "No."}</Text>

        <Heading>Disabled Checkbox</Heading>
        <Checkbox disabled>Disabled</Checkbox>

        <Heading as="h5">Checkbox group</Heading>

        <CheckboxGroup name="">
            <Checkbox />
        </CheckboxGroup>
    </AutoLayout>
}