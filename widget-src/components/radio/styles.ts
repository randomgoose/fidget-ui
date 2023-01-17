import { colors } from "../../styles"

export const getRadioStyles = (
    { checked, disabled }: { checked: boolean; disabled: boolean; }
): {
    control: AutoLayoutProps,
    label: TextProps,
    container: AutoLayoutProps,
    ink: EllipseProps
} => {

    let fill: AutoLayoutProps['fill'];
    let stroke: AutoLayoutProps['stroke'];
    let opacity: AutoLayoutProps['opacity'] = 1;

    if (checked) {
        fill = colors.blue[500];
    } else {
        stroke = colors.neutral[300];
    }

    if (disabled) {
        opacity = 0.3;
    }

    return {
        control: {
            width: 16,
            height: 16,
            fill,
            stroke,
            cornerRadius: 100,
            verticalAlignItems: "center",
            horizontalAlignItems: "center",
        },
        container: {
            spacing: 4,
            verticalAlignItems: "center",
            opacity
        },
        label: {
            fill: colors.neutral[900]
        },
        ink: {
            
        }
    }
}