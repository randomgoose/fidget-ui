import { colors } from 'fidget-ui';

export const docStyle: AutoLayoutProps = {
  // verticalAlignItems: 'center',
  direction: 'vertical',
  spacing: 24,
  cornerRadius: 8,
  overflow: 'visible',
  width: 720,
  // height: 1280
};

export const codeStyle: SpanProps = {
  fontFamily: 'Fira Code',
  fill: colors.indigo[500],
};

export const paginationStyle: AutoLayoutProps = {
  direction: 'vertical',
  stroke: colors.neutral[200],
  height: 72,
  width: 'fill-parent',
  cornerRadius: 6,
  verticalAlignItems: 'center',
  padding: 16,
  hoverStyle: {
    stroke: colors.blue[500],
  },
};
