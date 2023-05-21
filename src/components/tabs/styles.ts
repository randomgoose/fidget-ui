import { colors, isNeutralColor } from '../../styles';
import { TabsProps } from './interface';
import chroma from 'chroma-js';

export const getTabsStyles = ({
  variant,
  isFitted,
  colorScheme = 'neutral',
  width = 'fill-parent',
}: Pick<TabsProps, 'variant' | 'isFitted' | 'colorScheme' | 'width'>): {
  container: AutoLayoutProps;
  tab: AutoLayoutProps;
  activeTab: AutoLayoutProps;
  activeTabLabel: TextProps;
  tabList: AutoLayoutProps;
  tabLabel: TextProps;
  tabPanels: AutoLayoutProps;
  tabPanel: AutoLayoutProps;
} => {
  /* ---- Tabs Container ---- */
  let bg: AutoLayoutProps['fill'];
  let activeBg: AutoLayoutProps['fill'];

  /* ---- Tabs List ---- */
  let tabListStroke: AutoLayoutProps['effect'];
  let tabListPadding: AutoLayoutProps['padding'];

  /* ---- Tab ---- */
  let stroke: AutoLayoutProps['stroke'];
  let strokeAlign: AutoLayoutProps['strokeAlign'] = 'inside';
  let border: AutoLayoutProps['effect'];
  let cornerRadius: AutoLayoutProps['cornerRadius'] = 0;
  let spacing: AutoLayoutProps['spacing'];
  let labelFill: TextProps['fill'];
  let activeLabelFill: TextProps['fill'];

  /* ---- Tab Panel ---- */
  let tabPanelWidth: AutoLayoutProps['width'];

  const activeColor = isNeutralColor(colorScheme)
    ? colors[colorScheme][900]
    : colors[colorScheme][500];
  const [r, g, b, a] = chroma(activeColor).rgba();

  switch (width) {
    case 'fill-parent':
      tabPanelWidth = 'fill-parent';
      break;
    case 'hug-contents':
      tabPanelWidth = 'hug-contents';
      break;
    default:
      tabPanelWidth = 'hug-contents';
      break;
  }

  switch (variant) {
    case 'enclosed':
      bg = undefined;
      activeBg = colors.white;
      stroke = colors.neutral[200];
      strokeAlign = 'outside';
      cornerRadius = { topLeft: 6, topRight: 6, bottomLeft: 0, bottomRight: 0 };
      border = [
        {
          type: 'inner-shadow',
          offset: { x: 0, y: -1 },
          blur: 0,
          spread: -1,
          color: { r: 1, g: 1, b: 1, a: 1 },
        },
      ];
      spacing = 1;
      tabListPadding = { vertical: 1, horizontal: 1, bottom: 0 };
      labelFill = colors.neutral[500];
      activeLabelFill = isNeutralColor(colorScheme)
        ? colors[colorScheme][900]
        : colors[colorScheme][500];
      break;
    case 'soft-rounded':
      bg = colors.white;
      cornerRadius = 100;
      activeBg = isNeutralColor(colorScheme) ? colors[colorScheme][900] : colors[colorScheme][200];
      spacing = 1;
      tabListPadding = { vertical: 1, horizontal: 1, bottom: 0 };
      labelFill = colors.neutral[700];
      activeLabelFill = colors[colorScheme][900];
      break;
    case 'solid-rounded':
      bg = colors.white;
      cornerRadius = 100;
      activeBg = isNeutralColor(colorScheme) ? colors[colorScheme][900] : colors[colorScheme][500];
      spacing = 1;
      tabListPadding = { vertical: 1, horizontal: 1, bottom: 0 };
      labelFill = colors.neutral[700];
      activeLabelFill = colors.white;
      break;
    default:
      bg = colors.white;
      activeBg = colors.white;
      activeLabelFill = isNeutralColor(colorScheme)
        ? colors[colorScheme][900]
        : colors[colorScheme][500];
      // eslint-disable-next-line
      tabListStroke = [
        {
          type: 'drop-shadow',
          offset: { x: 0, y: 1 },
          blur: 0,
          color: { r: 0.8980392157, g: 0.8980392157, b: 0.8980392157, a: 1 },
        },
      ];
      border = [
        {
          type: 'drop-shadow',
          offset: { x: 0, y: 1 },
          blur: 0,
          color: { r: r / 255, g: g / 255, b: b / 255, a: a },
        },
      ];
      spacing = 0;
      tabListPadding = 0;
      labelFill = colors['neutral'][500];
      break;
  }

  const baseTab: AutoLayoutProps = {
    width: isFitted ? 'fill-parent' : 'hug-contents',
    horizontalAlignItems: 'center',
    padding: { vertical: 5, horizontal: 12 },
    cornerRadius,
    strokeAlign,
  };

  const baseTabLabel: TextProps = {
    fontSize: 14,
    lineHeight: 22,
  };

  return {
    container: {
      width,
      direction: 'vertical',
    },
    tabList: {
      width: 'fill-parent',
      overflow: 'visible',
      // effect: tabListStroke,
      spacing,
      padding: tabListPadding,
    },
    activeTab: {
      ...baseTab,
      fill: activeBg,
      overflow: 'visible',
      effect: border,
      stroke,
    },
    tab: {
      ...baseTab,
      fill: bg,
    },
    tabLabel: {
      ...baseTabLabel,
      fill: labelFill,
    },
    activeTabLabel: {
      ...baseTabLabel,
      fill: activeLabelFill,
    },
    tabPanels: {
      width,
      padding: 12,
    },
    tabPanel: {
      width: tabPanelWidth,
    },
  };
};
