import { colors } from "../styles";

const { widget } = figma;
const { AutoLayout, Text } = widget;

export function Code({ children }: AutoLayoutProps) {
    return <AutoLayout
        name="Code"
        cornerRadius={6}
        fill={colors.neutral[900]}
        width={"hug-contents"}
        padding={16}
    >
        <Text fontFamily="Fira Code" fill={"#ffffff"} fontSize={12}>
            {children as string}
        </Text>
    </AutoLayout>

}