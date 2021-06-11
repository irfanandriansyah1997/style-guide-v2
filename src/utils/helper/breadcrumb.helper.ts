import { verifiedIsNotEmpty, verifiedKeyIsExist } from '@99/helper';
import { ReactElement, ReactNode } from 'react';

import { IBreadcrumbItemProps } from '@/molecules/breadcrumbs/interface';
import BreadcrumbItem from '@/molecules/breadcrumbs/section/breadcrumb-item.component';

import { transformChildrenToArray } from './component.helper';

/**
 * Transform Children To Breadcumbs Item
 * @param {ReactNode} children - children Props
 * @returns {IBreadcrumbItemProps}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const transformChildrenToBreadcrumbContent = (
  children: ReactNode
): IBreadcrumbItemProps[] =>
  transformChildrenToArray<IBreadcrumbItemProps>(children)((child) => {
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
  });
