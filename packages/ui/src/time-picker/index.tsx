import dayjs from 'dayjs';
import { colors } from '../styles';
import { Button, IconButton } from '../button';
import { Divider } from '../divider';
import { IconClock, IconMinusSmallSolid, IconPlusSmallSolid } from '../icons';
import { getDropdownStyles } from '../_dropdown/styles';
import { getFieldStyles } from '../_field/styles';
import { TimePickerProps } from './interface';
import { getSyncedKeys } from '../utils';

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

const NODE_NAME_MAP = {
  container: 'TimePicker Container',
  field: 'TimePicker Field',
  digit: 'TimePicker Digit',
  digitDisplay: 'TimePicker Digit Display',
  digitDisplayNumber: 'Number',
  dropdown: 'TimerDropdown',
  actions: 'TimePicker Actions',
  colon: 'TimePicker Colon',
};

function Digit({
  value,
  onDecrement,
  onIncrement,
}: {
  value: string;
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  return (
    <AutoLayout name={NODE_NAME_MAP.digit} direction="vertical">
      <IconButton
        onClick={onIncrement}
        fontSize={12}
        icon={<IconPlusSmallSolid fill={colors.neutral[100]} />}
        size="sm"
        variant="ghost"
      />
      <AutoLayout
        name={NODE_NAME_MAP.digitDisplay}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        width={28}
        height={28}
        cornerRadius={4}
      >
        <Text name={NODE_NAME_MAP.digitDisplayNumber} fontSize={16} lineHeight={24}>
          {value}
        </Text>
      </AutoLayout>
      <IconButton
        onClick={onDecrement}
        fontSize={12}
        icon={<IconMinusSmallSolid />}
        size="sm"
        variant="ghost"
      />
    </AutoLayout>
  );
}

export function TimePicker({
  id,
  onChange,
  disabled,
  size = 'md',
  placement,
  ...rest
}: TimePickerProps) {
  const [syncedKeyOpen, syncedKeyTime, syncedKeyTemp] = getSyncedKeys('TimePicker', id, [
    'open',
    'time',
    'temp',
  ]);
  const [open, setOpen] = useSyncedState(syncedKeyOpen, false);
  const [time, setTime] = useSyncedState(syncedKeyTime, () => dayjs().format('HH:mm'));
  const [temp, setTemp] = useSyncedState(syncedKeyTemp, time);

  const fieldStyles = getFieldStyles({ disabled, size });
  const dropdownStyles = getDropdownStyles({ size, placement });
  const [hour, minute] = temp.split(':');

  const openDropdown = () => {
    if (!disabled) {
      setOpen(true);
      setTemp(time);
    }
  };

  const closeDropdown = () => setOpen(false);

  const changeTemp = (by: number, unit: 'hour' | 'minute') => {
    const t = dayjs().hour(parseInt(hour)).minute(parseInt(minute));

    if (by >= 0) {
      return setTemp(t.add(by, unit).format('HH:mm'));
    } else {
      return setTemp(t.subtract(Math.abs(by), unit).format('HH:mm'));
    }
  };

  const assignTime = () => {
    setTime(temp);
    closeDropdown();
    onChange && !disabled && onChange(time);
  };

  const panel = (
    <AutoLayout
      {...dropdownStyles.list}
      x={{ type: 'left', offset: 0 }}
      width="hug-contents"
      name={NODE_NAME_MAP.dropdown}
      padding={8}
      direction="vertical"
    >
      <AutoLayout name={NODE_NAME_MAP.actions} verticalAlignItems="center">
        <AutoLayout name="Flex" spacing={4}>
          <Digit
            value={hour[0]}
            onIncrement={() => changeTemp(10, 'hour')}
            onDecrement={() => changeTemp(-10, 'hour')}
          />
          <Digit
            value={hour[1]}
            onIncrement={() => changeTemp(1, 'hour')}
            onDecrement={() => changeTemp(-1, 'hour')}
          />
        </AutoLayout>

        <AutoLayout name={NODE_NAME_MAP.colon} padding={8}>
          <Text fontWeight="bold" fill={colors.neutral[900]}>
            :
          </Text>
        </AutoLayout>

        <AutoLayout name="Flex" spacing={4}>
          <Digit
            value={minute[0]}
            onIncrement={() => changeTemp(10, 'minute')}
            onDecrement={() => changeTemp(-10, 'minute')}
          />
          <Digit
            value={minute[1]}
            onIncrement={() => changeTemp(1, 'minute')}
            onDecrement={() => changeTemp(-1, 'minute')}
          />
        </AutoLayout>
      </AutoLayout>

      <Divider margin={{ vertical: 8 }} />

      <AutoLayout width="fill-parent" spacing={4}>
        <Button block variant="ghost" onClick={closeDropdown} size="sm">
          Cancel
        </Button>
        <Button onClick={assignTime} block variant="filled" colorScheme="blue" size="sm">
          Done
        </Button>
      </AutoLayout>
    </AutoLayout>
  );

  return (
    <AutoLayout name={NODE_NAME_MAP.container} width="hug-contents" overflow="visible">
      <AutoLayout
        name={NODE_NAME_MAP.field}
        {...fieldStyles.field}
        {...fieldStyles.input}
        {...rest}
        spacing={8}
        onClick={open ? closeDropdown : openDropdown}
      >
        <Text {...fieldStyles.text}>
          {time}
          {/* {time.format("HH:mm")} */}
        </Text>

        <IconClock color={colors.neutral[500]} width={14} height={14} />
      </AutoLayout>

      {open ? panel : null}
    </AutoLayout>
  );
}
