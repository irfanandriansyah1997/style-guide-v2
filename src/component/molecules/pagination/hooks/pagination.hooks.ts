import { ReactNode, useEffect, useState } from 'react';

import {
  generateClassnamePagination,
  transformChildrenToPaginationContent
} from '@/helper/pagination.helper';
import {
  IPaginationClassnameList,
  IReactPaginationClassnameList,
  IReactPaginationContent
} from '@/molecules/pagination/interface';

/**
 * Use Pagination Class Name
 * @param {Partial<IPaginationClassnameList> | undefined} classNameList - classname list on pagination component
 * @returns {IReactPaginationClassnameList}
 */
export const usePaginationClassName = (
  classNameList: Partial<IPaginationClassnameList> | undefined
): IReactPaginationClassnameList => {
  const [className, setClassName] = useState<IReactPaginationClassnameList>(
    generateClassnamePagination(classNameList)
  );

  useEffect(() => {
    setClassName(generateClassnamePagination(classNameList));
  }, [classNameList]);

  return className;
};

/**
 * Use Pagination Content
 * @description generate label on pagination component
 * @param {ReactNode} children - children props
 * @returns {IReactPaginationContent}
 */
export const usePaginationContent = (
  children: ReactNode
): IReactPaginationContent => {
  const [content, setContent] = useState<IReactPaginationContent>(
    transformChildrenToPaginationContent(children)
  );

  useEffect(() => {
    setContent(transformChildrenToPaginationContent(children));
  }, [children]);

  return content;
};
