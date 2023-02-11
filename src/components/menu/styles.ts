import { colors, shadows } from "../../styles"
import { MenuItemProps } from "./interface"

export const getMenuStyles = (
    { disabled }: Pick<MenuItemProps, "disabled">
): {
    list: AutoLayoutProps,
    item: AutoLayoutProps,
    text: TextProps,
    command: TextProps
} => {
    return {
        list: {
            fill: colors.white,
            padding: 4,
            stroke: colors.neutral[100],
            cornerRadius: 8,
            effect: [
                ...shadows.lg
            ],
            direction: "vertical",
            positioning: "absolute",
            y: { type: "top",offset: 0}
        },
        item: {
            fill: colors.white,
            cornerRadius: 4,
            padding: { horizontal: 8, vertical: 5 },
            hoverStyle: disabled ? undefined : {
                fill: colors.neutral[100]
            },
            verticalAlignItems: "center",
            spacing: 4,
            opacity: disabled ? 0.3 : 1
        },
        text: {
            fontSize: 14,
            lineHeight: 22,
            width: "fill-parent"
        },
        command: {
            fontSize: 12,
            lineHeight: 20,
            fill: colors.neutral[500]
        }
    }
}

// export const getMenuItemStyles