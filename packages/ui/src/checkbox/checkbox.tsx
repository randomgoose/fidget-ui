import { omit } from 'lodash-es';
import { IconCheck } from '../icons';
import { renderChildren, getSyncedKeys } from '../utils';
import { CheckboxProps } from './interface';
import { getCheckboxStyles } from './styles';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';

const {
  widget: { AutoLayout, useSyncedState },
} = figma;

const NODE_NAME_MAP = {
  root: 'Checkbox',
  control: 'Checkbox Control',
  label: 'Checkbox Label',
};

export function Checkbox(props: CheckboxProps) {
  const { id, children, disabled, onChange, colorScheme, ...rest } = props;
  const [syncedKeyChecked] = getSyncedKeys('Checkbox', id, ['checked']);
  const [stateChecked, setStateChecked] = useSyncedState(syncedKeyChecked, false);
  const mergedChecked = 'checked' in props ? props.checked : stateChecked;

  const globalConfig = useFetchGlobalConfig();

  const styles = mergeUserDefinedStyles({
    globalStyle: globalConfig.Checkbox?.style,
    defaultStyle: getCheckboxStyles({ checked: mergedChecked, disabled, colorScheme }),
    propStyle: props.style,
  });

  const tryUpdateChecked = () => {
    if (!disabled) {
      const nextChecked = !mergedChecked;
      setStateChecked(nextChecked);
      onChange?.(nextChecked);
    }
  };

  return (
    <AutoLayout
      {...styles.container}
      {...omit(rest, 'checked')}
      onClick={(event) => {
        tryUpdateChecked();
        rest.onClick?.(event);
      }}
      name={NODE_NAME_MAP.root}
    >
      <AutoLayout {...styles.control} name={NODE_NAME_MAP.control}>
        <IconCheck {...styles.ink} />
      </AutoLayout>
      {renderChildren(children, {
        textProps: { name: NODE_NAME_MAP.label, ...styles.label },
      })}
    </AutoLayout>
  );
}
