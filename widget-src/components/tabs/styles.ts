import { colors, isNeutralColor } from "../../styles";
import { TabsProps } from "./interface";

export const getTabsStyles = ({
    variant,
    isFitted,
    colorScheme = "neutral"
}: Pick<TabsProps, "variant" | "isFitted" | "colorScheme">): {
    container: AutoLayoutProps;
    tab: AutoLayoutProps;
    activeTab: AutoLayoutProps;
    activeTabLabel: TextProps;
    tabList: AutoLayoutProps;
    tabLabel: TextProps;
    tabPanels: AutoLayoutProps;
} => {

    let bg: AutoLayoutProps['fill'];
    let activeBg: AutoLayoutProps['fill'];
    let tabListStroke: AutoLayoutProps['effect'];
    let tabListPadding: AutoLayoutProps['padding'];
    let stroke: AutoLayoutProps['stroke'];
    let strokeAlign: AutoLayoutProps['strokeAlign'] = "inside";
    let border: AutoLayoutProps['effect'];
    let cornerRadius: AutoLayoutProps['cornerRadius'] = 0;
    let spacing: AutoLayoutProps['spacing'];
    let labelFill: TextProps['fill'];
    let activeLabelFill: TextProps['fill']


    switch (variant) {
        case "enclosed":
            bg = undefined;
            activeBg = colors.white;
            stroke = colors[colorScheme][200];
            strokeAlign = "outside"
            cornerRadius = { topLeft: 6, topRight: 6, bottomLeft: 0, bottomRight: 0 }
            border = [{ type: "inner-shadow", offset: { x: 0, y: -1 }, blur: 0, spread: -1, color: { r: 1, g: 1, b: 1, a: 1 } }]
            // tabListStroke = [{ type: "drop-shadow", offset: { x: 0, y: 1 }, blur: 0, color: { r: 0.8980392157, g: 0.8980392157, b: 0.8980392157, a: 1 } }]
            spacing = 1
            tabListPadding = { vertical: 1, horizontal: 1, bottom: 0 }
            labelFill = colors[colorScheme][500]
            activeLabelFill = isNeutralColor(colorScheme) ? colors[colorScheme][900] : colors[colorScheme][500];
            break
        case "soft-rounded":
            bg = colors.white;
            cornerRadius = 100;
            activeBg = isNeutralColor(colorScheme) ? colors[colorScheme][900] : colors[colorScheme][500];
            border = [
                // { type: "drop-shadow", offset: { x: 0, y: 1 }, blur: 0, color: { r: 1, g: 1, b: 1, a: 1 } },
                { type: "inner-shadow", offset: { x: 0, y: -1 }, blur: 0, spread: -1, color: { r: 1, g: 1, b: 1, a: 1 } }
            ]
            // tabListStroke = [{ type: "drop-shadow", offset: { x: 0, y: 1 }, blur: 0, color: { r: 0.8980392157, g: 0.8980392157, b: 0.8980392157, a: 1 } }]
            spacing = 1
            tabListPadding = { vertical: 1, horizontal: 1, bottom: 0 }
            labelFill = colors[colorScheme][500]
            activeLabelFill = colors.white;
            break
        default:
            bg = colors.white;
            activeBg = colors.white;
            tabListStroke = [{ type: "drop-shadow", offset: { x: 0, y: 1 }, blur: 0, color: { r: 0.8980392157, g: 0.8980392157, b: 0.8980392157, a: 1 } }]
            border = [{ type: "drop-shadow", offset: { x: 0, y: 1 }, blur: 0, color: { r: 0.0901960784, g: 0.0901960784, b: 0.0901960784, a: 1 } }]
            spacing = 0
            tabListPadding = 0
            labelFill = colors[colorScheme][500]
            break
    }

    const baseTab = {
        padding: { vertical: 5, horizontal: 12 },
        cornerRadius,
        strokeAlign
    }

    const baseTabLabel = {
        fontSize: 14,
        lineHeight: 22,
    }


    return {
        container: {
            width: "hug-contents",
            direction: "vertical"
        },
        tabList: {
            width: "hug-contents",
            overflow: "visible",
            // effect: tabListStroke,
            spacing,
            padding: tabListPadding
        },
        activeTab: {
            ...baseTab,
            fill: activeBg,
            overflow: "visible",
            effect: border,
            stroke,
        },
        tab: {
            ...baseTab,
            fill: bg,
        },
        tabLabel: {
            ...baseTabLabel,
            fill: labelFill
        },
        activeTabLabel: {
            ...baseTabLabel,
            fill: activeLabelFill
        },
        tabPanels: {
            padding: 12
        }
    }
}