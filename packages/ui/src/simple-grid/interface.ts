/**
 * @title Simple Grid
 */
export interface SimpleGridProps extends AutoLayoutProps {
  /**
   * @en The number of columnes in the grid.
   */
  columns?: number;
  /**
   * @en The spacing between grid cells.
   */
  spacing?: number;
  /**
   * @en The spacing between grid cells in the x-axis.
   */
  spacingX?: number;
  /**
   * @en The spacing between grid cells in the y-axis.
   */
  spacingY?: number;
}
