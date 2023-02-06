import { IconCake } from "../../icons"
import { renderChildren, renderIcon } from "../../utils"
import { Button } from "../button"
import { getDropdownStyles } from "../_dropdown/styles"
import { MenuItemProps, MenuProps } from "./interface"
import { getMenuStyles } from "./styles"

const { widget } = figma
const { AutoLayout, useSyncedState } = widget

export function Menu(props: MenuProps) {
    const [isOpen, setIsOpen] = useSyncedState(`open/${props.id}`, false);

    const { list, item } = getMenuStyles()
    // getDropdownStyles()

    return <AutoLayout
        name="Menu"
    >
        {props.trigger ? props.trigger : <Button variant={"outline"}>Trigger</Button>}
        <AutoLayout {...list} name="Menu Item List" width={240}>
            <MenuItem {...item} icon={<IconCake />}>
                hi
            </MenuItem>
        </AutoLayout>
    </AutoLayout >
}

export function MenuTrigger() {

}

export function MenuItem(props: MenuItemProps) {
    const { children, icon, ...rest } = props;
    const { text } = getMenuStyles()

    const iconNode = icon ? renderIcon({ svg: icon as any, options: {} }) : null

    return (
        <AutoLayout {...rest} name="Menu Item" onClick={() => { }} width={"fill-parent"}>
            {iconNode}
            {renderChildren(children, { textProps: text })}
        </AutoLayout>
    )
}