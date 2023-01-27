import { Heading } from "../components"
import { Checkbox, CheckboxGroup } from "../components/checkbox"
import { Divider } from "../components/divider"
import { docStyle } from "./styles"
import { Code, P } from "./typography"

const { AutoLayout, useSyncedState, Text } = figma.widget

export function CheckboxDoc() {
    const [checked, setChecked] = useSyncedState<boolean>("checkbox/a", false);

    return <AutoLayout name="Checkbox Doc" {...docStyle}>
        <Heading as="h1">Checkbox</Heading>
        <P>Checkboxes are used when users need to select multiple items from a series of options.</P>
        <Divider />
        <Code>
            {`import { Checkbox, CheckboxGroup } from "fidget-ui"`}
        </Code>
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

        <CheckboxGroup
            name="languages"
            options={
                [
                    { label: "JavaScript", value: "javascript" },
                    { label: "TypeScript", value: "typescript" },
                    { label: "Rust", value: "rust", disabled: true }
                ]
            } />
    </AutoLayout>
}