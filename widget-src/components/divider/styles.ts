import { colors } from "../../styles";
import { DividerProps } from "./interface";

export const getDividerStyles = (
    { orientation }: Pick<DividerProps, "orientation">
): {
    container: AutoLayoutProps;
    text: TextProps;
    divider: AutoLayoutProps;
} => {
    let width: AutoLayoutProps['width'];
    let height: AutoLayoutProps['height'];
    let horizontalAlignItems: AutoLayoutProps['horizontalAlignItems'];
    let verticalAlignItems: AutoLayoutProps['verticalAlignItems'];
    let color: string = colors.neutral[400];

    switch (orientation) {
        case "vertical":
            width = "hug-contents";
            height = "fill-parent";
            horizontalAlignItems = "center";
            verticalAlignItems = "start";
            break
        default:
            width = "fill-parent";
            height = "hug-contents";
            horizontalAlignItems = "start";
            verticalAlignItems = "center";
            break
    }

    return {
        container: {
            width,
            height,
            horizontalAlignItems,
            verticalAlignItems,
            direction: orientation,
            spacing: 4,
        },
        text: {
            fontSize: 14,
            lineHeight: 22,
            fill: color,
            fontWeight: "normal"
        },
        divider: {
            fill: colors.neutral[200]
        }
    }
}