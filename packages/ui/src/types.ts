export type ColorScheme =
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

export type ElementProps = AutoLayoutProps &
  Omit<TextProps, 'children'> & { color?: TextProps['fill'] };

export type FidgetComponentNames =
  | 'Dropdown'
  | 'Field'
  | 'Accordion'
  | 'Avatar'
  | 'Button'
  | 'Carousel'
  | 'Checkbox'
  | 'DatePicker'
  | 'DescriptionList'
  | 'Divider'
  | 'Heading'
  | 'Icon'
  | 'Menu'
  | 'Notice'
  | 'Radio'
  | 'Select'
  | 'SimpleGrid'
  | 'Switch'
  | 'Tabs'
  | 'Tag'
  | 'TextField'
  | 'TimePicker'
  | 'Stepper';

export type ComponentStyle<
  PartsStyle = Record<string, any>,
  Size extends string = string,
  Variant extends string = string
> = {
  baseStyle?: Partial<PartsStyle>;
  sizes?: Partial<Record<Size, Partial<PartsStyle>>>;
  variants?: Partial<Record<Variant, Partial<PartsStyle>>>;
};
