import { colors, shadows } from '../styles';
import { DatePickerProps } from './interface';

export const getDatePickerStyles = (
  { placement }: { placement: DatePickerProps['placement'] } = { placement: 'top' }
): {
  container: AutoLayoutProps;
  calendar: AutoLayoutProps;
  controls: AutoLayoutProps;
  weekday: AutoLayoutProps;
  cell: AutoLayoutProps;
  digit: TextProps;
  indicator: EllipseProps;
} => {
  const horizontalAlignItems: AutoLayoutProps['horizontalAlignItems'] = placement?.endsWith('start')
    ? 'start'
    : placement?.endsWith('end')
    ? 'end'
    : 'center';
  const y: AutoLayoutProps['y'] = placement?.startsWith('top')
    ? { type: 'bottom', offset: 0 }
    : { type: 'top', offset: 0 };
  const x: AutoLayoutProps['x'] = placement?.endsWith('start')
    ? { type: 'left', offset: 0 }
    : placement?.endsWith('end')
    ? { type: 'right', offset: 0 }
    : { type: 'center', offset: 0 };

  return {
    container: {
      horizontalAlignItems,
    },
    calendar: {
      width: 260,
      effect: shadows['xl'],
      positioning: 'absolute',
      x,
      y,
      direction: 'vertical',
      fill: colors.white,
      cornerRadius: 12,
      padding: { vertical: 12, horizontal: 12 },
      horizontalAlignItems: 'center',
      stroke: colors.neutral[200],
    },
    controls: {
      width: 'fill-parent',
      padding: { bottom: 12 },
      height: 'hug-contents',
      verticalAlignItems: 'center',
    },
    weekday: {
      width: 'fill-parent',
      height: 24,
      horizontalAlignItems: 'center',
      verticalAlignItems: 'center',
    },
    cell: {
      width: 'fill-parent',
      height: 32,
      verticalAlignItems: 'center',
      horizontalAlignItems: 'center',
      cornerRadius: 6,
      hoverStyle: {
        fill: colors.neutral[100],
      },
    },
    digit: {
      fontSize: 12,
    },
    indicator: {
      width: 4,
      height: 4,
      fill: colors.blue[500],
      positioning: 'absolute',
      x: { type: 'center', offset: 0 },
      y: { type: 'bottom', offset: 3 },
    },
  };
};
