import { colors } from "../../styles";
import { renderIcon } from "../../utils";
import { ButtonProps } from "./interface";
import { getButtonStyles } from "./styles";

const { widget } = figma
const { AutoLayout, Text } = widget

const textStyles: { [key: string]: TextProps } = {
    filled: {
        fill: colors.white,
    },
    outline: {
        fill: colors.neutral[900]
    }
}

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
}: ButtonProps) {

    const { container, text, icon } = getButtonStyles({ variant, size, colorScheme, disabled, block });

    const leftIconNode = leftIcon ? <AutoLayout width={icon.width} height={icon.height}>
        {renderIcon({ svg: leftIcon as any, options: { stroke: "#ffffff" } })}
    </AutoLayout> : null

    const rightIconNode = rightIcon ? <AutoLayout width={icon.width} height={icon.height}>
        {renderIcon({ svg: rightIcon as any, options: { stroke: "#ffffff" } })}
    </AutoLayout> : null

    return <AutoLayout
        name="Button"
        {...container}
        onClick={(onClick && !disabled) ? onClick : undefined}
    >
        {leftIconNode}
        {Array.isArray(leftIcon) ? leftIcon.map(item => item) : null}
        <Text
            name="Button Text"
            {...text}
            // {...textStyles[variant]}
            {...textStyles[size]}
        // {...getTextStyle(variant, colorScheme)}
        >
            {children}
        </Text>

        {rightIconNode}

        {/* {icon} */}
    </AutoLayout>
}