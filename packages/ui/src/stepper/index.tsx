import { IconButton } from '../button';
import { IconMinusSolid, IconPlusSolid } from '../icons';
import { getSyncedKeys } from '../utils';
import { StepperProps } from './interface';
import { isNaN } from 'lodash-es';
import { getStepperStyles } from './styles';
import { Decimal } from 'decimal.js';

const { AutoLayout, Input, useSyncedState } = figma.widget;

const NODE_NAME_MAP = {
  container: 'Stepper Container',
  increment_button: 'Stepper Increment Button',
  decrement_button: 'Stepper Decrement Button',
  field: 'Stepper Field',
};

export function Stepper(props: StepperProps) {
  const {
    id,
    defaultValue,
    size = 'md',
    step = 1,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    onChange,
    precision,
    width = 120,
    disabled,
    ...rest
  } = props;
  const [syncedKeyValue] = getSyncedKeys('Stepper', id, ['value']);
  const [value, setValue] = useSyncedState(syncedKeyValue, defaultValue || 0);

  const mergedValue = 'value' in props && props.value ? props.value : value;

  const updateValue = (by: number) => {
    if (!disabled) {
      const nextValue = new Decimal(mergedValue).plus(by).toNumber();

      if (nextValue >= min && nextValue <= max) {
        setValue(nextValue);
        onChange?.(nextValue);
      }
    }
  };

  const styles = getStepperStyles({ size });

  return (
    <AutoLayout spacing={-1} width={width} {...rest} name={NODE_NAME_MAP.container}>
      <IconButton
        {...styles.decrementButton}
        icon={<IconMinusSolid />}
        onClick={() => updateValue(-step)}
        name={NODE_NAME_MAP.decrement_button}
        disabled={value <= min}
      />
      <Input
        {...styles.field}
        name={NODE_NAME_MAP.field}
        value={precision ? value.toFixed(precision) : value.toString()}
        onTextEditEnd={(e) =>
          setValue((prev) =>
            isNaN(e.characters)
              ? prev
              : parseFloat(e.characters) <= max && parseFloat(e.characters) >= min
              ? parseFloat(e.characters)
              : prev
          )
        }
      />
      <IconButton
        {...styles.incrementButton}
        icon={<IconPlusSolid />}
        onClick={() => updateValue(step)}
        name={NODE_NAME_MAP.increment_button}
        disabled={value >= max}
      />
    </AutoLayout>
  );
}
