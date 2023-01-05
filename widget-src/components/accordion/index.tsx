import { colors } from "../../styles"
import { IconChevronIconDown, IconChevronIconUp } from "../icons"
import { AccordionProps } from "./interface"

const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget

const styles: {
    container: AutoLayoutProps,
    title: TextProps,
    content: TextProps
} = {
    container: {},
    title: {},
    content: {}
}

export function Accordion({
    data,
    width = 320
}:
    AccordionProps) {
    const [activeKeys, setActiveKeys] = useSyncedState<(string | number)[]>("activeKeys", []);

    const toggle = (key: string | number) => {
        if (activeKeys.indexOf(key) >= 0) {
            setActiveKeys(
                [...activeKeys].filter(item => item !== key)
            )
        } else {
            setActiveKeys(prev => [...prev, key])
        }
    }

    return <AutoLayout
        name="Accordion"
        direction={"vertical"}
        width={width}
        padding={4}
        stroke={colors.neutral[200]}
        cornerRadius={6}
        spacing={4}
    >
        {
            data.map(({ title, content, key }, index) => (
                <AutoLayout
                    name="Accordion Item"
                    direction="vertical"
                    key={index}
                    width={"fill-parent"}
                    spacing={4}
                    fill={colors.white}
                    cornerRadius={3}
                >
                    <AutoLayout
                        cornerRadius={2}
                        padding={{ left: 8, vertical: 4 }}
                        name="Accordion Item Title"
                        width={"fill-parent"}
                        hoverStyle={{ fill: colors.neutral[100] }}
                        onClick={() => { toggle(key) }}
                        verticalAlignItems={"center"}
                    >
                        <Text
                            fill={colors.neutral[700]}
                            fontWeight={"bold"}
                            fontSize={14}
                            lineHeight={22}
                            width={"fill-parent"}
                        >
                            {title}
                        </Text>

                        <AutoLayout
                            name="Accordion Chevron Container"
                            width={24}
                            height={24}
                            padding={6}
                            cornerRadius={4}
                        >
                            {
                                activeKeys.indexOf(key) >= 0 ? <IconChevronIconUp color={colors.neutral[400]} /> : <IconChevronIconDown color={colors.neutral[400]} />
                            }
                        </AutoLayout>
                    </AutoLayout>

                    {
                        activeKeys.indexOf(key) >= 0 ?
                            <AutoLayout
                                width={"fill-parent"}
                                padding={{ horizontal: 8, vertical: 4 }}
                            >
                                <Text
                                    width={"fill-parent"}
                                    fontSize={14}
                                    lineHeight={22}
                                    fill={colors.neutral[500]}
                                >
                                    {content}
                                </Text>
                            </AutoLayout> : null
                    }
                </AutoLayout>
            ))
        }
    </AutoLayout>
}

// export function 