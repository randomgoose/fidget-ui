import { renderChildren } from "../../utils";
import { DescriptionListItem, DescriptionListProps } from "./interface";
import { getDescriptionListStyles } from "./styles";
import _ from "lodash"

const { widget } = figma;
const { AutoLayout, Text } = widget;

const findLongestLabelIndex = (items: DescriptionListItem[]) => {
    let index = 0;

    for (let i = 0; i < items.length; i++) {
        if (i > 0) {
            if (items[i].label.length > items[i - 1].label.length) {
                index++;
            }
        }
    }

    return index;
}

export function DescriptionList({ items, spacing = 16, ...rest }: DescriptionListProps) {

    const { list, item, label: labelStyles, value: valueStyles } = getDescriptionListStyles({ spacing })

    return (
        <AutoLayout
            name="Description List"
            {...list}
            {...rest}
            direction="vertical"
        >
            {
                items?.map(({ value, label }, index) => (
                    <AutoLayout
                        key={index}
                        name="Description List Item"
                        width={"fill-parent"}
                        {...item}
                    >
                        <Text
                            width={128}
                            name="Label"
                            {...labelStyles}
                        >
                            {label}
                        </Text>
                        {renderChildren(value, { textProps: { name: "Value", ...valueStyles } })}
                    </AutoLayout>
                ))
            }
        </AutoLayout>
    )
}