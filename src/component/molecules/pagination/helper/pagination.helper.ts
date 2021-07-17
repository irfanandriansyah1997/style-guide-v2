import {
  objToString,
  verifiedIsNotEmpty,
  verifiedIsNotFalse,
  verifiedKeyIsExist
} from '@99/helper';
import { ReactElement, ReactNode } from 'react';

import {
  checkClassnameAvailable,
  transformChildrenToArray
} from '@/helper/component.helper';
import { PartialNull } from '@/interface/general';
import { PAGINATION_CLASSNAME_LIST } from '@/molecules/pagination/constant';
import {
  IPaginationClassnameList,
  IPaginationItemProps,
  IReactPaginationClassnameList,
  IReactPaginationContent
} from '@/molecules/pagination/interface';
import PaginationItem from '@/molecules/pagination/section/pagination-item.component';

/**
 * Generate ClassName Pagination
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export const generateClassnamePagination = (
  className: PartialNull<IPaginationClassnameList>
): IReactPaginationClassnameList =>
  PAGINATION_CLASSNAME_LIST.map(
    ({ cssClassName, paginationProps, reactPaginationProps }) => {
      const isClassNameEmpty =
        verifiedIsNotEmpty(className) &&
        checkClassnameAvailable<IPaginationClassnameList>(
          className,
          paginationProps
        );

      return {
        [reactPaginationProps]: objToString({
          [`${cssClassName}`]: verifiedIsNotEmpty(cssClassName),
          [`${(className || {})[paginationProps]}`]: verifiedIsNotFalse(
            isClassNameEmpty
          )
        })
      };
    }
  ).reduce(
    (prev, current) => ({
      ...prev,
      ...current
    }),
    {}
  );

/**
 * Transform Children To React Pagination
 * @param {ReactNode} children - children Props
 * @returns {IReactPaginationContent}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.06
 */
export const transformChildrenToPaginationContent = (
  children: ReactNode
): IReactPaginationContent =>
  transformChildrenToArray<IPaginationItemProps>(children)((child) => {
    if (
      verifiedIsNotEmpty(child) &&
      verifiedKeyIsExist((child as unknown) as Record<string, any>, `type`)
    ) {
      const { props, type } = child as ReactElement;

      if ([PaginationItem].includes(type as any)) {
        return props;
      }
    }

    return undefined;
  }).reduce((prev, { children, type }): IReactPaginationContent => {
    switch (type) {
      case `break-label`:
        return {
          ...prev,
          breakLabel: children
        };

      case `next-label`:
        return {
          ...prev,
          nextLabel: children
        };

      case `previous-label`:
        return {
          ...prev,
          previousLabel: children
        };

      default:
        return {
          ...prev
        };
    }
  }, {});
