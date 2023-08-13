import { ComponentStyle } from '../types';

export type NoticeStatus = 'info' | 'error' | 'warning' | 'success';
export type NoticeVariant = 'subtle' | 'solid';

export interface NoticeAnatomy {
  container: AutoLayoutProps;
  title: TextProps;
  description: TextProps;
  icon: Omit<SVGProps, 'src'>;
}

/**
 * @title Notice
 */
export interface NoticeProps extends AutoLayoutProps {
  /**
   * @en The style object including all notice parts.
   * @defaultValue true
   */
  style?: ComponentStyle<NoticeAnatomy, string, NoticeVariant>;
  /**
   * @en If 'false', hide the preset icon. Or replace the default icon with a custom one.
   * @defaultValue true
   */
  icon?: FigmaDeclarativeNode | boolean;
  /**
   * @en The title of the notice.
   */
  title?: FigmaDeclarativeNode;
  /**
   * @en The description of the notice.
   */
  description?: FigmaDeclarativeNode;
  /**
   * @en The status of the notice.
   * @defaultValue 'info'
   */
  status?: NoticeStatus;
  /**
   * @en The apperance of the notice.
   * @defaultValue 'subtle'
   */
  variant?: NoticeVariant;
  /**
   * @en Other child elements of the notice.
   */
  children?: FigmaDeclarativeNode;
}
