import { FieldProps } from '../_field/interface';

/**
 * @title Text Field
 */
export interface TextFieldProps extends FieldProps {
  /**
   * @en A unique identifier of the text field.
   */
  id: string;
  /**
   * @en The appearance of the text field.
   * @defaultValue 'outline'
   */
  variant?: 'filled' | 'outline' | 'flush';
  /**
   * @en The clear event handler triggers when clearing the content.
   */
  onClear?: () => void;
  /**
   * @en The size of the text field.
   * @defaultValue 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * @en The content of the placeholder.
   */
  placeholder?: string;
  /**
   * @en The element on the left of the text field.
   */
  elementLeft?: FigmaDeclarativeNode;
  /**
   * @en The element on the right of the text field.
   */
  elementRight?: FigmaDeclarativeNode;
  /**
   * @en The addon to the left of the text field.
   */
  addonLeft?: FigmaDeclarativeNode;
  /**
   * @en The element to the right of the text field.
   */
  addonRight?: FigmaDeclarativeNode;
  /**
   * @en If 'true', the text field is disabled.
   */
  disabled?: boolean;
  /**
   * @en If 'true', the text field displays clear icon.
   */
  showClearIcon?: boolean;
}
