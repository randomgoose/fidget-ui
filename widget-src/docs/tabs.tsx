import { Heading, RadioGroup, Select } from "../components"
import { Option } from "../components/radio/interface"
import { Tabs } from "../components/tabs"
import { TabPaneProps, TabsColorScheme, TabsVariant } from "../components/tabs/interface"
import { colors } from "../styles"
import { docStyle } from "./styles"

const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget

const items: TabPaneProps[] = [
    { key: 1, tab: "Table View", children: <AutoLayout width={240} height={160} fill={colors.neutral[900]} /> },
    { key: 2, tab: "Board View", children: "Board" },
    { key: 3, tab: "Form View", children: "Form" }
]

const variants: Option[] = [
    { value: "line", label: "Line" },
    { value: "enclosed", label: "Enclosed" },
    { value: "soft-rounded", label: "Soft Rounded" },
    { value: "solid-rounded", label: "Solid Rounded" }
]

const colorSchemes = [
    "neutral", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"
]

export function TabsDoc() {
    const [activeKey, setActiveKey] = useSyncedState<string | number>("tabs/active-key", 1);
    const [variant, setVariant] = useSyncedState<TabsVariant>("tabs/variant", "line");
    const [colorScheme, setColorScheme] = useSyncedState<TabsColorScheme>("tabs/color-scheme", "blue");

    return <AutoLayout
        {...docStyle}
        name="Tabs Doc"
    >
        <Heading as="h1">Tabs</Heading>
        <Heading as="h5">Variants and color schemes</Heading>

        <RadioGroup
            name="tabs-variant"
            options={variants}
            onChange={(option) => setVariant(option.value as TabsVariant)}
        />

        <Tabs
            variant={variant}
            colorScheme={colorScheme}
            items={items}
            activeKey={activeKey}
            onChange={key => setActiveKey(key)}
        />

        <Select id="any" options={colorSchemes.map(color => ({ label: color, value: color }))} width={240} onChange={(value) => setColorScheme(value as TabsColorScheme)} />
    </AutoLayout>
}