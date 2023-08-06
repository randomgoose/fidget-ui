import { ComponentStyle, ElementProps } from '../types';

export type CardAnatomy = {
  container: AutoLayoutProps;
  header: ElementProps;
  body: ElementProps;
  footer: ElementProps;
};

export interface CardProps extends AutoLayoutProps {
  style?: ComponentStyle<CardAnatomy>;
}

export type CardHeaderProps = ElementProps;

export type CardBodyProps = ElementProps;

export type CardFooterProps = ElementProps;
