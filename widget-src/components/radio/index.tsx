import { colors } from "../../styles"
import { renderChildren } from "../../utils"
import { RadioGroupProps, RadioProps } from "./interface"
import { getRadioStyles } from "./styles"

const { widget } = figma
const { AutoLayout, Text, Ellipse, useSyncedState } = widget

export function Radio({
    value,
    children,
    disabled = false,
    checked,
    onClick
}: RadioProps) {
    const { control, container, label } = getRadioStyles({ checked, disabled });

    return <AutoLayout
        name={"Radio Container"}
        onClick={() => {
            (onClick && !disabled) && onClick(value)
        }}
        {...container}
    >
        <AutoLayout name={"Radio Control"} {...control}>
            {checked ? <Ellipse width={6} height={6} fill={colors.white} name={"Radio Ink"} /> : null}
        </AutoLayout>
        {children ? renderChildren(children, { textProps: label }) : null}
    </AutoLayout>
}


export function RadioGroup(
    {
        name,
        orientation = "horizontal",
        children,
        options,
        onChange,
        spacing=12,
        ...rest
    }: RadioGroupProps) {
    const [value, setValue] = useSyncedState(`radio-group/${name}`, options?.[0].value || "");


    return <AutoLayout
        name="Radio Group"
        {...rest}
        direction={orientation}
        spacing={spacing}
    >
        {options?.map(({ value: v, label, disabled }, index) => {
            return <Radio
                checked={v === value}
                disabled={disabled}
                value={v}
                key={index}
                onClick={(value) => {
                    setValue(value);
                    onChange && onChange({ value, label })
                }}
            >
                {label}
            </Radio>
        })}
    </AutoLayout>
}

Radio.displayName = "";