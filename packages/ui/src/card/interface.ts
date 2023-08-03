import { ComponentStyle, ElementProps } from '../types';

export interface CardProps extends AutoLayoutProps {
  style?: ComponentStyle<string, string, any>;
}

export interface CardHeaderProps extends ElementProps {
  style?: ComponentStyle<string, string, WidgetJSX.AutoLayoutProps>;
}

export interface CardBodyProps extends ElementProps {
  style?: ComponentStyle<string, string, WidgetJSX.AutoLayoutProps>;
}

export interface CardFooterProps extends ElementProps {
  style?: ComponentStyle<string, string, WidgetJSX.AutoLayoutProps>;
}

export type CardStyle = {
  container: CardProps;
  header: CardHeaderProps;
  body: CardBodyProps;
  footer: CardFooterProps;
};
