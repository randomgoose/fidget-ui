import { colors } from "../../styles";
import { ButtonProps } from "./interface";

const { widget } = figma
const { AutoLayout, Text } = widget

const containerStyles: { [key: string]: AutoLayoutProps } = {
    filled: {
        strokeWidth: 0,
    },
    outline: {
        stroke: colors.neutral[300],
        hoverStyle: {
            fill: colors.neutral[100]
        }
    },
    ghost: {
        hoverStyle: {
            fill: colors.neutral[100]
        }
    },
    lg: {
        padding: { vertical: 8, horizontal: 16 }
    },
    md: {
        padding: { vertical: 5, horizontal: 12 }
    },
    sm: {
        padding: { vertical: 4, horizontal: 12 }
    },
    blue: {
        fill: colors.blue[500],
        hoverStyle: {
            fill: colors.blue[400]
        }
    }
}

const textStyles: { [key: string]: TextProps } = {
    filled: {
        fill: colors.white,
    },
    outline: {
        fill: colors.neutral[900]
    },
    lg: {
        fontSize: 16,
        lineHeight: 24
    },
    md: {
        fontSize: 14,
        lineHeight: 22
    },
    sm: {
        fontSize: 12,
        lineHeight: 20
    }
}

export function Button({
    variant = "filled",
    children,
    disabled = false,
    size = "md",
    colorScheme,
    onClick,
    icon,
    block,
}: ButtonProps) {

    const getContainerStyle = (variant: ButtonProps['variant'], colorScheme: ButtonProps['colorScheme']): AutoLayoutProps => {
        if (variant === "filled") {
            return {
                fill: colorScheme !== undefined ? colors[colorScheme][500] : colors['neutral'][500],
            }
        } else if (variant === "outline") {
            return {
                stroke: colorScheme !== undefined ? colors[colorScheme][500] : colors['neutral'][300],
            }
        } else if (variant === "ghost") {
            return {
                hoverStyle: {
                    fill: colorScheme !== undefined ? colors[colorScheme][100] : colors['neutral'][100]
                }
            }
        }
        return {}
    }

    const getTextStyle = (variant: ButtonProps['variant'], colorScheme: ButtonProps['colorScheme']): TextProps => {
        if (variant === "outline") {
            return { fill: colorScheme !== undefined ? colors[colorScheme][500] : undefined }
        }
        return {}
    }

    return <AutoLayout
        name="Button"
        padding={{ vertical: 8, horizontal: 16 }}
        cornerRadius={6}
        {...getContainerStyle(variant, colorScheme)}
        {...containerStyles[size]}
        onClick={(onClick && !disabled) ? onClick : undefined}
        opacity={disabled ? 0.4 : 1}
        width={block ? "fill-parent" : "hug-contents"}
    >
        <Text
            name="Button Text"
            {...textStyles[variant]}
            {...textStyles[size]}
            {...getTextStyle(variant, colorScheme)}
        >
            {children}
        </Text>

        {icon}
    </AutoLayout>
}