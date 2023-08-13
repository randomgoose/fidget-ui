import type { ComponentStyle, ElementProps } from '../types';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarAnatomy {
  avatar: Omit<ElementProps, 'width' | 'height'> & { width: number; height: number };
  avatarGroup: AutoLayoutProps;
  excessLabel: ElementProps;
}

/**
 * @title Avatar
 */
export interface AvatarProps extends AutoLayoutProps {
  /**
   * @en The style object including all avatar parts.
   */
  style?: ComponentStyle<AvatarAnatomy['avatar'], AvatarSize>;
  /**
   * @en If set, the fallback avatar will show the initials of the given name.
   */
  displayName?: string;
  /**
   * @en The source of the avatar. It can be Image URL/DataURI or an ImagePaint.
   */
  src?: string;
  /**
   * @en The size of the avatar (T-shirt size).
   */
  size?: AvatarSize | number;
  /**
   * @en The background color of the fallback avatar.
   * @defaultValue 'md'
   */
  fill?: AutoLayoutProps['fill'];
}

export interface AvatarGroupProps extends AutoLayoutProps {
  /**
   * @en The style object including all avatar group parts.
   */
  style?: ComponentStyle<AvatarAnatomy['avatarGroup']>;
  /**
   * @en The size of all wrapper avatars.
   */
  size?: AvatarSize | number;
  /**
   * @en The maximum number of avatars shown.
   */
  max?: number;
  /**
   * @en Avatars in the group.
   */
  children?: FigmaDeclarativeNode;
  /**
   * @en If 'true', the avatar group has a negative spacing.
   */
  stacked?: boolean;
}
