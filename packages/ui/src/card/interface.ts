import { ComponentStyle, ElementProps } from '../types';

export type CardAnatomy = {
  container: AutoLayoutProps;
  header: ElementProps;
  body: ElementProps;
  footer: ElementProps;
};

/**
 * @title Card
 */
export interface CardProps extends AutoLayoutProps {
  /**
   * @en The style object for all card components.
   */
  style?: ComponentStyle<CardAnatomy>;
}

export type CardHeaderProps = ElementProps;

export type CardBodyProps = ElementProps;

export type CardFooterProps = ElementProps;
