import dayjs from 'dayjs';
import { getFieldStyles } from '../_field/styles';
import { CalendarView, DatePickerProps } from './interface';
import { colors } from '../styles';
import { Button } from '../button';
import { IconCalendar } from '../icons';
import { getDatePickerStyles } from './styles';
import { SimpleGrid } from '../simple-grid';
import { generateDecade, generateFirstDayOfEachWeek, generateWeek } from './utils';
import { Controls } from './controls';
import { getSyncedKeys } from '../utils';

const NODE_NAME_MAP = {
  datepicker: 'DatePicker',
  field: 'DatePicker Field',
  calendar: 'DatePicker Calendar',
  locator: 'DatePicker Locator',
  calenderWeekdays: 'Calendar Weekdays',
  calendarRow: 'Calendar Row',
  calendarCell: 'Calendar Cell',
  calendarTodayLocator: 'Calendar Today Locator',
};

const { AutoLayout, Text, Ellipse, useSyncedState, Line } = figma.widget;
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

export function DatePicker(props: DatePickerProps) {
  const { variant, size, disabled, placement = 'top-start', format } = props;
  const [syncedKeyOpen, syncedKeyDate, syncedKeyPivot, syncedKeyView] = getSyncedKeys(
    'DatePicker',
    props.id,
    ['open', 'date', 'pivot', 'view']
  );

  /*---- States ----*/
  const [open, setOpen] = useSyncedState(syncedKeyOpen, false);
  const [date, setDate] = useSyncedState(syncedKeyDate, dayjs().toString());
  const [pivot, setPivot] = useSyncedState(syncedKeyPivot, dayjs().toString());
  const [view, setView] = useSyncedState<CalendarView>(syncedKeyView, 'date');

  /*---- Styles ----*/
  const fieldStyles = getFieldStyles({ variant, size, disabled, open });
  const pickerStyles = getDatePickerStyles({
    placement: props.placement || 'top-start',
  });

  const firstDayOfTheMonth = dayjs(pivot).clone().startOf('month');
  const firstDayOfFirstWeekOfMonth = dayjs(firstDayOfTheMonth).startOf('week');

  const generateWeeksOfTheMonth = (): Date[][] => {
    const firstDayOfEachWeek = generateFirstDayOfEachWeek(firstDayOfFirstWeekOfMonth);
    return firstDayOfEachWeek.map((date) => generateWeek(date));
  };

  const toggleCalendar = () => {
    setOpen((prev) => !prev);
  };

  const toggleView = () => {
    setView((prev) => (prev === 'year' ? 'date' : 'year'));
  };

  const decade = generateDecade(dayjs(pivot));

  const renderView = (view: CalendarView) => {
    switch (view) {
      case 'date':
        return (
          <>
            <AutoLayout name={NODE_NAME_MAP.calenderWeekdays} width="fill-parent">
              {generateWeeksOfTheMonth()[0].map((day, index) => (
                <AutoLayout key={index} {...pickerStyles.weekday}>
                  <Text {...pickerStyles.digit}>{dayjs(day).format('dd')}</Text>
                </AutoLayout>
              ))}
            </AutoLayout>

            <AutoLayout direction="vertical" width="fill-parent" spacing={2}>
              {generateWeeksOfTheMonth().map((week, index) => (
                <AutoLayout
                  key={index}
                  width="fill-parent"
                  name={NODE_NAME_MAP.calendarRow}
                  spacing={2}
                >
                  {
                    /*---- Render date cell ----*/
                    week.map((day, index) => {
                      const isToday = dayjs(day).isSame(dayjs(), 'day');
                      const isInThisMonth = day.getMonth() === dayjs(pivot).month();
                      const selected = dayjs(date).isSame(dayjs(day), 'day');

                      return (
                        <AutoLayout
                          key={index}
                          name={NODE_NAME_MAP.calendarCell}
                          {...pickerStyles.cell}
                          fill={selected ? colors.blue[500] : undefined}
                          hoverStyle={{
                            fill: selected ? colors.blue[500] : colors.neutral[100],
                          }}
                          onClick={() => {
                            setPivot(dayjs(day).toString());
                            setDate(dayjs(day).toString());
                            setOpen(false);
                          }}
                        >
                          {isToday ? (
                            <Ellipse
                              name={NODE_NAME_MAP.calendarTodayLocator}
                              {...pickerStyles.indicator}
                            />
                          ) : null}
                          <Text
                            {...pickerStyles.digit}
                            fill={
                              selected
                                ? colors.white
                                : isInThisMonth
                                ? colors.neutral[900]
                                : colors.neutral[300]
                            }
                          >
                            {day.getDate()}
                          </Text>
                        </AutoLayout>
                      );
                    })
                  }
                </AutoLayout>
              ))}
              <Button
                block
                variant="outline"
                size="sm"
                onClick={() => {
                  setDate(dayjs().toString());
                  setPivot(dayjs().toString());
                  setOpen(false);
                }}
              >
                Today
              </Button>
            </AutoLayout>
          </>
        );

      case 'year':
        return (
          <SimpleGrid columns={3} width="fill-parent" height={207}>
            {...decade.map((year) => {
              const isCurrentYear = year === dayjs(date).year();

              return (
                <AutoLayout
                  key={year}
                  width="fill-parent"
                  height="fill-parent"
                  verticalAlignItems="center"
                  horizontalAlignItems="center"
                  onClick={() => {
                    setDate(dayjs(date).year(year).toString());
                    setPivot(dayjs(date).year(year).toString());
                    toggleView();
                  }}
                >
                  <AutoLayout
                    fill={isCurrentYear ? colors.blue[500] : undefined}
                    cornerRadius={4}
                    padding={8}
                    hoverStyle={{
                      fill: isCurrentYear ? colors.blue[400] : colors.gray[100],
                    }}
                  >
                    <Text fill={isCurrentYear ? colors.white : colors.neutral[900]} fontSize={12}>
                      {year}
                    </Text>
                  </AutoLayout>
                </AutoLayout>
              );
            })}
          </SimpleGrid>
        );

      case 'month':
        return (
          <SimpleGrid
            columns={3}
            width="fill-parent"
            height="hug-contents"
            horizontalAlignItems="center"
            spacing={8}
          >
            {...CALENDAR_MONTHS.map((month, index) => {
              const isCurrentMonth = index === dayjs(date).month();
              return (
                <Button
                  key={month}
                  variant={isCurrentMonth ? 'filled' : 'ghost'}
                  colorScheme={isCurrentMonth ? 'blue' : undefined}
                  size="sm"
                  block
                  onClick={() => {
                    setDate(dayjs(date).month(index).toString());
                    setPivot(dayjs(date).month(index).toString());
                    setView('date');
                  }}
                >
                  {month}
                </Button>
              );
            })}
          </SimpleGrid>
        );
    }
  };

  const locatorNode = (
    <AutoLayout name={NODE_NAME_MAP.locator} overflow="visible" hidden={!open}>
      {/* Limit the height of Locator to 0 with a zero-height Line component to avoid layer shifting. */}
      <Line opacity={0} />
      <AutoLayout name={NODE_NAME_MAP.calendar} {...pickerStyles.calendar} hidden={!open}>
        <Controls pivot={pivot} setPivot={setPivot} view={view} setView={setView} />
        {renderView(view)}
      </AutoLayout>
    </AutoLayout>
  );

  const fieldNode = (
    <AutoLayout
      {...fieldStyles.input}
      {...fieldStyles.field}
      name={NODE_NAME_MAP.field}
      onClick={toggleCalendar}
      spacing={4}
      width="hug-contents"
    >
      <IconCalendar width={16} height={16} color={colors.neutral[500]} />
      <Text {...fieldStyles.text}>{dayjs(date).format(format || 'YYYY-MM-DD')}</Text>
    </AutoLayout>
  );

  return (
    <AutoLayout
      name={NODE_NAME_MAP.datepicker}
      {...pickerStyles.container}
      direction="vertical"
      overflow="visible"
      spacing={0}
    >
      {placement?.startsWith('top') ? (
        <>
          {locatorNode}
          {fieldNode}
        </>
      ) : (
        <>
          {fieldNode}
          {locatorNode}
        </>
      )}
    </AutoLayout>
  );
}
