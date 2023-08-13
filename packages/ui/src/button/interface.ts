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

/**
 * @title Button
 */
export interface ButtonProps extends Omit<AutoLayoutProps, 'onClick'> {
  /**
   * @en The inner text of the button.
   */
  children: string;
  /**
   * @en The style object including all parts of the button.
   */
  style?: ComponentStyle<ButtonAnatomy, ButtonSize, ButtonVariant>;
  /**
   * @en The appearance of the button.
   * @defaultValue 'filled'
   */
  variant?: ButtonVariant;
  /**
   * @en Apply a preset color scheme to the button.
   */
  colorScheme?: ButtonColorScheme;
  /**
   * @en The size of the button (T-shirt size).
   * @defaultValue 'md'
   */
  size?: ButtonSize;
  /**
   * @en If 'true', the button and its events will be disabled.
   */
  disabled?: boolean;
  /**
   * @en The icon to the left of the button label.
   */
  leftIcon?: FigmaDeclarativeNode;
  /**
   * @en The icon to the right of the button label.
   */
  rightIcon?: FigmaDeclarativeNode;
  /**
   * @en If `true`, the button's width will be set to 'fill-parent'.
   */
  block?: boolean;
  /**
   * @en The click event of the button.
   */
  onClick?: () => void;
}

/**
 * @title IconButton
 */
export interface IconButtonProps extends Omit<AutoLayoutProps, 'onClick'> {
  /**
   * @en The style object including all IconButton parts.
   */
  style?: ComponentStyle<ButtonAnatomy, ButtonSize, ButtonVariant>;
  /**
   * @en The icon of the icon button.
   */
  icon?: FigmaDeclarativeNode;
  /**
   * @en The appearance of the icon button.
   * @defaultValue 'filled'
   */
  variant?: ButtonVariant;
  /**
   * @en Apply a preset color scheme to the icon button.
   */
  colorScheme?: ButtonColorScheme;
  /**
   * @en The size of the icon button (T-shirt size).
   * @defaultValue 'md'
   */
  size?: ButtonSize;
  /**
   * @en If 'true', the icon button and its events will be disabled.
   */
  disabled?: boolean;
  /**
   * @en The click event of the icon button.
   */
  onClick?: () => void;
  /**
   * @en The size of the inner icon of the icon button.
   */
  fontSize?: TextProps['fontSize'];
}
