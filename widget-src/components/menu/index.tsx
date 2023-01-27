import { MenuItemProps } from "./interface"

const { widget } = figma
const { AutoLayout } = widget

export function Menu(props: any) {
    return <AutoLayout name="Menu">
        { }
    </AutoLayout>
}

export function MenuItem({ }: MenuItemProps) {
    return <AutoLayout name="Menu Item">

    </AutoLayout>
}