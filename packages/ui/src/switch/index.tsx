import { SwitchProps } from './interface';
import { getSwitchStyles } from './styles';
import { merge } from 'lodash';

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
  const [checked, setChecked] = useSyncedState(`checked/${id}`, defaultChecked);
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
          // TODO @cc 为什么需要 undefined 判断
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
