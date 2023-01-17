import { colors } from "../../styles";
import { IconButton } from "../button";
import { IconChevronIconDown, IconChevronIconUp, IconClock } from "../icons";
import { getDropdownStyles } from "../_dropdown/styles";
import { getFieldStyles } from "../_field/styles"
import { TimePickerProps } from "./interface";
import { getTimePickerStyles } from "./styles";

const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget

export function TimePicker({ ...rest }: TimePickerProps) {
    const { field, text } = getFieldStyles({});
    const { list } = getDropdownStyles({});
    const { text: pickerText } = getTimePickerStyles({});

    return <AutoLayout
        {...field}
        {...rest}
        name="TimePicker"
    >
        <Text {...text}>16:30:43</Text>

        <AutoLayout width={14} height={14}>
            <IconClock color={colors.neutral[500]} />
        </AutoLayout>

        <AutoLayout {...list} name="TimePicker Dropdown" padding={24} direction={"horizontal"} verticalAlignItems={"center"}>
            <AutoLayout direction={"vertical"} horizontalAlignItems={"center"} spacing={4}>
                {/* <IconButton icon={<IconChevronIconDoubleIconUp />} /> */}
                <IconButton variant="ghost" icon={<IconChevronIconUp />} onClick={() => { }} />
                <Text fontSize={24}>16</Text>
                <IconButton icon={<IconChevronIconDown />} />
            </AutoLayout>
            <Text>:</Text>
            <AutoLayout direction={"vertical"} horizontalAlignItems={"center"} spacing={4}>
                <IconButton icon={<IconChevronIconUp />} onClick={() => { }} />
                <Text fontSize={24}>24</Text>
                <IconButton icon={<IconChevronIconDown />} />
            </AutoLayout>
        </AutoLayout>
    </AutoLayout>
}