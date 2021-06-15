import {
  bulkVerifiedIsNotEmpty,
  verifiedIsNotEmpty,
  verifiedKeyIsExist
} from '@99/helper';
import { CSSProperties, Key, ReactElement, ReactNode } from 'react';

import { transformChildrenToArray } from '@/helper/component.helper';
import {
  IBreadcrumbContent,
  IBreadcrumbContentType,
  IBreadcrumbItemProps,
  IBreadcrumbStyle
} from '@/molecules/breadcrumbs/interface';
import BreadcrumbItem from '@/molecules/breadcrumbs/section/breadcrumb-item.component';

/**
 * Generate Style Item
 * @param {Partial<IBreadcrumbStyle> | undefined} style - style object props
 * @returns {CSSProperties}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const generateStyleItem = (
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
    ? (style as IBreadcrumbStyle).spaceEachItem / 2
    : 5
});

/**
 * Generate Style Wrapper
 * @param {Partial<IBreadcrumbStyle> | undefined} style - style object props
 * @returns {CSSProperties}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const generateStyleWrapper = (
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
 * Transform Children To Breadcumbs Item
 * @param {ReactNode} children - children Props
 * @returns {IBreadcrumbItemProps}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const transformChildrenToBreadcrumbContent = (
  children: ReactNode,
  separator: ReactNode | string
): IBreadcrumbContent[] => {
  const content = transformChildrenToArray<{
    item: IBreadcrumbItemProps;
    key: Key | null;
  }>(children)((child) => {
    if (
      verifiedIsNotEmpty(child) &&
      verifiedKeyIsExist((child as unknown) as Record<string, any>, `type`)
    ) {
      const { key, props, type } = child as ReactElement;

      if ([BreadcrumbItem].includes(type as any)) {
        return { item: props as IBreadcrumbItemProps, key };
      }
    }

    return undefined;
  }).map(
    ({ item, key }, index): IBreadcrumbContent => ({
      key: key
        ? `${key}`
        : `${index}-${item.label}-${item.link ? item.link : `-`}`,
      payload: item,
      type: IBreadcrumbContentType.item
    })
  );

  return content
    .map((item, index): IBreadcrumbContent[] => {
      if (index < content.length - 1) {
        const { key, payload } = item as IBreadcrumbContent;
        const { label, link } = payload as IBreadcrumbItemProps;
        return [
          item,
          {
            key: `${key}-${label}${verifiedIsNotEmpty(link) ? `-${link}` : ``}`,
            payload: separator,
            type: IBreadcrumbContentType.separator
          }
        ];
      }

      return [item];
    })
    .reduce((prev, current) => [...prev, ...current], []);
};
