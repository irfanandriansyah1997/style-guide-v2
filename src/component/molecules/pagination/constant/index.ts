import { objToString, verifiedIsNotEmpty } from '@99/helper';

import {
  IPaginationClassnameList,
  IReactPaginationClassnameList
} from '@/molecules/pagination/interface';
import styles from '@/molecules/pagination/style/style.module.scss';

interface IPaginationConstant {
  cssClassName?: string;
  paginationProps: keyof IPaginationClassnameList;
  reactPaginationProps: keyof IReactPaginationClassnameList;
}

export const PAGINATION_CLASSNAME_LIST: IPaginationConstant[] = [
  {
    cssClassName: styles[`m-paginate__break`],
    paginationProps: `break`,
    reactPaginationProps: `breakClassName`
  },
  {
    paginationProps: `breakLink`,
    reactPaginationProps: `breakLinkClassName`
  },
  {
    cssClassName: `flex`,
    paginationProps: `container`,
    reactPaginationProps: `containerClassName`
  },
  {
    cssClassName: objToString({
      [styles[`m-paginate__item`]]: verifiedIsNotEmpty(
        styles[`m-paginate__item`]
      ),
      flex: true
    }),
    paginationProps: `page`,
    reactPaginationProps: `pageClassName`
  },
  {
    paginationProps: `pageLink`,
    reactPaginationProps: `pageLinkClassName`
  },
  {
    cssClassName: objToString({
      [styles[`m-paginate__item--active`]]: verifiedIsNotEmpty(
        styles[`m-paginate__item--active`]
      ),
      flex: true
    }),
    paginationProps: `active`,
    reactPaginationProps: `activeClassName`
  },
  {
    cssClassName: objToString({
      [styles[`m-paginate__link--active`]]: verifiedIsNotEmpty(
        styles[`m-paginate__link--active`]
      )
    }),
    paginationProps: `activeLink`,
    reactPaginationProps: `activeLinkClassName`
  },
  {
    cssClassName: objToString({
      [styles[`m-paginate__item--prev`]]: verifiedIsNotEmpty(
        styles[`m-paginate__item--prev`]
      ),
      flex: true
    }),
    paginationProps: `previous`,
    reactPaginationProps: `previousClassName`
  },
  {
    cssClassName: objToString({
      [styles[`m-paginate__item--next`]]: verifiedIsNotEmpty(
        styles[`m-paginate__item--next`]
      ),
      flex: true
    }),
    paginationProps: `next`,
    reactPaginationProps: `nextClassName`
  },
  {
    paginationProps: `previousLink`,
    reactPaginationProps: `previousLinkClassName`
  },
  {
    paginationProps: `nextLink`,
    reactPaginationProps: `nextLinkClassName`
  },
  {
    paginationProps: `disabled`,
    reactPaginationProps: `disabledClassName`
  }
];
