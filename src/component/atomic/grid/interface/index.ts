import { Property } from 'csstype';
import { CSSProperties, FC, ReactNode } from 'react';

export interface IBasicSizeGrid {
  // between 992px and 1200px
  lg?: IGridSize;
  // between 768px and 992px
  md?: IGridSize;
  // between 576px and 768px
  sm?: IGridSize;
  // above 1200px
  xl?: IGridSize;
  // under 576px
  xs?: IGridSize;
}

/**
 * Grid Container Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export interface IGridContainerProps {
  children: ReactNode;
  className?: string;
  size?: IGridContainerSize;
}

export type IGridContainerSize = 'full-width' | 'normal' | 'unset';

/**
 * Grid Default Export Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export type IGridDefaultExport = FC<IGridContainerProps> & {
  Item: FC<IGridItemExposedProps>;
  Rows: FC<IGridRowProps>;
};

/**
 * Grid Item Exposed Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export type IGridItemExposedProps = Omit<IGridItemProps, 'spaceEachItem'>;

/**
 * Grid Item Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export interface IGridItemHooks {
  className: string;
  style: CSSProperties;
}

/**
 * Grid Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export interface IGridItemProps extends Partial<IBasicSizeGrid> {
  className?: string;
  order?: number;
  size: IGridSize;
  spaceEachItem?: number | Partial<IGridSpaceItem>;
}

/**
 * Grid Row Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export interface IGridRowHooks {
  className: string;
  style: CSSProperties;
}

/**
 * Grid Item Row Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export interface IGridRowProps extends IGridRowStyling {
  className?: string;
}

/**
 * Grid Row Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export interface IGridRowStyling {
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  spaceEachItem?: number | Partial<IGridSpaceItem>;
}

export type IGridSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'auto';

/**
 * Grid Space Item
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export interface IGridSpaceItem {
  horizontal: number;
  vertical: number;
}
