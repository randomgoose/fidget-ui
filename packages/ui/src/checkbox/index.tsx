import { omit } from 'lodash';

import { colors } from '../styles';
import { renderChildren } from '../utils';
import { CheckboxGroupProps, CheckboxProps, Option } from './interface';
import { getCheckboxStyles } from './styles';

const { widget } = figma;
const { AutoLayout, SVG, useSyncedState } = widget;

const NODE_NAME_MAP = {
  root: 'Checkbox',
  control: 'Checkbox Control',
  label: 'Checkbox Label',
  group: 'Checkbox Group',
};

const icon = (
  <SVG
    width={10}
    height={10}
    src="<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='white' aria-hidden='true' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9-13.5'></path></svg>"
  />
);

export function Checkbox(props: CheckboxProps) {
  const { children, disabled, onChange, colorScheme, ...rest } = props;
  const [stateChecked, setStateChecked] = useSyncedState('checked', false);
  const mergedChecked = 'checked' in props ? props.checked : stateChecked;
  const styles = getCheckboxStyles({ checked: mergedChecked, disabled, colorScheme });

  // TODO @cc why not useSyncedState
  const tryUpdateChecked = () => {
    if (!disabled) {
      const nextChecked = !mergedChecked;
      setStateChecked(nextChecked);
      onChange?.(nextChecked);
    }
  };

  return (
    <AutoLayout
      name={NODE_NAME_MAP.root}
      {...styles.container}
      {...omit(rest, 'checked')}
      onClick={(event) => {
        tryUpdateChecked();
        rest.onClick?.(event);
      }}
    >
      <AutoLayout name={NODE_NAME_MAP.control} {...styles.control}>
        {icon}
      </AutoLayout>
      {renderChildren(children, {
        textProps: { name: NODE_NAME_MAP.label, fill: colors.neutral[900], ...styles.label },
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
  // TODO @cc don't understand, and maybe we have to use useSyncedMap here
  const [values, setValues] = useSyncedState<Option[]>(`checkbox-group/${name}`, []);

  return (
    <AutoLayout name={NODE_NAME_MAP.group} {...rest} spacing={spacing}>
      {options?.map((option, index) => (
        <Checkbox
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
