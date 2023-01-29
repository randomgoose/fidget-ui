import { colors } from "../../styles";

export const getDropdownStyles = (
    { size, placement }: {
        size?: "xs" | "sm" | "md" | "lg";
        placement?: "top" | "bottom" | "left" | "right"
    }): {
        list: AutoLayoutProps;
        item: AutoLayoutProps;
        text: TextProps;
    } => {

    let fieldHeight: number = 32
    let x: AutoLayoutProps['x']
    let y: AutoLayoutProps['y']

    switch (size) {
        case "sm":
            fieldHeight = 28
            break
        case "md":
            fieldHeight = 32
            break
        case "lg":
            fieldHeight = 40
            break
        default:
            fieldHeight = 32
            break
    }

    switch (placement) {
        case "left":
            x = { type: "left", offset: -4 }
            y = { type: "top", offset: 0 }
            break
        case "top":
            x = { type: "left-right", leftOffset: 0, rightOffset: 0 }
            y = { type: "bottom", offset: 4 + fieldHeight }
            break
        default:
            x = { type: "left-right", leftOffset: 0, rightOffset: 0 }
            y = { type: "top", offset: 4 + fieldHeight }
            break
    }

    return {
        list: {
            padding: 4,
            cornerRadius: 6,
            fill: colors.white,
            direction: "vertical",
            positioning: "absolute",
            stroke: colors.neutral[300],
            x,
            y
        },
        item: {
            width: "fill-parent",
            padding: { horizontal: 4, vertical: 8 },
            hoverStyle: { fill: colors.neutral[100] },
            cornerRadius: 3,
            verticalAlignItems: "center",
        },
        text: {
            fontSize: 14,
            fill: colors.neutral[900],
            width: "fill-parent"
        }
    }
}