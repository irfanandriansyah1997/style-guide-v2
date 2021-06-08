import {
  IPaginationClassnameList,
  IReactPaginationClassnameList
} from '@/molecules/pagination/interface';

interface IPaginationConstant {
  cssClassName?: string;
  paginationProps: keyof IPaginationClassnameList;
  reactPaginationProps: keyof IReactPaginationClassnameList;
}

export const PAGINATION_CLASSNAME_LIST: IPaginationConstant[] = [
  {
    paginationProps: `break`,
    reactPaginationProps: `breakClassName`
  },
  {
    paginationProps: `breakLink`,
    reactPaginationProps: `breakLinkClassName`
  },
  {
    paginationProps: `container`,
    reactPaginationProps: `containerClassName`
  },
  {
    paginationProps: `page`,
    reactPaginationProps: `pageClassName`
  },
  {
    paginationProps: `pageLink`,
    reactPaginationProps: `pageLinkClassName`
  },
  {
    paginationProps: `active`,
    reactPaginationProps: `activeClassName`
  },
  {
    paginationProps: `activeLink`,
    reactPaginationProps: `activeLinkClassName`
  },
  {
    paginationProps: `previous`,
    reactPaginationProps: `previousClassName`
  },
  {
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
