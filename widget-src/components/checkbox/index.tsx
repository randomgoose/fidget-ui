import { colors } from "../../styles"
import { renderChildren } from "../../utils"
import { CheckboxGroupProps, CheckboxProps } from "./interface"
import { getCheckboxStyles } from "./styles"

const { widget } = figma
const { AutoLayout, Text, SVG, h } = widget

const icon = <SVG
    width={10}
    height={10}
    src="<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='white' aria-hidden='true' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9-13.5'></path></svg>"
/>

export function Checkbox({
    children, checked, disabled, onChange
}: CheckboxProps) {
    const { control, container } = getCheckboxStyles({ checked, disabled })

    const toggle = () => { (checked !== undefined && onChange && !disabled) && onChange(!checked) }

    return (
        <AutoLayout
            name="Checkbox Container"
            {...container}
            onClick={toggle}
        >
            <AutoLayout
                name="Checkbox Control"
                {...control}
            >
                {icon}
            </AutoLayout>
            {renderChildren(children, { textProps: {name: "Checkbox Label", fontSize: 14, lineHeight: 22, fill: colors.neutral[900] } })}
        </AutoLayout>
    )
}

export function CheckboxGroup({ name, children }: CheckboxGroupProps) {
    console.log("Checkbox", children)
    return <AutoLayout name="Checkbox Group">

    </AutoLayout>
}