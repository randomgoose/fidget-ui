import { omit } from 'lodash-es';
import { renderChildren, getSyncedKeys } from '../utils';
import { CheckboxGroupProps, CheckboxProps, Option } from './interface';
import { getCheckboxStyles } from './styles';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { IconCheck } from '../icons';

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

const NODE_NAME_MAP = {
  root: 'Checkbox',
  control: 'Checkbox Control',
  label: 'Checkbox Label',
  group: 'Checkbox Group',
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

export function CheckboxGroup({
  name,
  // TODO @cc never used
  options,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange,
  spacing = 12,
  ...rest
}: CheckboxGroupProps) {
  // TODO maybe we have to use useSyncedMap here
  // TODO name 是否应该改为 id
  const [syncedKeyValues] = getSyncedKeys('Checkbox', name, [`group/values`]);
  const [values, setValues] = useSyncedState<Option[]>(syncedKeyValues, []);

  return (
    <AutoLayout name={NODE_NAME_MAP.group} {...rest} spacing={spacing}>
      {options?.map((option, index) => (
        <Checkbox
          // TODO id is necessary
          id={`${index}`}
          key={index}
          colorScheme="emerald"
          disabled={option.disabled}
          checked={!!values.find((item) => item.value === option.value)}
          onChange={(checked) => {
            setValues((prev) => {
              const next = checked
                ? [...prev, option]
                : prev.filter((item) => item.value !== option.value);
              // onChange?.(next);
              return next;
            });
          }}
        >
          {option.label}
        </Checkbox>
      ))}
    </AutoLayout>
  );
}
