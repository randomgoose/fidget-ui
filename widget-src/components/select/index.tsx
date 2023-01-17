import { colors } from "../../styles"
import { IconChevronIconDown, IconChevronIconUp } from "../icons";
import { getDropdownStyles } from "../_dropdown/styles";
import { getFieldStyles } from "../_field/styles";
import { SelectProps } from "./interface";

const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget

export function Select({
    options,
    id,
    onChange,
    placeholder = "Please select...",
    size,
    variant,
    disabled,
    ...rest
}: SelectProps) {
    const [open, setOpen] = useSyncedState<boolean>(`open/${id}`, false);
    const [value, setValue] = useSyncedState<string>(`value/${id}`, "");

    const { field, text: fieldText } = getFieldStyles({ size, variant, disabled, open });
    const { list, item, text } = getDropdownStyles({ size });

    const chevron = open ?
        <IconChevronIconUp color={colors.neutral[500]} width={12} height={12} />
        : <IconChevronIconDown color={colors.neutral[500]} width={12} height={12} />

    const toggleOptionList = () => {
        setOpen(prev => !prev)
    }

    const select = (option: string) => {
        if (option !== value) {
            onChange && onChange(option)
        }
        setValue(option)
    }

    return <AutoLayout
        name="Select"
        {...field}
        {...rest}
        onClick={toggleOptionList}
    >
        <Text {...fieldText} fill={value ? colors.neutral[900] : colors.neutral[500]}>
            {value || placeholder}
        </Text>

        {chevron}
        {
            open
                ?
                <AutoLayout {...list} name="Select Items">
                    {options.map(({ value, label }, index) => (
                        <AutoLayout {...item} name="Select Item" key={index} onClick={() => { select(value) }}>
                            <Text {...text} name="Select Item Text" >
                                {label}
                            </Text>
                        </AutoLayout>
                    ))}
                </AutoLayout>
                :
                null
        }
    </AutoLayout >
}