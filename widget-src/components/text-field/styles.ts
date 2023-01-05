import { colors } from "../../styles";

export const getTextFieldStyles = ({ size, leftElement }: { size: "sm" | "md" | "lg", leftElement?: FigmaDeclarativeNode }): {
    container: { [variant: string]: AutoLayoutProps };
    text: { [variant: string]: TextProps };
} => {
    return {
        container: {
            base: {
                padding: {
                    horizontal: leftElement ?
                        size === "md" ? 28 : size === "lg" ? 32 : 24
                        :
                        size === "md" ? 8 : size === "lg" ? 12 : 6,
                    vertical: size === "md" ? 5 : size === "lg" ? 7 : 3
                }
            },
            outline: {
                fill: colors.white,
                stroke: colors.neutral[300],
                cornerRadius: 6,
                effect: [
                    { type: "drop-shadow", offset: { x: 0, y: 1 }, color: { r: 0, g: 0, b: 0, a: .1 }, blur: 1 }
                ]
            },
            filled: {
                fill: colors.neutral[100],
                cornerRadius: 6,
                effect: []
            },
            flush: {
                cornerRadius: 0,
                fill: colors.white,
                effect: [
                    {
                        type: "drop-shadow",
                        blur: 0,
                        offset: { x: 0, y: 1 },
                        color: { r: 0.8980392157, g: 0.8980392157, b: 0.8980392157, a: 1 }
                    }
                ]
            }
        },
        text: {

        }
    }
}