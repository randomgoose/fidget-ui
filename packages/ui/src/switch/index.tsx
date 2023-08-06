import { SwitchProps } from './interface';
import { getSwitchStyles } from './styles';
import { getSyncedKeys } from '../utils';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

const NODE_NAME_MAP = {
  switch: 'Switch',
  switchThumb: 'Switch Thumb',
};

export function Switch({
  id,
  onChange,
  colorScheme,
  disabled,
  size,
  defaultChecked = false,
  style,
  ...rest
}: SwitchProps) {
  // TODO 确定哪些组件需要受控模式
  // TODO 是否由组件内部自动生成 ID

  const [syncedKeyChecked] = getSyncedKeys('Switch', id, ['checked']);
  const [checked, setChecked] = useSyncedState(syncedKeyChecked, defaultChecked);
  const mergedChecked = 'checked' in rest ? rest.checked : checked;

  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    defaultStyle: getSwitchStyles({
      checked: mergedChecked,
      colorScheme,
      disabled,
      size,
    }),
    globalStyle: globalConfig.Switch?.style,
    propStyle: style,
    size,
  });

  return (
    <AutoLayout
      {...styles.container}
      name={NODE_NAME_MAP.switch}
      onClick={() => {
        if (!disabled) {
          onChange?.(!mergedChecked);
          // TODO control mode
          if (id !== undefined) {
            setChecked(!mergedChecked);
          }
        }
      }}
    >
      <AutoLayout {...styles.thumb} name={NODE_NAME_MAP.switchThumb} />
    </AutoLayout>
  );
}
