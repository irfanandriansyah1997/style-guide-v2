import { verifiedIsNotEmpty, verifiedKeyIsExist } from '@99/helper';
import { ReactElement, ReactNode } from 'react';

import { transformChildrenToArray } from '@/helper/component.helper';
import {
  IBreadcrumbContent,
  IBreadcrumbContentType,
  IBreadcrumbItemProps
} from '@/molecules/breadcrumbs/interface';
import BreadcrumbItem from '@/molecules/breadcrumbs/section/breadcrumb-item.component';

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
  const content = transformChildrenToArray<IBreadcrumbItemProps>(children)(
    (child) => {
      if (
        verifiedIsNotEmpty(child) &&
        verifiedKeyIsExist((child as unknown) as Record<string, any>, `type`)
      ) {
        const { props, type } = child as ReactElement;

        if ([BreadcrumbItem].includes(type as any)) {
          return props;
        }
      }

      return undefined;
    }
  ).map(
    (item, index): IBreadcrumbContent => ({
      key: `${item}-${index}-${item.label}-${item.link ? item.label : `-`}`,
      payload: item,
      type: IBreadcrumbContentType.item
    })
  );

  return content
    .map((item, index): IBreadcrumbContent[] => {
      if (index < content.length - 1) {
        return [
          item,
          {
            key: `${item}-${index}-${separator}-${
              (item.payload as IBreadcrumbItemProps).label
            }`,
            payload: separator,
            type: IBreadcrumbContentType.separator
          }
        ];
      }

      return [item];
    })
    .reduce((prev, current) => [...prev, ...current], []);
};
