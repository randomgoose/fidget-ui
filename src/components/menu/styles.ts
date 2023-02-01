import { colors } from "../../styles"

export const getMenuStyles = (): {
    list: AutoLayoutProps,
    item: AutoLayoutProps,
    text: TextProps
} => {
    return {
        list: {
            padding: 4,
            stroke: colors.neutral[300],
            cornerRadius: 8
        },
        item: {
            fill: colors.white,
            cornerRadius: 4,
            padding: { horizontal: 8, vertical: 5 },
            hoverStyle: {
                fill: colors.neutral[100]
            },
            verticalAlignItems: "center",
            spacing: 4
        },
        text: {
            fontSize: 14,
            lineHeight: 22
        }
    }
}