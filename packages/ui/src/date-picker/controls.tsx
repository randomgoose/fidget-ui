import dayjs from 'dayjs';
import { colors } from '../styles';
import { IconButton } from '../button';
import { getDatePickerStyles } from './styles';
import { CalendarView } from './interface';
import { IconChevronLeft, IconChevronRight } from '../icons';
import { generateDecade } from './utils';

const { AutoLayout, Text } = figma.widget;
const CALENDAR_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function Controls({
  pivot,
  view,
  setView,
  setPivot,
}: {
  pivot: string;
  view: CalendarView;
  setPivot: (newValue: string | ((currValue: string) => string)) => void;
  setView: (view: CalendarView) => void;
}) {
  const paginate = (by: number) => {
    setPivot((prev) => dayjs(prev).add(by, 'month').toString());
  };

  const { controls } = getDatePickerStyles();
  const buttonStyles: TextProps = {
    fontSize: 12,
    fill: colors.neutral[900],
    hoverStyle: {
      fill: colors.blue[600],
    },
  };

  const decade = generateDecade(dayjs(pivot));

  return (
    <AutoLayout name="Calendar Controls" {...controls}>
      {view !== 'month' && (
        <IconButton
          variant="ghost"
          size="sm"
          icon={<IconChevronLeft />}
          onClick={() => {
            view === 'year' ? paginate(-108) : paginate(-1);
          }}
        />
      )}
      {view === 'year' ? (
        <Text
          {...buttonStyles}
          width="fill-parent"
          horizontalAlignText="center"
          onClick={() => setView('date')}
        >
          {decade[0]} - {decade[decade.length - 1]}
        </Text>
      ) : view === 'date' ? (
        <AutoLayout width="fill-parent" horizontalAlignItems="center" spacing={4}>
          <Text
            {...buttonStyles}
            onClick={() => {
              setView('month');
            }}
          >
            {CALENDAR_MONTHS[dayjs(pivot).month()]}
          </Text>
          <Text
            {...buttonStyles}
            onClick={() => {
              setView('year');
            }}
          >
            {dayjs(pivot).year() + ''}
          </Text>
        </AutoLayout>
      ) : (
        <Text fontSize={12} width="fill-parent" horizontalAlignText="center">
          Select month
        </Text>
      )}
      {view !== 'month' && (
        <IconButton
          variant="ghost"
          size="sm"
          icon={<IconChevronRight />}
          onClick={() => {
            view === 'year' ? paginate(108) : paginate(1);
          }}
        />
      )}
    </AutoLayout>
  );
}
