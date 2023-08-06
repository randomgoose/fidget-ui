import { ComponentStyle } from '../types';

export type NoticeStatus = 'info' | 'error' | 'warning' | 'success';
export type NoticeVariant = 'subtle' | 'solid';

export interface NoticeAnatomy {
  container: AutoLayoutProps;
  title: TextProps;
  description: TextProps;
  icon: Omit<SVGProps, 'src'>;
}

export interface NoticeProps extends AutoLayoutProps {
  style?: ComponentStyle<NoticeAnatomy, string, NoticeVariant>;
  icon?: FigmaDeclarativeNode | boolean;
  title?: FigmaDeclarativeNode;
  description?: FigmaDeclarativeNode;
  status?: NoticeStatus;
  variant?: NoticeVariant;
  children?: FigmaDeclarativeNode;
}
