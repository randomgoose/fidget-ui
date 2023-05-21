import { colors } from '../../styles';
import { NoticeProps } from './interface';

export const getNoticeStyles = ({
  variant,
  status,
}: Pick<NoticeProps, 'status' | 'variant'>): {
  container: AutoLayoutProps;
  title: TextProps;
  description: TextProps;
  icon: Omit<SVGProps, 'src'>;
} => {
  /* ---- Container ---- */
  let fill: AutoLayoutProps['fill'];

  /* ---- Text --- */
  let color: TextProps['fill'];

  /* ---- Icon ---- */
  let iconColor: string;

  switch (status) {
    case 'error':
      if (variant === 'solid') {
        fill = colors.red[600];
        color = colors.white;
        iconColor = colors.white;
      } else {
        fill = colors.red[50];
        color = colors.red[900];
        iconColor = colors.red[500];
      }
      break;
    case 'success':
      if (variant === 'solid') {
        fill = colors.green[600];
        color = colors.white;
        iconColor = colors.white;
      } else {
        fill = colors.green[50];
        color = colors.green[900];
        iconColor = colors.green[500];
      }
      break;
    case 'warning':
      if (variant === 'solid') {
        fill = colors.orange[600];
        color = colors.white;
        iconColor = colors.white;
      } else {
        fill = colors.orange[50];
        color = colors.orange[900];
        iconColor = colors.orange[500];
      }
      break;
    default:
      if (variant === 'solid') {
        fill = colors.blue[600];
        color = colors.white;
        iconColor = colors.white;
      } else {
        fill = colors.blue[50];
        color = colors.blue[900];
        iconColor = colors.blue[500];
      }
      break;
  }

  return {
    container: {
      width: 'fill-parent',
      fill,
      padding: { vertical: 8, horizontal: 16 },
      cornerRadius: 6,
      spacing: 4,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 12,
      lineHeight: 20,
      fill: color,
      width: 'fill-parent',
    },
    description: {
      fontSize: 12,
      lineHeight: 20,
      fill: color,
      width: 'fill-parent',
    },
    icon: {
      fill: iconColor,
      stroke: iconColor,
      width: 16,
      height: 16,
    },
  };
};
