import { IconAcademicIconCap, SimpleGrid } from "../components"
import { colors } from "../styles"
import { docStyle } from "./styles"

const { widget } = figma
const { AutoLayout, Text } = widget

export function SimpleGridDoc() {
    return <AutoLayout name="Simple Grid Doc" {...docStyle}>
        <SimpleGrid width={480}>
            {
                ...[0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <AutoLayout
                        key={num}
                        fill={colors.neutral[500]}
                    >
                        <Text>{num}</Text>
                    </AutoLayout>
                ))
            }
        </SimpleGrid>
    </AutoLayout>
}