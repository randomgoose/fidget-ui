import { colors } from "../../styles";

export const getDropdownStyles = (
    { size }: { size?: "xs" | "sm" | "md" | "lg" }): {
        list: AutoLayoutProps;
        item: AutoLayoutProps;
        text: TextProps;
    } => {

    return {
        list: {
            padding: 4,
            cornerRadius: 6,
            fill: colors.white,
            direction: "vertical",
            positioning: "absolute",
            stroke: colors.neutral[300],
            x: { type: "left-right", leftOffset: 0, rightOffset: 0 },
            y: { type: "top", offset: 4 + 32 }
        },
        item: {
            width: "fill-parent",
            padding: { horizontal: 4, vertical: 8 },
            hoverStyle: { fill: colors.neutral[100] },
            cornerRadius: 3
        },
        text: {
            fontSize: 14,
            fill: colors.neutral[900],
        }
    }
}