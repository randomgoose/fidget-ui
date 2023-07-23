import { SYNCED_KEY_PREFIX } from './constant';
import type { FidgetComponentNames } from '../types';

export function getSyncedKeys(
  componentName: FidgetComponentNames,
  componentId: string,
  innerKeys: string[]
): string[] {
  // e.g. __fidget_ui_Table_0001/data
  return innerKeys.map(
    (innerKey) => `${SYNCED_KEY_PREFIX}_${componentName}_${componentId}/${innerKey}`
  );
}
