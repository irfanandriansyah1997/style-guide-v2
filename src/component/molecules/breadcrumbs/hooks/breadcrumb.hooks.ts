import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import { shallowEquals } from '@/helper/component.helper';
import {
  generateStyleItem,
  generateStyleWrapper,
  transformChildrenToBreadcrumbContent
} from '@/molecules/breadcrumbs/helper/breadcrumb.helper';
import {
  IBreadcrumbContent,
  IBreadcrumbContentType,
  IBreadcrumbHooks,
  IBreadcrumbStyle
} from '@/molecules/breadcrumbs/interface';

/**
 * Use Breadcrumb Content
 * @description generate label on pagination component
 * @param {ReactNode} children - children props
 * @returns {IReactPaginationContent}
 */
export const useBreadcrumb = (
  children: ReactNode,
  style: Partial<IBreadcrumbStyle> | undefined,
  separator: string | ReactNode
): IBreadcrumbHooks => {
  const [content, setContent] = useState<IBreadcrumbContent[]>(
    transformChildrenToBreadcrumbContent(children, separator)
  );
  const [styleItem, setStyleItem] = useState<CSSProperties>(
    generateStyleItem(style)
  );
  const [styleWrapper, setStyleWrapper] = useState<CSSProperties>(
    generateStyleWrapper(style)
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

  const onChangeStyleWrapper = useCallback(
    (value: CSSProperties) => {
      setStyleWrapper(() => {
        if (!shallowEquals(styleWrapper, value)) return value;

        return styleWrapper;
      });
    },
    [setStyleWrapper, styleWrapper]
  );

  const onChangeContent = useCallback(
    (value: IBreadcrumbContent[]) => {
      setContent(() => {
        const filteredValue = value.filter(
          ({ type }) => type === IBreadcrumbContentType.item
        );
        const filteredContent = content.filter(
          ({ type }) => type === IBreadcrumbContentType.item
        );
        const mustReRender = filteredValue.filter(
          ({ payload }, index) =>
            !shallowEquals(payload, filteredContent[index].payload)
        );

        if (mustReRender.length > 0) return value;

        return content;
      });
    },
    [setContent, content]
  );

  useEffect(() => {
    onChangeContent(transformChildrenToBreadcrumbContent(children, separator));
  }, [children, separator, onChangeContent]);

  useEffect(() => {
    onChangeStyleItem(generateStyleItem(style));
    onChangeStyleWrapper(generateStyleWrapper(style));
  }, [onChangeStyleItem, onChangeStyleWrapper, style]);

  return useMemo(
    () => ({
      item: content,
      styleItem,
      styleWrapper
    }),
    [content, styleItem, styleWrapper]
  );
};
