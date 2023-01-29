import { colors } from "../../styles"
import { TagProps } from "./interface"

export const getTagStyles = ({
    colorScheme = "blue",
    size = "md",
    variant = "solid"
}: Pick<TagProps, "colorScheme" | "size" | "variant">): {
    container: AutoLayoutProps,
    label: TextProps,
    closeButton: { color: string },
} => {
    let bg: AutoLayoutProps['fill'];
    let stroke: AutoLayoutProps['stroke'];
    let fontSize: number;
    let lineHeight: number;
    let color: string;
    let padding: AutoLayoutProps['padding'];
    let xFill: SVGProps['fill'];

    switch (size) {
        case "sm":
            fontSize = 12
            lineHeight = 20
            padding = { vertical: 0, horizontal: 4 }
            break;
        case "md":
            fontSize = 14
            lineHeight = 22
            padding = { vertical: 1, horizontal: 6 }
            break;
        case "lg":
            fontSize = 16
            lineHeight = 24
            padding = { vertical: 4, horizontal: 8 }
            break;
        default:
            fontSize = 14
            lineHeight = 22
            padding = { vertical: 1, horizontal: 4 }
            break
    }

    switch (variant) {
        case "solid":
            bg = colors[colorScheme][500]
            color = colors.white
            xFill = colors.white
            break
        case "subtle":
            bg = colors[colorScheme][100]
            color = colors[colorScheme][500]
            xFill = colors[colorScheme][500]
            break
        case "outline":
            bg = undefined;
            color = colors[colorScheme][500]
            stroke = colors[colorScheme][500]
            xFill = colors[colorScheme][500]
            break
        default:
            color = colors[colorScheme][500]
            xFill = colors.white
            break
    }

    return {
        container: {
            fill: bg,
            stroke,
            padding: padding,
            cornerRadius: 4,
            verticalAlignItems: "center",
            spacing: 4
        },
        label: {
            fill: color,
            fontSize,
            lineHeight
        },
        closeButton: {
            color: xFill
        }
    }
}