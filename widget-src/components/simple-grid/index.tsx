
const { widget } = figma
const { AutoLayout } = widget

export interface SimpleGridProps extends AutoLayoutProps {
    columns?: number;
}

export function SimpleGrid({ children, columns, ...rest }: SimpleGridProps) {
    console.log(children)
    return <AutoLayout name="Simple Grid" {...rest}>
        {/* {children.slice(3)} */}
    </AutoLayout>
}