import { colors } from "../../styles";
import { DescriptionListProps } from "./interface";

export const getDescriptionListStyles =
    ({ spacing }: Pick<DescriptionListProps, "spacing">): {
        list: AutoLayoutProps;
        item: AutoLayoutProps;
        label: TextProps;
        value: TextProps;
    } => {
        return {
            list: {
                spacing,
                overflow: "visible"
            },
            item: {
                verticalAlignItems: "center",
                overflow: "visible"
            },
            label: {
                fill: colors.neutral[500],
                fontSize: 14,
                lineHeight: 22,
            },
            value: {
                fontSize: 14,
                lineHeight: 22
            }
        }
    }