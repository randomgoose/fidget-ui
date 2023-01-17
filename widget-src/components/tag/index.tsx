import { TagProps } from "./interface";
import { getTagStyles } from "./styles";
import { IconXIconMark } from "../icons";

const { widget } = figma
const { AutoLayout, Text } = widget

export function Tag({
    children,
    variant,
    colorScheme = "blue",
    size = "md",
    dismissible,
    onClose,
    ...rest
}: TagProps) {

    const { container, label, closeButton } = getTagStyles({ variant, colorScheme, size })

    const text = (Array.isArray(children) && children[0] && typeof children[0] === "string") ? children[0] : ""

    return (
        <AutoLayout name="Tag" {...container} {...rest}>
            <Text name="Tag Label" {...label}>
                {text}
            </Text>
            {
                dismissible
                    ? <IconXIconMark
                        {...closeButton}
                        width={12}
                        height={12}
                        onClick={() => onClose && onClose()} />
                    : null
            }
        </AutoLayout>
    )
}