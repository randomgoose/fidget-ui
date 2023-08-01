import { GLOBAL_CONFIG_SYNCED_KEY } from '../utils/constant';
import type { ButtonProps } from '../button/interface';

const { widget } = figma;
const { useSyncedState } = widget;

export type FidgetGlobalConfig = Partial<{
  Button: Partial<ButtonProps>;
}>;

export function useGlobalConfig(config: FidgetGlobalConfig) {
  const [globalConfig, setGlobalConfig] = useSyncedState(GLOBAL_CONFIG_SYNCED_KEY, config);
  return [globalConfig, setGlobalConfig];
}

export function useFetchGlobalConfig(): FidgetGlobalConfig {
  const [globalConfig] = useSyncedState<FidgetGlobalConfig>(GLOBAL_CONFIG_SYNCED_KEY, {});
  return globalConfig;
}
