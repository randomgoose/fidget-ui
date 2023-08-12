import { GLOBAL_CONFIG_SYNCED_KEY } from '../utils/constant';
import type { ButtonProps } from '../button/interface';
import type { CardProps } from '../card/interface';
import type { TagProps } from '../tag/interface';
import type { SwitchProps } from '../switch/interface';
import type { AvatarProps } from '../avatar';
import type { MenuProps } from '../menu';
import type { CheckboxProps } from '../checkbox/interface';
import type { FieldProps } from '../_field/interface';
import type { AccordionProps } from '../accordion/interface';
import type { DescriptionListProps } from '../description-list/interface';
import type { TabsProps } from '../tabs/interface';
import type { NoticeProps } from '../notice/interface';
import type { DividerProps } from '../divider/interface';
import type { DatePickerProps } from '../date-picker/interface';
import type { RadioProps } from '../radio/interface';
import type { StepperProps } from '../stepper/interface';
import { TableProps } from '../table/interface';

const { widget } = figma;
const { useSyncedState } = widget;

export type FidgetGlobalConfig = Partial<{
  Button: Partial<ButtonProps>;
  Card: Partial<CardProps>;
  Tag: Partial<TagProps>;
  Switch: Partial<SwitchProps>;
  Avatar: Partial<AvatarProps>;
  Menu: Partial<MenuProps>;
  Checkbox: Partial<CheckboxProps>;
  Radio: Partial<RadioProps>;
  Field: Partial<FieldProps>;
  Accordion: Partial<AccordionProps>;
  DescriptionList: Partial<DescriptionListProps>;
  Tabs: Partial<TabsProps>;
  Notice: Partial<NoticeProps>;
  Divider: Partial<DividerProps>;
  Calendar: Partial<DatePickerProps>;
  Stepper: Partial<StepperProps>;
  Table: Partial<TableProps>;
}>;

export function useGlobalConfig(config: FidgetGlobalConfig) {
  const [globalConfig, setGlobalConfig] = useSyncedState(GLOBAL_CONFIG_SYNCED_KEY, config);
  return [globalConfig, setGlobalConfig];
}

export function useFetchGlobalConfig(): FidgetGlobalConfig {
  const [globalConfig] = useSyncedState<FidgetGlobalConfig>(GLOBAL_CONFIG_SYNCED_KEY, {});
  return globalConfig;
}
