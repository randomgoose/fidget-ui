import { colors } from "../../styles";
import { FieldProps } from "./interface";

export const getFieldStyles = ({
    size,
    variant,
    disabled,
    open
}: FieldProps & { open?: boolean }): {
    field: AutoLayoutProps,
    text: TextProps,
} => {
    let height: number;
    let stroke: AutoLayoutProps['stroke'];
    let cornerRadius: AutoLayoutProps['cornerRadius'];
    let padding: AutoLayoutProps['padding'];

    switch (size) {
        default:
            height = 32;
            cornerRadius = 6;
            padding = { vertical: 12, horizontal: 8 };
    }

    switch (variant) {
        default:
            stroke = colors.neutral[300]
    }

    return {
        field: {
            height,
            stroke,
            cornerRadius,
            overflow: "visible",
            verticalAlignItems: "center",
            padding
        },
        text: {
            width: "fill-parent",
            fontSize: 14
        }
    }
}