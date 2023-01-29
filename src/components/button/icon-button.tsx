
import { renderIcon } from "../../utils";
import { IconButtonProps } from "./interface";
import { getIconButtonStyles } from "./styles";

const { widget } = figma
const { AutoLayout } = widget

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
            {icon ? renderIcon({ svg: icon as any, options: { width: iconStyle.width, height: iconStyle.height, stroke: iconStyle.stroke } }) : null}
        </AutoLayout>
    )
}