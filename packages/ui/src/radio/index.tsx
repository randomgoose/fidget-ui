import { useFetchGlobalConfig } from '../config-provider';
import { renderChildren, getSyncedKeys } from '../utils';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { RadioGroupProps, RadioProps } from './interface';
import { getRadioStyles } from './styles';

const { widget } = figma;
const { AutoLayout, Rectangle, useSyncedState } = widget;

const NODE_NAME_MAP = {
  root: 'Radio',
  control: 'Radio Control',
  ink: 'Radio Ink',
  group: 'Radio Group',
};

export function Radio({
  value,
  children,
  disabled = false,
  checked = false,
  onClick,
  style,
}: RadioProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    globalStyle: globalConfig.Radio?.style,
    propStyle: style,
    defaultStyle: getRadioStyles({ checked, disabled }),
  });

  return (
    <AutoLayout
      name={NODE_NAME_MAP.root}
      onClick={() => {
        !disabled && onClick?.(value);
      }}
      {...styles.container}
    >
      <AutoLayout name={NODE_NAME_MAP.control} {...styles.control}>
        {checked ? <Rectangle {...styles.ink} name={NODE_NAME_MAP.ink} /> : null}
      </AutoLayout>
      {children ? renderChildren(children, { textProps: styles.label }) : null}
    </AutoLayout>
  );
}

export function RadioGroup(props: RadioGroupProps) {
  const {
    // TODO 使用 name 还是 id 作为唯一标识
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
  const [syncedKeyValue] = getSyncedKeys('Radio', name, ['group/value']);
  const [stateValue, setStateValue] = useSyncedState(
    syncedKeyValue,
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
