import dayjs from 'dayjs';
import { getFieldStyles } from '../_field/styles';
import { CalendarView, DatePickerProps } from './interface';
import { colors } from '../../styles';
import { Button } from '../button';
import { IconCalendar } from '../../icons';
import { getDatePickerStyles } from './styles';
import { SimpleGrid } from '../simple-grid';
import { generateDecade, generateFirstDayOfEachWeek, generateWeek } from './utils';
import { Controls } from './controls';

const { AutoLayout, Text, Ellipse, useSyncedState } = figma.widget;
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
  const { variant, size, disabled } = props;

  /*---- Styles ----*/
  const { field, input } = getFieldStyles({ variant, size, disabled });
  const { cell, calendar, digit, weekday, indicator } = getDatePickerStyles();

  /*---- States ----*/
  const [open, setOpen] = useSyncedState<boolean>(`open/${props.id}`, false);
  const [date, setDate] = useSyncedState<string>(`date/${props.id}`, dayjs().toString());
  const [pivot, setPivot] = useSyncedState<string>(`pivot/${props.id}`, dayjs().toString());
  const [view, setView] = useSyncedState<CalendarView>(`view/${props.id}`, 'date');

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
            <AutoLayout name="Calendar Weekdays" width={'fill-parent'}>
              {generateWeeksOfTheMonth()[0].map((day, index) => (
                <AutoLayout {...weekday} key={index}>
                  <Text {...digit} key={index}>
                    {dayjs(day).format('dd')}
                  </Text>
                </AutoLayout>
              ))}
            </AutoLayout>

            <AutoLayout direction={'vertical'} width={'fill-parent'} spacing={2}>
              {generateWeeksOfTheMonth().map((week, index) => (
                <AutoLayout key={index} width={'fill-parent'} name="Calendar Row" spacing={2}>
                  {
                    /*---- Render date cell ----*/
                    week.map((day, index) => {
                      const isToday = dayjs(day).isSame(dayjs(), 'day');
                      const isInThisMonth = day.getMonth() === dayjs(pivot).month();
                      const selected = dayjs(date).isSame(dayjs(day), 'day');

                      return (
                        <AutoLayout
                          name="Calendar Cell"
                          {...cell}
                          key={index}
                          onClick={() => {
                            setPivot(dayjs(day).toString());
                            setDate(dayjs(day).toString());
                            setOpen(false);
                          }}
                          fill={selected ? colors.blue[500] : undefined}
                          hoverStyle={{
                            fill: selected ? colors.blue[500] : colors.neutral[100],
                          }}
                        >
                          {isToday ? <Ellipse name="Today Indicator" {...indicator} /> : null}
                          <Text
                            {...digit}
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
          <SimpleGrid columns={3} width={'fill-parent'} height={207}>
            {...decade.map((y) => {
              const isCurrentYear = y === dayjs(date).year();

              return (
                <AutoLayout
                  width={'fill-parent'}
                  height={'fill-parent'}
                  onClick={() => {
                    setDate(dayjs(date).year(y).toString());
                    setPivot(dayjs(date).year(y).toString());
                    toggleView();
                  }}
                  verticalAlignItems="center"
                  horizontalAlignItems={'center'}
                >
                  <AutoLayout
                    fill={isCurrentYear ? colors.blue[500] : undefined}
                    cornerRadius={4}
                    padding={8}
                    hoverStyle={{
                      fill: isCurrentYear ? colors.blue[400] : colors.gray[100],
                    }}
                  >
                    <Text
                      fill={isCurrentYear ? colors.white : colors.neutral[900]}
                      fontSize={12}
                      key={y}
                    >
                      {y}
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
            width={'fill-parent'}
            height={'hug-contents'}
            horizontalAlignItems={'center'}
            spacing={8}
          >
            {...CALENDAR_MONTHS.map((month, index) => {
              const isCurrentMonth = index === dayjs(date).month();
              return (
                <Button
                  variant={isCurrentMonth ? 'filled' : 'ghost'}
                  colorScheme={isCurrentMonth ? 'blue' : undefined}
                  size="sm"
                  key={month}
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

  return (
    <AutoLayout
      {...field}
      {...input}
      name="DatePicker"
      onClick={open ? undefined : toggleCalendar}
      spacing={4}
    >
      <IconCalendar width={16} height={16} color={colors.neutral[500]} />
      <Text fontSize={12}>{dayjs(date).format('YYYY-MM-DD')}</Text>

      {open ? (
        <AutoLayout name="DatePicker Calendar" {...calendar}>
          <Controls pivot={pivot} setPivot={setPivot} view={view} setView={setView} />
          {/* {renderControls(view)} */}
          {renderView(view)}
        </AutoLayout>
      ) : null}
    </AutoLayout>
  );
}
