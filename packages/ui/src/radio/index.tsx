import { colors } from '../styles';
import { renderChildren } from '../utils';
import { RadioGroupProps, RadioProps } from './interface';
import { getRadioStyles } from './styles';

const { widget } = figma;
const { AutoLayout, Ellipse, useSyncedState } = widget;

const NODE_NAME_MAP = {
  root: 'Radio',
  control: 'Radio Control',
  ink: 'Radio Ink',
  group: 'Radio Group',
};

export function Radio({ value, children, disabled = false, checked = false, onClick }: RadioProps) {
  const styles = getRadioStyles({ checked, disabled });

  return (
    <AutoLayout
      name={NODE_NAME_MAP.root}
      onClick={() => {
        !disabled && onClick?.(value);
      }}
      {...styles.container}
    >
      <AutoLayout name={NODE_NAME_MAP.control} {...styles.control}>
        {checked ? (
          <Ellipse width={6} height={6} fill={colors.white} name={NODE_NAME_MAP.ink} />
        ) : null}
      </AutoLayout>
      {children ? renderChildren(children, { textProps: styles.label }) : null}
    </AutoLayout>
  );
}

export function RadioGroup(props: RadioGroupProps) {
  const {
    name,
    value: propValue,
    orientation = 'horizontal',
    // TODO @cc children for what
    // children,
    options,
    onChange,
    spacing = 12,
    render,
    ...rest
  } = props;
  const [stateValue, setStateValue] = useSyncedState(
    `radio-group/${name}`,
    'value' in props ? propValue : options?.[0]?.value || ''
  );
  const value = 'value' in props ? propValue : stateValue;

  return (
    <AutoLayout name={NODE_NAME_MAP.group} {...rest} direction={orientation} spacing={spacing}>
      {options?.map(({ value: currentRadioValue, label, disabled }, index) => {
        const checked = currentRadioValue === value;
        const clickHandler = () => {
          if (!disabled) {
            setStateValue(currentRadioValue);
            onChange?.({ value: currentRadioValue, label });
          }
        };

        return typeof render === 'function' ? (
          <AutoLayout
            key={index}
            name={NODE_NAME_MAP.root}
            opacity={disabled ? 0.3 : 1}
            onClick={clickHandler}
          >
            {render({
              checked,
              option: { value: currentRadioValue, label, disabled },
            })}
          </AutoLayout>
        ) : (
          <Radio
            key={index}
            value={currentRadioValue}
            checked={checked}
            disabled={disabled}
            onClick={clickHandler}
          >
            {label}
          </Radio>
        );
      })}
    </AutoLayout>
  );
}
