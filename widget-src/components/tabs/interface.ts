export type TabsVariant = "line" | "enclosed" | "soft-rounded" | "solid-rounded"
export type TabsColorScheme = "neutral" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"

export interface TabPaneProps {
    key: string | number;
    tab?: FigmaDeclarativeNode;
    children?: FigmaDeclarativeNode;
    active?: boolean;
}

export interface TabsProps {
    variant?: TabsVariant;
    colorScheme?: TabsColorScheme;
    activeKey?: string | number;
    isFitted?: boolean;
    children?: FigmaDeclarativeNode;
    items?: TabPaneProps[];
    onChange?: (key: string | number) => void;
}