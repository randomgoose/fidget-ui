import { ComponentStyle } from '../types';

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

export interface TabsAnatomy {
  container: AutoLayoutProps;
  tab: AutoLayoutProps;
  activeTab: AutoLayoutProps;
  activeTabLabel: TextProps;
  tabList: AutoLayoutProps;
  tabLabel: TextProps;
  tabPanels: AutoLayoutProps;
  tabPanel: AutoLayoutProps;
}

/**
 * @title Tab Pane
 */
export interface TabPaneProps extends AutoLayoutProps {
  /**
   * @en A unique identifier of the tab pane.
   */
  key: string | number;
  /**
   * @en The title of the tab pane.
   */
  tab?: FigmaDeclarativeNode;
  /**
   * @en The content of the tab pane.
   */
  children?: FigmaDeclarativeNode;
  /**
   * @en If 'true', the content of the tab pane will be displayed.
   */
  active?: boolean;
}

/**
 * @title Tabs
 */
export interface TabsProps extends AutoLayoutProps {
  /**
   * @en A unique identifier of the tabs.
   */
  id: string;
  /**
   * @en The style object including all tabs parts.
   */
  style?: ComponentStyle<TabsAnatomy, string, TabsVariant>;
  /**
   * @en The appearance of the tabs.
   */
  variant?: TabsVariant;
  /**
   * @en Apply a preset color scheme to the tabs.
   */
  colorScheme?: TabsColorScheme;
  /**
   * @en The tab with the key is by default active.
   */
  defaultActiveKey?: string | number;
  /**
   * @en The active tab key (controlled).
   */
  activeKey?: string | number;
  /**
   * @en If 'true', the tab list will fill the width of its parent element.
   * @defaultValue false
   */
  isFitted?: boolean;
  /**
   * @en Child elements of the tabs.
   */
  children?: FigmaDeclarativeNode;
  /**
   * @en Tab panes and contents.
   */
  items?: TabPaneProps[];
  /**
   * @param key
   * @returns
   *
   * @en The change event of the tabs.
   */
  onChange?: (key: string | number) => Promise<void> | void;
}
