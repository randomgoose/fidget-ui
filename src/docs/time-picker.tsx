import { Divider, Heading, Switch } from "../components";
import { TimePicker } from "../components/time-picker";
import { docStyle } from "./styles";
import { P, Pre } from "./typography";

const { widget } = figma;
const { AutoLayout, useSyncedState, Text } = widget;

export function TimePickerDoc() {
    const [disabled, setDisabled] = useSyncedState("time-picker/disabled", true)

    return (
        <AutoLayout name="Time Picker Doc" {...docStyle}>
            <Heading as="h1">Time Picker</Heading>
            <P>Allow users to select a time in the format of <Pre>hh:mm</Pre>.</P>
            <Divider />
            <Heading as="h5">Usage</Heading>
            <P></P>
            <TimePicker id="ak3v" placement="top" />

            <Heading as="h5">Disabled TimePicker</Heading>

            <AutoLayout name="Flex" verticalAlignItems="center" spacing={8}>
                <Text>Disable this TimePicker?</Text>
                <Switch checked={disabled} onChange={(v) => setDisabled(v)} />
            </AutoLayout>
            <TimePicker id="tkw8" disabled={disabled} />

        </AutoLayout>
    )
}