import { colors, shadows } from '../styles';
import { MenuAnatomy, MenuItemProps, MenuProps } from './interface';

export const getMenuStyles = ({
  disabled,
  placement = 'bottom',
}: Pick<MenuItemProps, 'disabled'> & Pick<MenuProps, 'placement'>): MenuAnatomy => {
  /* ---- Locator ---- */
  // const horizontalAlignItems: AutoLayoutProps['horizontalAlignItems'] = placement.endsWith('start')
  //   ? 'start'
  //   : placement.endsWith('end')
  //     ? 'end'
  //     : 'center';
  // let x: AutoLayoutProps['x'];
  // let y: AutoLayoutProps['y'];

  // switch (placement) {
  //   case 'bottom-start':
  //     x = { type: 'left', offset: 0 };

  //   case 'top-start':
  //     y = { type: 'top', offset: 0 };
  //     x = { type: 'left', offset: 0 };
  //     break;
  //   case 'top-end':
  //     y = { type: 'top', offset: 0 };
  //     x = { type: 'right', offset: 0 };
  //     break;
  // }

  const horizontalAlignItems: AutoLayoutProps['horizontalAlignItems'] = placement?.endsWith('start')
    ? 'start'
    : placement?.endsWith('end')
    ? 'end'
    : 'center';
  const y: AutoLayoutProps['y'] = placement?.startsWith('top')
    ? { type: 'bottom', offset: 4 }
    : { type: 'top', offset: 4 };
  const x: AutoLayoutProps['x'] = placement?.endsWith('start')
    ? { type: 'left', offset: 0 }
    : placement?.endsWith('end')
    ? { type: 'right', offset: 0 }
    : { type: 'center', offset: 0 };

  return {
    container: {
      horizontalAlignItems,
    },
    list: {
      fill: colors.white,
      padding: 4,
      stroke: colors.neutral[100],
      cornerRadius: 8,
      effect: [...shadows.lg],
      direction: 'vertical',
      positioning: 'absolute',
      y,
      x,
      width: 240,
    },
    item: {
      width: 'fill-parent',
      overflow: 'visible',
      fontSize: 14,
      lineHeight: 22,
      color: colors.neutral[700],
      cornerRadius: 4,
      padding: { horizontal: 8, vertical: 5 },
      hoverStyle: disabled
        ? undefined
        : {
            fill: colors.neutral[100],
          },
      verticalAlignItems: 'center',
      spacing: 6,
      opacity: disabled ? 0.3 : 1,
    },
    icon: {
      width: 14,
      height: 14,
      fill: colors.neutral[900],
      stroke: colors.neutral[900],
    },
    chevron: {
      width: 12,
      height: 12,
      color: colors.neutral[500],
    },
    locator: {
      overflow: 'scroll',
      height: 1,
      width: 1,
    },
    trigger: {},
    divider: {},
  };
};

// export const getMenuItemStyles
