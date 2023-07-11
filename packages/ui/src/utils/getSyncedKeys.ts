type FidgetComponentNames =
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
  | 'TimePicker';

const KEY_PREFIX = '__fidget_ui_';

export function getSyncedKeys(
  componentName: FidgetComponentNames,
  componentId: string,
  innerKeys: string[]
): string[] {
  // e.g. __fidget_ui_Table_0001/data
  return innerKeys.map((innerKey) => `${KEY_PREFIX}_${componentName}_${componentId}/${innerKey}`);
}
