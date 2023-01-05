import { colors } from "../../styles"

const { widget } = figma
const { AutoLayout } = widget

export interface SwitchProps {
    checked: boolean;
    onChange: (value: boolean) => void;
}

export function Switch({ checked, onChange }: SwitchProps) {
    
    return <AutoLayout
        name="Switch"
        fill={checked ? colors.blue[500] : colors.neutral[200]}
        width={44}
        height={24}
        cornerRadius={100}
        horizontalAlignItems={checked ? "end" : "start"}
        verticalAlignItems={"center"}
        padding={2}
        onClick={() => onChange(!checked)}
    >
        <AutoLayout
            name="Switch Knob"
            width={20}
            height={20}
            fill={colors.white}
            cornerRadius={100}
        />
    </AutoLayout>
}