import { renderIcon } from "../../utils";
import { ButtonProps } from "./interface";
import { getButtonStyles } from "./styles";

const { widget } = figma
const { AutoLayout, Text } = widget

export function Button({
    variant = "filled",
    children,
    disabled = false,
    size = "md",
    colorScheme,
    onClick,
    leftIcon,
    rightIcon,
    block,
    ...rest
}: ButtonProps) {
    
    const { container, text, icon } = getButtonStyles({ variant, size, colorScheme, disabled, block });

    const leftIconNode = leftIcon ? renderIcon({ svg: leftIcon as any, options: { stroke: icon.stroke, width: icon.width, height: icon.height } }) : null
    const rightIconNode = rightIcon ? renderIcon({ svg: rightIcon as any, options: { stroke: icon.stroke, width: icon.width, height: icon.height } }) : null

    return <AutoLayout name="Button" {...container} {...rest} onClick={(onClick && !disabled) ? onClick : undefined}>
        {leftIconNode}

        {Array.isArray(leftIcon) ? leftIcon.map(item => item) : null}

        <Text name="Button Text" {...text}>{children}</Text>

        {rightIconNode}
    </AutoLayout>
}