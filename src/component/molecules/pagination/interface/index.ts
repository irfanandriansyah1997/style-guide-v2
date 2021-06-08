import { FC, ReactNode } from 'react';
import { ReactPaginateProps } from 'react-paginate';

import { IEventComponent } from '@/interface/general/event.interface';

/**
 * Event On Page Change
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnPageChange = IEventComponent<
  'on-page-change',
  {
    page: number;
  }
>;

/**
 * All Class Name Each Tag on Pagination Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface IPaginationClassnameList {
  active: string;
  activeLink: string;
  break: string;
  breakLink: string;
  container: string;
  disabled: string;
  next: string;
  nextLink: string;
  page: string;
  pageLink: string;
  previous: string;
  previousLink: string;
}

/**
 * Pagination Export Default
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IPaginationExportDefault = FC<IPaginationProps> & {
  Item: FC<IPaginationItemProps>;
};

/**
 * Pagination Control Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export interface IPaginationItemProps {
  children: ReactNode;
  type: IPaginationItemType;
}

export type IPaginationItemType =
  | 'next-label'
  | 'break-label'
  | 'previous-label';

/**
 * Pagination Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.06.08
 */
export interface IPaginationProps {
  className?: Partial<IPaginationClassnameList>;
  disableInitialCallback?: boolean; // default: true cause, prevent invoke callback on did mounting
  marginDisplayed?: number;
  on?: (param: IEventOnPageChange) => void;
  page: number;
  pageRange: number;
  totalPage: number;
}

/**
 * React Pagination Classname List
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IReactPaginationClassnameList = Partial<
  Pick<
    ReactPaginateProps,
    | 'breakClassName'
    | 'breakLinkClassName'
    | 'containerClassName'
    | 'pageClassName'
    | 'pageLinkClassName'
    | 'activeClassName'
    | 'activeLinkClassName'
    | 'previousClassName'
    | 'nextClassName'
    | 'previousLinkClassName'
    | 'nextLinkClassName'
    | 'disabledClassName'
  >
>;

/**
 * React Pagination Classname List
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IReactPaginationContent = Partial<
  Pick<ReactPaginateProps, 'breakLabel' | 'nextLabel' | 'previousLabel'>
>;
