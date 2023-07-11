import { SwitchProps } from './interface';
import { getSwitchStyles } from './styles';
import { getSyncedKeys } from '../utils';

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
  ...rest
}: SwitchProps) {
  // TODO 确定哪些组件需要受控模式
  // TODO 是否由组件内部自动生成 ID
  const [syncedKeyChecked] = getSyncedKeys('Switch', id, ['checked']);
  const [checked, setChecked] = useSyncedState(syncedKeyChecked, defaultChecked);
  const mergedChecked = 'checked' in rest ? rest.checked : checked;

  const styles = getSwitchStyles({
    checked: mergedChecked,
    colorScheme,
    disabled,
    size,
  });

  return (
    <AutoLayout
      name={NODE_NAME_MAP.switch}
      {...styles.container}
      {...rest}
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
      <AutoLayout name={NODE_NAME_MAP.switchThumb} {...styles.thumb} />
    </AutoLayout>
  );
}
