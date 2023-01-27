import { colors } from "../../styles";
import { TextFieldProps } from "./interface";

export const getTextFieldStyles = (
    {
        variant,
        size,
        leftElement,
        rightElement,
        disabled
    }:
        Pick<TextFieldProps, "size" | "disabled" | "leftElement" | "rightElement" | "variant" | "leftAddon" | "rightAddon">): {
            field: AutoLayoutProps;
            input: AutoLayoutProps;
            text: TextProps;
            clearIcon: Omit<SVGProps, "src" | "fill"> & { color: string };
            leftAddon: AutoLayoutProps;
            rightAddon: AutoLayoutProps;
        } => {

    let fill: AutoLayoutProps['fill'];
    let stroke: AutoLayoutProps['stroke'];
    let padding: AutoLayoutProps['padding'];
    let effect: AutoLayoutProps['effect'];
    let cornerRadius: AutoLayoutProps['cornerRadius'];
    let fontSize: TextProps['fontSize'];
    let lineHeight: TextProps['lineHeight'];
    let clearIconOffsetX: number;
    // This is a workaround because setting height to "fill-parent" also sets width to 100px;
    let addonFill: AutoLayoutProps['fill'];
    let addonCornerRadius: AutoLayoutProps['cornerRadius'];
    let addonStroke: AutoLayoutProps['stroke'];
    let addonHeight: number;

    switch (variant) {
        case "filled":
            fill = colors.neutral[100];
            effect = [];
            cornerRadius = 6;
            addonFill = colors.neutral[100]
            break;
        case "flush":
            fill = colors.white;
            effect = [{
                type: "drop-shadow",
                blur: 0,
                offset: { x: 0, y: 1 },
                color: { r: 0.8980392157, g: 0.8980392157, b: 0.8980392157, a: 1 }
            }];
            cornerRadius = 0;
            break;
        default:
            fill = colors.white;
            stroke = colors.neutral[300];
            effect = [
                { type: "drop-shadow", offset: { x: 0, y: 1 }, color: { r: 0, g: 0, b: 0, a: .1 }, blur: 1 }
            ]
            cornerRadius = 6;
            addonFill = colors.neutral[100]
            addonStroke = colors.neutral[300]
            break;
    }

    switch (size) {
        case "lg":
            padding = {
                left: leftElement ? 36 : 12,
                right: rightElement ? 36 : 12,
                vertical: 8
            }
            fontSize = 16;
            lineHeight = 24;
            clearIconOffsetX = rightElement ? 36 : 8;
            addonHeight = 40;
            break
        case "sm":
            padding = {
                left: leftElement ? 28 : 6,
                right: rightElement ? 28 : 6,
                vertical: 3
            }
            fontSize = 12;
            lineHeight = 20;
            clearIconOffsetX = rightElement ? 28 : 8;
            addonHeight = 28;
            break
        default:
            padding = {
                left: leftElement ? 32 : 8,
                right: rightElement ? 32 : 8,
                vertical: 5
            }
            fontSize = 14;
            lineHeight = 22;
            clearIconOffsetX = rightElement ? 32 : 8;
            addonHeight = 32;
            break;
    }

    let addon: AutoLayoutProps = {
        fill: addonFill,
        width: "hug-contents",
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        height: addonHeight,
        padding: { horizontal: 8 },
        stroke: addonStroke,
        strokeAlign: "outside"
    }

    return {
        field: {
            opacity: disabled ? 0.3 : 1,
            effect,
            fill,
            stroke,
            cornerRadius,
            // padding: 1,
        },
        input: {
            width: "fill-parent",
            padding
        },
        text: {
            fontSize,
            lineHeight,
            fill: colors.neutral[900]
        },
        clearIcon: {
            width: 12,
            height: 12,
            color: colors.neutral[300],
            positioning: "absolute",
            y: { offset: 0, type: "center" },
            x: { offset: clearIconOffsetX, type: "right" }
        },
        leftAddon: {
            ...addon,
            cornerRadius: { topLeft: 5, bottomLeft: 5, topRight: 0, bottomRight: 0 },
        },
        rightAddon: {
            ...addon,
            cornerRadius: { topLeft: 0, bottomLeft: 0, topRight: 5, bottomRight: 5 },
        }
    }
}