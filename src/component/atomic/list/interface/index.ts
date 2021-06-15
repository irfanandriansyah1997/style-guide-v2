import { CSSProperties, FC, ReactNode } from 'react';

/**
 * All Class Name Each Tag on List Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.14
 */
export interface IListClassnameList {
  item: string;
  wrapper: string;
}

type IListContentGenerator<P, T> = {
  key: string;
  payload: P;
  type: T;
};

/**
 * List Content Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.14
 */
export type IListContent = IListContentGenerator<
  IListItemProps,
  IListContentType.item
>;

export enum IListContentType {
  item = `Item`,
  separator = `Separator`
}

/**
 * List Export Default Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export type IListExportDefault = FC<IListProps> & {
  Item: FC<IListItemProps>;
};

/**
 * List Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.14
 */
export interface IListHooks {
  classnameContainer: string;
  item: IListContent[];
  styleItem?: CSSProperties;
}

/**
 * List Item Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.14
 */
export interface IListItemProps {
  children: ReactNode;
}

export type IListOrientation = 'vertical' | 'horizontal';

export type IListOutline = 'dash' | 'solid';

/**
 * List Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.14
 */
export interface IListProps extends Partial<IListStyle> {
  children: ReactNode;
  className?: Partial<IListClassnameList>;
}

/**
 * List Style Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.14
 */
export interface IListStyle {
  dividerColor: string;
  orientation: IListOrientation;
  outline: IListOutline;
  space: number;
}
