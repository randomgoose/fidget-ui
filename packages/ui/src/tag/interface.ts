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

export interface TagProps extends AutoLayoutProps {
  children?: FigmaDeclarativeNode;
  variant?: TagVariant;
  style?: ComponentStyle<TagSize, TagVariant>;
  colorScheme?: TagColorScheme;
  size?: TagSize;
  dismissible?: boolean;
  leftIcon?: SVG;
  rightIcon?: SVG;
  onClose?: () => void;
}
