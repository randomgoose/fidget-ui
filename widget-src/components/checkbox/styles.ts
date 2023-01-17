import { colors } from "../../styles";
import { CheckboxProps } from "./interface"

export const getCheckboxStyles = ({
    checked,
    disabled
}: Pick<CheckboxProps, "checked" | "disabled">): {
    control: AutoLayoutProps;
    container: AutoLayoutProps;
    label: TextProps;
} => {

    return {
        control: {
            fill: checked ? colors.blue[500] : colors.white,
            stroke: checked ? undefined : colors.neutral[300],
            width: 16,
            height: 16,
            cornerRadius: 4,
            verticalAlignItems: "center",
            horizontalAlignItems: "center"
        },
        container: {
            spacing: 4,
            verticalAlignItems: "center",
            opacity: disabled ? 0.3 : 1
        },
        label: {
            fontSize: 14,
            lineHeight: 22
        }

    }
}