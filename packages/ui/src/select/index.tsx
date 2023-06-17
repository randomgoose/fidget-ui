import { colors } from '../styles';
import { renderChildren } from '../utils';
import { IconChevronDown, IconChevronUp } from '../icons';
import { getDropdownStyles } from '../_dropdown/styles';
import { getFieldStyles } from '../_field/styles';
import { OptionProps, SelectProps } from './interface';

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

const NODE_MAP_MAP = {
  select: 'Select',
  value: 'Select Value',
  option: 'Select Option',
  optionText: 'Select Option Text',
  optionList: 'Select Option List',
};

export function Option({}: OptionProps) {
  return <AutoLayout name={NODE_MAP_MAP.option}></AutoLayout>;
}

export function Select({
  options,
  id,
  onChange,
  placeholder = 'Select...',
  size,
  variant,
  disabled,
  placement = 'bottom',
  ...rest
}: SelectProps) {
  const [open, setOpen] = useSyncedState<boolean>(`open/${id}`, false);
  const [selected, setSelected] = useSyncedState<OptionProps | null>(`selected/${id}`, null);

  const fieldStyles = getFieldStyles({ size, variant, disabled, open });
  const dropdownStyles = getDropdownStyles({ size, placement });

  const chevron = open ? (
    <IconChevronUp color={colors.neutral[500]} width={12} height={12} />
  ) : (
    <IconChevronDown color={colors.neutral[500]} width={12} height={12} />
  );

  const toggleOptionList = () => {
    setOpen((prev) => !prev);
  };

  const select = (option: OptionProps) => {
    if (option.value !== selected?.value) {
      onChange?.(option);
    }
    setSelected(option);
  };

  return (
    <AutoLayout
      name={NODE_MAP_MAP.select}
      {...fieldStyles.field}
      {...fieldStyles.input}
      {...rest}
      onClick={toggleOptionList}
    >
      <Text
        name={NODE_MAP_MAP.value}
        {...fieldStyles.text}
        fill={selected?.value ? colors.neutral[900] : colors.neutral[500]}
        width="fill-parent"
      >
        {selected?.label || placeholder}
      </Text>

      {chevron}

      {open ? (
        <AutoLayout name={NODE_MAP_MAP.optionList} {...dropdownStyles.list}>
          <AutoLayout {...dropdownStyles.item} onClick={() => setSelected(null)}>
            <Text {...dropdownStyles.text} fill={colors.neutral[400]}>
              {placeholder}
            </Text>
          </AutoLayout>

          {options.map((option, index) => (
            <AutoLayout
              key={index}
              name={NODE_MAP_MAP.option}
              {...dropdownStyles.item}
              onClick={() => select(option)}
            >
              {renderChildren(option.label !== undefined ? option.label : option.value, {
                textProps: { name: NODE_MAP_MAP.optionText, ...dropdownStyles.text },
              })}
            </AutoLayout>
          ))}
        </AutoLayout>
      ) : null}
    </AutoLayout>
  );
}
