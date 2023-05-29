import { colors } from '../styles';
import { renderChildren } from '../utils';
import { IconChevronDown, IconChevronUp } from '../icons';
import { getDropdownStyles } from '../_dropdown/styles';
import { getFieldStyles } from '../_field/styles';
import { OptionProps, SelectProps } from './interface';

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

export function Option({}: OptionProps) {
  return <AutoLayout name="Select Option"></AutoLayout>;
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

  const { field, text: fieldText, input } = getFieldStyles({ size, variant, disabled, open });
  const { list, item, text } = getDropdownStyles({ size, placement });

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
      onChange && onChange(option);
    }
    setSelected(option);
  };

  return (
    <AutoLayout name="Select" {...field} {...input} {...rest} onClick={toggleOptionList}>
      <Text
        name="Select Text"
        {...fieldText}
        fill={selected?.value ? colors.neutral[900] : colors.neutral[500]}
        width={'fill-parent'}
      >
        {selected?.label || placeholder}
      </Text>

      {chevron}
      {open ? (
        <AutoLayout {...list} name="Select Option List">
          <AutoLayout
            {...item}
            key={''}
            onClick={() => {
              setSelected(null);
            }}
          >
            <Text {...text} fill={colors.neutral[400]}>
              {placeholder}
            </Text>
          </AutoLayout>
          {options.map((option, index) => (
            <AutoLayout
              {...item}
              name="Select Item"
              key={index}
              onClick={() => {
                select(option);
              }}
            >
              {renderChildren(option.label, { textProps: { ...text, name: 'Select Item Text' } })}
            </AutoLayout>
          ))}
        </AutoLayout>
      ) : null}
    </AutoLayout>
  );
}
