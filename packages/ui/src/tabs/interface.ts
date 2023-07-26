export type TabsVariant = 'line' | 'enclosed' | 'soft-rounded' | 'solid-rounded';
export type TabsColorScheme =
  | 'neutral'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

export interface TabPaneProps extends AutoLayoutProps {
  key: string | number;
  tab?: FigmaDeclarativeNode;
  children?: FigmaDeclarativeNode;
  active?: boolean;
}

export interface TabsProps extends AutoLayoutProps {
  id: string;
  variant?: TabsVariant;
  colorScheme?: TabsColorScheme;
  defaultActiveKey?: string | number;
  activeKey?: string | number;
  isFitted?: boolean;
  children?: FigmaDeclarativeNode;
  items?: TabPaneProps[];
  onChange?: (key: string | number) => Promise<void> | void;
}
