import { colors } from "../../styles"

const { widget } = figma
const { AutoLayout, Text, Ellipse } = widget

export function Radio() {
    return <AutoLayout spacing={4} verticalAlignItems={"center"}>
        <AutoLayout width={16} height={16} name={"Radio"} fill={colors.blue[500]} cornerRadius={100} verticalAlignItems={"center"} horizontalAlignItems={"center"}>
            <Ellipse width={6} height={6} fill={"#fff"} />
        </AutoLayout>
        <Text fill={colors.neutral[900]}>Option A</Text>
    </AutoLayout>
}

export interface RadioGroupProps {
    // data: 
}

export function RadioGroup() {
    return 
}