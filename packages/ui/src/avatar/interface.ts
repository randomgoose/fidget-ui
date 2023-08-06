import type { ComponentStyle, ElementProps } from '../types';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarAnatomy {
  avatar: Omit<ElementProps, 'width' | 'height'> & { width: number; height: number };
  avatarGroup: AutoLayoutProps;
  excessLabel: ElementProps;
}

export interface AvatarProps extends AutoLayoutProps {
  style?: ComponentStyle<AvatarAnatomy['avatar'], AvatarSize>;
  displayName?: string;
  src?: string;
  size?: AvatarSize | number;
  fill?: AutoLayoutProps['fill'];
}

export interface AvatarGroupProps extends AutoLayoutProps {
  style?: ComponentStyle<AvatarAnatomy['avatarGroup']>;
  size?: AvatarSize | number;
  max?: number;
  children?: FigmaDeclarativeNode;
  stacked?: boolean;
}
