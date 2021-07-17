import { ReactNode, useCallback, useEffect, useState } from 'react';

import { shallowEquals } from '@/helper/component.helper';
import { PartialNull } from '@/interface/general';
import {
  generateClassnamePagination,
  transformChildrenToPaginationContent
} from '@/molecules/pagination/helper/pagination.helper';
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
  classNameList: PartialNull<IPaginationClassnameList>
): IReactPaginationClassnameList => {
  const [className, setClassName] = useState<IReactPaginationClassnameList>(
    generateClassnamePagination(classNameList)
  );

  const onChangeClassName = useCallback(
    (value: IReactPaginationClassnameList) => {
      setClassName(() => {
        if (!shallowEquals(value, className)) return value;

        return className;
      });
    },
    [setClassName, className]
  );

  useEffect(() => {
    onChangeClassName(generateClassnamePagination(classNameList));
  }, [classNameList, onChangeClassName]);

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

  const onChangeContent = useCallback(
    (value: IReactPaginationContent) => {
      setContent(() => {
        if (!shallowEquals(value, content)) return value;

        return content;
      });
    },
    [setContent, content]
  );

  useEffect(() => {
    onChangeContent(transformChildrenToPaginationContent(children));
  }, [children, onChangeContent]);

  return content;
};
