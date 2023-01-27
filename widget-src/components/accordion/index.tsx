import { IconChevronDown, IconChevronUp } from "../icons"
import { AccordionItemProps, AccordionProps } from "./interface"
import { renderChildren } from "../../utils"
import { getAccordionStyles } from "./styles"

const { widget } = figma
const { AutoLayout, useSyncedState } = widget

export function Accordion({
    data,
    width = 320
}:
    AccordionProps) {
    const [activeKeys, setActiveKeys] = useSyncedState<(string | number)[]>("activeKeys", []);

    const {
        container,
        item,
        title: titleStyles,
        content: contentStyles,
        panel,
        button,
        chevronContainer,
        chevron
    } = getAccordionStyles();

    const toggle = (key: string | number) => {
        if (activeKeys.indexOf(key) >= 0) {
            setActiveKeys(
                [...activeKeys].filter(item => item !== key)
            )
        } else {
            setActiveKeys(prev => [...prev, key])
        }
    }

    const renderItem = ({ title, content, key }: AccordionItemProps) => {
        return <AutoLayout
            name="Accordion Item"
            key={key}
            {...item}
        >
            <AutoLayout
                name="Accordion Button"
                onClick={() => { toggle(key) }}
                {...button}
            >
                <AutoLayout name="Accordion Title Container" width={"fill-parent"}>
                    {renderChildren(title, { textProps: titleStyles })}
                </AutoLayout>

                <AutoLayout
                    name="Accordion Chevron Container" {...chevronContainer}>
                    {
                        activeKeys.indexOf(key) >= 0 ? <IconChevronUp {...chevron} /> : <IconChevronDown {...chevron} />
                    }
                </AutoLayout>
            </AutoLayout>

            {
                activeKeys.indexOf(key) >= 0 ?
                    <AutoLayout name="Accordion Panel" {...panel}>
                        {renderChildren(content, { textProps: contentStyles })}
                    </AutoLayout> : null
            }
        </AutoLayout>
    }

    return <AutoLayout
        name="Accordion"
        {...container}
        width={width}
    >
        {
            data.map((item) => renderItem(item))
        }
    </AutoLayout>
}

// export function 