import { colors } from "../../styles"
import { DividerProps } from "./interface"
import { getDividerStyles } from "./styles"

const { widget } = figma
const { AutoLayout, Rectangle, Text } = widget


export function Divider(
    {
        orientation = "horizontal",
        children,
        margin
    }: DividerProps) {

    const { container, text, divider } = getDividerStyles({ orientation });

    const renderDivider = (orientation: "horizontal" | "vertical") => {
        return orientation === "horizontal"
            ? <Rectangle name="Divider" width={"fill-parent"} height={1} fill={divider.fill} />
            : <Rectangle name="Divider" height={"fill-parent"} width={1} fill={divider.fill} />
    }

    const defaultMargin: AutoLayoutProps['padding'] = orientation === "horizontal"
        ? { top: 4, bottom: 4 }
        : { left: 4, right: 4 }

    return <AutoLayout
        name="Divider Container"
        {...container}
        padding={margin || defaultMargin}
    >
        {
            (Array.isArray(children) && children[0] && typeof children[0] === "string") ? (
                <>
                    {renderDivider(orientation)}
                    <Text name="Divider Text" {...text}>{children[0]}</Text>
                    {renderDivider(orientation)}
                </>
            )
                : (renderDivider(orientation))
        }
    </AutoLayout>
} 
