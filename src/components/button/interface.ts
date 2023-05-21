export type ButtonColorScheme =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
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
export type ButtonVariant = 'filled' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<AutoLayoutProps, 'onClick'> {
  children: string;
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
  disabled?: boolean;
  leftIcon?: FigmaDeclarativeNode;
  rightIcon?: FigmaDeclarativeNode;
  block?: boolean;
  onClick?: () => void;
}

export interface IconButtonProps extends Omit<AutoLayoutProps, 'onClick'> {
  icon?: FigmaDeclarativeNode;
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  fontSize?: TextProps['fontSize'];
}
