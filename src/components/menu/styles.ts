import { colors } from "../../styles"

export const getMenuStyles = (): {
    list: AutoLayoutProps,
    item: AutoLayoutProps,
    text: TextProps
} => {
    return {
        list: {
            padding: 4,
            stroke: colors.neutral[100],
            cornerRadius: 8,
            effect: [
                { type: "drop-shadow", offset: { x: 0, y: 10 }, color: { r: 1, g: 1, b: 1, a: 0.1 }, blur: 10 }
            ]
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