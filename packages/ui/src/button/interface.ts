import { ComponentStyle } from '../types';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant = 'filled' | 'outline' | 'ghost';

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

export type ButtonAnatomy = {
  container: AutoLayoutProps;
  text: TextProps;
  icon: Omit<SVGProps, 'src'>;
};

export interface ButtonProps extends Omit<AutoLayoutProps, 'onClick'> {
  children: string;
  style?: ComponentStyle<ButtonAnatomy, ButtonSize, ButtonVariant>;
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
  style?: ComponentStyle<ButtonAnatomy, ButtonSize, ButtonVariant>;
  icon?: FigmaDeclarativeNode;
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  fontSize?: TextProps['fontSize'];
}
