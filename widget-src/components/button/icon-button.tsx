
import { IconButtonProps } from "./interface";
import { getIconButtonStyles } from "./styles";

const { widget } = figma
const { AutoLayout, Text, h, SVG } = widget

export function IconButton({
    icon,
    variant = "filled",
    size,
    colorScheme,
    disabled,
    ...rest }: IconButtonProps) {

    const { container, icon: iconStyle } = getIconButtonStyles({ variant, size, colorScheme, disabled })

    return (
        <AutoLayout
            {...container}
            {...rest}
            name="Icon Button"
        >
            <AutoLayout width={iconStyle.width} height={iconStyle.height} name={"Icon"}>
                {h(SVG, {
                    src: (icon as any)?.props?.src.replace("stroke='#000000'", `stroke='${iconStyle.fill}'`),
                    width: "fill-parent",
                    height: "fill-parent"
                })}
            </AutoLayout>
        </AutoLayout>
    )
}