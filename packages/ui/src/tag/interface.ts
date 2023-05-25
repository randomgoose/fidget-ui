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

export interface TagProps extends AutoLayoutProps {
  children?: FigmaDeclarativeNode;
  variant?: 'solid' | 'subtle' | 'outline';
  colorScheme?: TagColorScheme;
  size?: 'sm' | 'md' | 'lg';
  dismissible?: boolean;
  leftIcon?: SVG;
  rightIcon?: SVG;
  onClose?: () => void;
}
