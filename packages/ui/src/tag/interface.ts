import { ComponentStyle } from '../types';

export type TagColorScheme =
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

export type TagSize = 'sm' | 'md' | 'lg';

export type TagVariant = 'solid' | 'subtle' | 'outline';

export type TagAnatomy = {
  container: AutoLayoutProps;
  label: TextProps;
  closeButton: { color: string };
  icon: Omit<SVGProps, 'src'>;
};

/**
 * @title Tag
 */
export interface TagProps extends AutoLayoutProps {
  /**
   * @en The content of the tag.
   */
  children?: FigmaDeclarativeNode;
  /**
   * @en The appearance of the tag.
   */
  variant?: TagVariant;
  /**
   * @en The style object including all tag elements.
   */
  style?: ComponentStyle<TagAnatomy, TagSize, TagVariant>;
  /**
   * @en Apply a preset color scheme to the tag.
   */
  colorScheme?: TagColorScheme;
  /**
   * @en The size of the tag.
   */
  size?: TagSize;
  /**
   * @en If 'true', tags will contain a close button.
   */
  dismissible?: boolean;
  /**
   * @en The icon to the left of the tag label.
   */
  leftIcon?: SVG;
  /**
   * @en The icon to the right of the tag label.
   */
  rightIcon?: SVG;
  /**
   * 
   * @en The close event handler.
   */
  onClose?: () => void;
}
