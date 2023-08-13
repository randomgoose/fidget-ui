import { ComponentStyle } from '../types';

type FieldVariant = 'filled' | 'outline' | 'flush';
type FieldSize = 'xs' | 'sm' | 'md' | 'lg';

export interface FieldAnatomy {
  field: AutoLayoutProps;
  input: AutoLayoutProps;
  text: TextProps;
  clearIcon: Omit<SVGProps, 'src' | 'fill'> & { color: string };
  leftAddon: AutoLayoutProps;
  rightAddon: AutoLayoutProps;
  element: AutoLayoutProps;
}

/**
 * @title Field
 */
export interface FieldProps extends InputProps {
  /**
   * @en The style object for all field parts.
   */
  style?: ComponentStyle<FieldAnatomy, FieldSize, FieldVariant>;
  /**
   * @en The appearance of the field.
   * @defaulValue 'outline'
   */
  variant?: FieldVariant;
  /**
   * @en The size of the field.
   * @defaultValue 'md'
   */
  size?: FieldSize;
  /**
   * @en The content of the placeholder.
   */
  placeholder?: string;
  /**
   * @en The element on the left side of the field.
   */
  elementLeft?: FigmaDeclarativeNode;
  /**
   * @en The element on the right side of the field.
   */
  elementRight?: FigmaDeclarativeNode;
  /**
   * @en The addon on the left side of the field.
   */
  addonLeft?: FigmaDeclarativeNode;
  /**
   * @en The addon on the right side of the field.
   */
  addonRight?: FigmaDeclarativeNode;
  /**
   * @en If 'true', the field is disabled.
   */
  disabled?: boolean;
}
