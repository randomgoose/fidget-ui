import { AvatarProps } from './interface';

export const getAvatarStyles = ({
  size,
}: Pick<AvatarProps, 'size'>): {
  avatar: Omit<AutoLayoutProps, 'width' | 'height'> & { width: number; height: number };
} => {
  let width: number;
  let height: number;
  let padding: AutoLayoutProps['padding'];

  if (typeof size === 'number') {
    width = size;
    height = size;
  } else if (typeof size === 'string') {
    switch (size) {
      case 'xs':
        width = height = 24;
        padding = 3;
        break;
      case 'sm':
        width = height = 28;
        padding = 4;
        break;
      case 'md':
        width = height = 32;
        padding = 5;
        break;
      case 'lg':
        width = height = 40;
        padding = 6;
        break;
      case 'xl':
        width = height = 48;
        padding = 7;
        break;
      default:
        width = height = 24;
        padding = 3;
        break;
    }
  } else {
    width = 24;
    height = 24;
  }

  return {
    avatar: {
      width,
      height,
      padding,
      cornerRadius: 100,
      stroke: { r: 0, g: 0, b: 0, a: 0.04 },
    },
  };
};
