import { GLOBAL_CONFIG_SYNCED_KEY } from '../utils/constant';
import type { ButtonProps } from '../button/interface';
import { CardProps } from '../card/interface';
import { TagProps } from '../tag/interface';
import { SwitchProps } from '../switch/interface';
import { AvatarProps } from '../avatar/interface';
import { MenuProps } from '../menu';
import { CheckboxProps } from '../checkbox/interface';
import { FieldProps } from '../_field/interface';
import { AccordionProps } from '../accordion/interface';
import { DescriptionListProps } from '../description-list/interface';
import { TabsProps } from '../tabs/interface';
import { NoticeProps } from '../notice/interface';
import { DividerProps } from '../divider/interface';
import { DatePickerProps } from '../date-picker/interface';
import { RadioProps } from '../radio/interface';
import { StepperProps } from '../stepper/interface';

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
}>;

export function useGlobalConfig(config: FidgetGlobalConfig) {
  const [globalConfig, setGlobalConfig] = useSyncedState(GLOBAL_CONFIG_SYNCED_KEY, config);
  return [globalConfig, setGlobalConfig];
}

export function useFetchGlobalConfig(): FidgetGlobalConfig {
  const [globalConfig] = useSyncedState<FidgetGlobalConfig>(GLOBAL_CONFIG_SYNCED_KEY, {});
  return globalConfig;
}
