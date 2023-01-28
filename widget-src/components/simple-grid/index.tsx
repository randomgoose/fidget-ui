import { SimpleGridProps } from "./interface"

const { widget } = figma
const { AutoLayout } = widget

export function SimpleGrid({
    children,
    columns = 3,
    spacing,
    spacingX,
    spacingY,
    width = "fill-parent",
    ...rest
}: SimpleGridProps) {

    const computedSpacing = {
        x: spacingX ? spacingX : spacing ? spacing : 0,
        y: spacingY ? spacingY : spacing ? spacing : 0
    }

    const splitChildren = (children: FigmaDeclarativeNode, columns: number) => {
        let res = []

        if (Array.isArray(children)) {
            for (let i = 0; i < children.length; i += columns) {
                res.push(children.slice(i, i + columns));
            }
        }

        return res;
    }

    return <AutoLayout
        name="Simple Grid"
        {...rest}
        direction={"vertical"}
        spacing={computedSpacing.y}
        overflow={"visible"}
        width={width}
    >
        {
            Array.isArray(children)
                ? splitChildren(children, columns).map((group, index) => (
                    <AutoLayout
                        name="Row"
                        key={index}
                        width={"fill-parent"}
                        spacing={computedSpacing.x}
                        overflow={"visible"}
                    >
                        {group.map((item, index) => (
                            <AutoLayout
                                overflow="visible"
                                name="Cell"
                                key={index}
                                width={width}
                            >
                                {item}
                            </AutoLayout>
                        ))}
                    </AutoLayout>
                ))
                : null
        }
    </AutoLayout>
}