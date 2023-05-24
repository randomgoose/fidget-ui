import dayjs from 'dayjs';
import { colors } from '../styles';
import { Button, IconButton } from '../button';
import { Divider } from '../divider';
import { IconClock, IconMinusSmallSolid, IconPlusSmallSolid } from '../../icons';
import { getDropdownStyles } from '../_dropdown/styles';
import { getFieldStyles } from '../_field/styles';
import { TimePickerProps } from './interface';

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

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
    <AutoLayout name="TimePicker Digit" direction={'vertical'}>
      <IconButton
        onClick={onIncrement}
        fontSize={12}
        icon={<IconPlusSmallSolid fill={colors.neutral[100]} />}
        size={'sm'}
        variant={'ghost'}
      />
      <AutoLayout
        name="TimePicker Digit Display"
        verticalAlignItems={'center'}
        horizontalAlignItems={'center'}
        width={28}
        height={28}
        cornerRadius={4}
      >
        <Text name="Number" fontSize={16} lineHeight={24}>
          {value}
        </Text>
      </AutoLayout>
      <IconButton
        onClick={onDecrement}
        fontSize={12}
        icon={<IconMinusSmallSolid />}
        size={'sm'}
        variant={'ghost'}
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
  const [open, setOpen] = useSyncedState(`open/${id}`, false);
  const [time, setTime] = useSyncedState(`time/${id}`, () => dayjs().format('HH:mm'));
  const [temp, setTemp] = useSyncedState(`temp/${id}`, time);

  const { field, text, input } = getFieldStyles({ disabled, size });
  const { list } = getDropdownStyles({ size, placement });
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
      {...list}
      x={{ type: 'left', offset: 0 }}
      width={'hug-contents'}
      name="TimePicker Dropdown"
      padding={8}
      direction={'vertical'}
    >
      <AutoLayout name="TimePicker Actions" verticalAlignItems={'center'}>
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

        <AutoLayout name={'colon'} padding={8}>
          <Text fontWeight={'bold'} fill={colors.neutral[900]}>
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

      <AutoLayout width={'fill-parent'} spacing={4}>
        <Button block variant={'ghost'} onClick={closeDropdown} size={'sm'}>
          Cancel
        </Button>
        <Button onClick={assignTime} block variant={'filled'} colorScheme={'blue'} size={'sm'}>
          Done
        </Button>
      </AutoLayout>
    </AutoLayout>
  );

  return (
    <AutoLayout name="TimePicker Container" width={'hug-contents'} overflow={'visible'}>
      <AutoLayout
        name="TimePicker Field"
        {...field}
        {...input}
        {...rest}
        onClick={open ? closeDropdown : openDropdown}
        spacing={8}
      >
        <Text {...text}>
          {time}
          {/* {time.format("HH:mm")} */}
        </Text>

        <IconClock color={colors.neutral[500]} width={14} height={14} />
      </AutoLayout>

      {open ? panel : null}
    </AutoLayout>
  );
}
