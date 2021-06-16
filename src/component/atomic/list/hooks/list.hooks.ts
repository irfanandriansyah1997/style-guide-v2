import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  generateClassnameContainer,
  generateStyleItem,
  transformChildrenToListContent
} from '@/atomic/list/helper/list.helper';
import { IListContent, IListHooks, IListStyle } from '@/atomic/list/interface';
import { shallowEquals } from '@/helper/component.helper';

/**
 * Use Breadcrumb Content
 * @description generate label on pagination component
 * @param {ReactNode} children - children props
 * @returns {IReactPaginationContent}
 */
export const useList = (
  children: ReactNode,
  style: Partial<IListStyle>
): IListHooks => {
  const [content, setContent] = useState<IListContent[]>(
    transformChildrenToListContent(children)
  );
  const [styleItem, setStyleItem] = useState<CSSProperties>(
    generateStyleItem(style)
  );
  const [classnameContainer, setClassnameContainer] = useState<string>(
    generateClassnameContainer(style)
  );

  const onChangeStyleItem = useCallback(
    (value: CSSProperties) => {
      setStyleItem(() => {
        if (!shallowEquals(styleItem, value)) return value;

        return styleItem;
      });
    },
    [setStyleItem, styleItem]
  );

  const onChangeStyleContainer = useCallback(
    (value: string) => {
      setClassnameContainer((): string => {
        if (!shallowEquals(classnameContainer, value)) return value;

        return classnameContainer;
      });
    },
    [setClassnameContainer, classnameContainer]
  );

  const onChangeContent = useCallback(
    (value: IListContent[]) => {
      setContent(() => {
        const filteredValue = value.map(({ payload }) => payload);
        const filteredContent = content.map(({ payload }) => payload);
        const mustReRender = filteredValue.filter(
          (key, index) => !shallowEquals(key, filteredContent[index])
        );

        if (mustReRender.length > 0) return value;

        return content;
      });
    },
    [setContent, content]
  );

  useEffect(() => {
    onChangeContent(transformChildrenToListContent(children));
  }, [children, onChangeContent]);

  useEffect(() => {
    onChangeStyleItem(generateStyleItem(style));
    onChangeStyleContainer(generateClassnameContainer(style));
  }, [style, setStyleItem, onChangeStyleItem, onChangeStyleContainer]);

  return useMemo(
    () => ({
      classnameContainer,
      item: content,
      styleItem
    }),
    [content, styleItem, classnameContainer]
  );
};
