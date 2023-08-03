import { GLOBAL_CONFIG_SYNCED_KEY } from '../utils/constant';
import type { ButtonProps } from '../button/interface';
import { CardProps } from '../card/interface';
import { TagProps } from '../tag/interface';
import { SwitchProps } from '../switch/interface';
import { AvatarProps } from '../avatar/interface';
import { MenuProps } from '../menu';

const { widget } = figma;
const { useSyncedState } = widget;

export type FidgetGlobalConfig = Partial<{
  Button: Partial<ButtonProps>;
  Card: Partial<CardProps>;
  Tag: Partial<TagProps>;
  Switch: Partial<SwitchProps>;
  Avatar: Partial<AvatarProps>;
  Menu: Partial<MenuProps>;
}>;

export function useGlobalConfig(config: FidgetGlobalConfig) {
  const [globalConfig, setGlobalConfig] = useSyncedState(GLOBAL_CONFIG_SYNCED_KEY, config);
  return [globalConfig, setGlobalConfig];
}

export function useFetchGlobalConfig(): FidgetGlobalConfig {
  const [globalConfig] = useSyncedState<FidgetGlobalConfig>(GLOBAL_CONFIG_SYNCED_KEY, {});
  return globalConfig;
}
