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

export interface TagProps extends AutoLayoutProps {
  children?: FigmaDeclarativeNode;
  variant?: TagVariant;
  style?: ComponentStyle<TagAnatomy, TagSize, TagVariant>;
  colorScheme?: TagColorScheme;
  size?: TagSize;
  dismissible?: boolean;
  leftIcon?: SVG;
  rightIcon?: SVG;
  onClose?: () => void;
}
