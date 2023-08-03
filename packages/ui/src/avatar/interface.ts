import { ComponentStyle, ElementProps } from '../types';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarStyle {
  avatar: Omit<ElementProps, 'width' | 'height'> & { width: number; height: number };
  avatarGroup: AutoLayoutProps;
  excessLabel: ElementProps;
}

export interface AvatarProps extends AutoLayoutProps {
  style?: ComponentStyle<AvatarSize, string, AvatarStyle['avatar']>;
  displayName?: string;
  src?: string;
  size?: AvatarSize;
  fill?: AutoLayoutProps['fill'];
}

export interface AvatarGroupProps extends AutoLayoutProps {
  style?: ComponentStyle<string, string, AvatarStyle['avatarGroup']>;
  size?: AvatarSize | number;
  max?: number;
  children?: FigmaDeclarativeNode;
  stacked?: boolean;
}
