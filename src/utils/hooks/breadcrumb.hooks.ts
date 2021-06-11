import { bulkVerifiedIsNotEmpty } from '@99/helper';
import { CSSProperties, ReactNode, useEffect, useState } from 'react';

import { transformChildrenToBreadcrumbContent } from '@/helper/breadcrumb.helper';
import {
  IBreadcrumbHooks,
  IBreadcrumbItemProps,
  IBreadcrumbStyle
} from '@/molecules/breadcrumbs/interface';

/**
 * Generate Style Item
 * @param {Partial<IBreadcrumbStyle> | undefined} style - style object props
 * @returns {CSSProperties}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
const generateStyleItem = (
  style: Partial<IBreadcrumbStyle> | undefined
): CSSProperties => ({
  color: bulkVerifiedIsNotEmpty([style, style?.textColor])
    ? style?.textColor
    : undefined,
  fontSize: bulkVerifiedIsNotEmpty([style, style?.fontSize])
    ? style?.fontSize
    : undefined,
  fontWeight: bulkVerifiedIsNotEmpty([style, style?.fontWeight])
    ? style?.fontWeight
    : undefined
});

/**
 * Generate Style Wrapper
 * @param {Partial<IBreadcrumbStyle> | undefined} style - style object props
 * @returns {CSSProperties}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
const generateStyleWrapper = (
  style: Partial<IBreadcrumbStyle> | undefined
): CSSProperties => ({
  backgroundColor: bulkVerifiedIsNotEmpty([style, style?.backgroundColor])
    ? style?.backgroundColor
    : undefined
});

/**
 * Use Breadcrumb Content
 * @description generate label on pagination component
 * @param {ReactNode} children - children props
 * @returns {IReactPaginationContent}
 */
export const useBreadcrumb = (
  children: ReactNode,
  style: Partial<IBreadcrumbStyle> | undefined
): IBreadcrumbHooks => {
  const [content, setContent] = useState<IBreadcrumbItemProps[]>(
    transformChildrenToBreadcrumbContent(children)
  );
  const [styleItem, setStyleItem] = useState<CSSProperties>(
    generateStyleItem(style)
  );
  const [styleWrapper, setStyleWrapper] = useState<CSSProperties>(
    generateStyleWrapper(style)
  );

  useEffect(() => {
    setContent(transformChildrenToBreadcrumbContent(children));
  }, [children]);

  useEffect(() => {
    setStyleItem(generateStyleItem(style));
    setStyleWrapper(generateStyleWrapper(style));
  }, [style]);

  return {
    item: content,
    styleItem,
    styleWrapper
  };
};
