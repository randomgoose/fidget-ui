import { Checkbox } from './checkbox';
import { getSyncedKeys } from '../utils';
import type { CheckboxGroupProps, Option } from './interface';

const {
  widget: { AutoLayout, useSyncedState },
} = figma;

const NODE_NAME_MAP = {
  group: 'Checkbox Group',
};

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
