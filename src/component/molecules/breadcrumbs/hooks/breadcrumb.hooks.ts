import { bulkVerifiedIsNotEmpty } from '@99/helper';
import { CSSProperties, ReactNode, useEffect, useState } from 'react';

import { transformChildrenToBreadcrumbContent } from '@/molecules/breadcrumbs/helper/breadcrumb.helper';
import {
  IBreadcrumbContent,
  IBreadcrumbHooks,
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
    ? (style as IBreadcrumbStyle).textColor
    : undefined,
  fontSize: bulkVerifiedIsNotEmpty([style, style?.fontSize])
    ? (style as IBreadcrumbStyle).fontSize
    : undefined,
  fontWeight: bulkVerifiedIsNotEmpty([style, style?.fontWeight])
    ? (style as IBreadcrumbStyle).fontWeight
    : undefined,
  margin: bulkVerifiedIsNotEmpty([style, style?.spaceEachItem])
    ? `0 ${(style as IBreadcrumbStyle).spaceEachItem / 2}px`
    : `0 10px`
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
    ? (style as IBreadcrumbStyle).backgroundColor
    : undefined,
  height: bulkVerifiedIsNotEmpty([style, style?.heightContainer])
    ? (style as IBreadcrumbStyle).heightContainer
    : undefined,
  padding: bulkVerifiedIsNotEmpty([style, style?.paddingContainer])
    ? `0 ${(style as IBreadcrumbStyle).paddingContainer}px`
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

  useEffect(() => {
    setContent(transformChildrenToBreadcrumbContent(children, separator));
  }, [children, separator]);

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
