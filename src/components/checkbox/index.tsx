import { colors } from '../styles';
import { renderChildren } from '../utils';
import { CheckboxGroupProps, CheckboxProps, Option } from './interface';
import { getCheckboxStyles } from './styles';

const { widget } = figma;
const { AutoLayout, SVG, useSyncedState } = widget;

const icon = (
  <SVG
    width={10}
    height={10}
    src="<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='white' aria-hidden='true' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9-13.5'></path></svg>"
  />
);

export function Checkbox({
  children,
  checked,
  disabled,
  onChange,
  colorScheme,
  ...rest
}: CheckboxProps) {
  const { control, container, label } = getCheckboxStyles({ checked, disabled, colorScheme });

  console.log(container.fill);
  const toggle = () => {
    checked !== undefined && onChange && !disabled && onChange(!checked);
  };

  return (
    <AutoLayout name="Checkbox Container" {...container} {...rest} onClick={toggle}>
      <AutoLayout name="Checkbox Control" {...control}>
        {icon}
      </AutoLayout>
      {renderChildren(children, {
        textProps: { name: 'Checkbox Label', fill: colors.neutral[900], ...label },
      })}
    </AutoLayout>
  );
}

export function CheckboxGroup({
  name,
  children,
  options,
  onChange,
  spacing = 12,
  ...rest
}: CheckboxGroupProps) {
  const [values, setValues] = useSyncedState<Option[]>(`checkbox-group/${name}`, []);

  return (
    <AutoLayout name="Checkbox Group" {...rest} spacing={spacing}>
      {options?.map((option, index) => (
        <Checkbox
          key={index}
          colorScheme={'emerald'}
          disabled={option.disabled}
          checked={values.find((item) => item.value === option.value) ? true : false}
          onChange={(checked) => {
            if (checked) {
              setValues((prev) => [...prev, option]);
            } else {
              setValues((prev) => prev.filter((item) => item.value !== option.value));
            }
          }}
        >
          {option.label}
        </Checkbox>
      ))}
    </AutoLayout>
  );
}
