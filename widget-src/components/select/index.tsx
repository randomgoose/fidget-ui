import { colors } from "../../styles"
import { IconChevronIconDown } from "../icons";

const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget

export interface SelectProps {
    id: string;
    options: string[]
    placeholder?: string;
    width?: "full" | number;
    onChange?: (value: string) => void;
}

export function Select({ options, id, onChange, placeholder = "Please select..." }: SelectProps) {
    const [open, setOpen] = useSyncedState<boolean>(`open/${id}`, false);
    const [value, setValue] = useSyncedState<string>(`value/${id}`, "");

    const toggleOptionList = () => {
        setOpen(prev => !prev)
    }

    const select = (option: string) => {
        if (option !== value) {
            onChange && onChange(option)
        }
        setValue(option)
    }

    return <AutoLayout name="Select" overflow={"visible"}
        height={32}
        stroke={colors.neutral[300]}
        onClick={toggleOptionList}
        cornerRadius={6}
        verticalAlignItems={"center"}
        padding={{ vertical: 12, horizontal: 8 }}
    >
        <Text
            fill={value ? colors.neutral[900] : colors.neutral[500]}
        >
            {value || placeholder}
        </Text>
        <IconChevronIconDown color={colors.neutral[500]} width={12} height={12} />
        {
            open
                ?
                <AutoLayout
                    name="Select Items"
                    direction="vertical"
                    width={"fill-parent"}
                    padding={4}
                    cornerRadius={6}
                    fill={"#fff"}
                    positioning={"absolute"}
                    stroke={colors.neutral[300]}
                    y={{ type: "top", offset: 8 + 32 }}
                >
                    {options.map((option, index) => (
                        <AutoLayout
                            width={"fill-parent"}
                            key={index}
                            onClick={() => { select(option) }} padding={{ horizontal: 4, vertical: 8 }}
                            hoverStyle={{ fill: colors.neutral[100] }}
                            cornerRadius={3}
                        >
                            <Text>{option}</Text>
                        </AutoLayout>
                    ))}
                </AutoLayout>
                :
                null
        }
    </AutoLayout >
}