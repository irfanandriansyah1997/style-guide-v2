import React, { CSSProperties, FC, ReactNode } from 'react';

import { IEventComponent } from '@/interface/general/event.interface';

/**
 * Breadcrumbs Style Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export interface IBreadcrumbClassnameList {
  item: string;
  separator: string;
  wrapper: string;
}

type IBreadcrumbContentGenerator<P, T> = {
  key: string;
  payload: P;
  type: T;
};

/**
 * Breadcrumb Content
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.14
 */
export type IBreadcrumbContent =
  | IBreadcrumbContentGenerator<
      IBreadcrumbItemProps,
      IBreadcrumbContentType.item
    >
  | IBreadcrumbContentGenerator<
      ReactNode | string,
      IBreadcrumbContentType.separator
    >;

export enum IBreadcrumbContentType {
  item = `Item`,
  separator = `Separator`
}

/**
 * Breadcrumbs Export Default Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export type IBreadcrumbExportDefault = FC<IBreadcrumbProps> & {
  Item: FC<IBreadcrumbItemProps>;
};

/**
 * Breadcrumb Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export interface IBreadcrumbHooks {
  item: IBreadcrumbContent[];
  styleItem?: CSSProperties;
  styleWrapper?: CSSProperties;
}

/**
 * Breadcrumbs Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export interface IBreadcrumbItemProps {
  label: string;
  link?: string;
}

/**
 * Breadcrumbs Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export interface IBreadcrumbProps {
  className?: Partial<IBreadcrumbClassnameList>;
  on?: (param: IEventOnClickBreadcrumb) => void;
  separator: ReactNode | string;
  style?: Partial<IBreadcrumbStyle>;
}

/**
 * Breadcrumbs Style Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export interface IBreadcrumbStyle {
  backgroundColor: string;
  fontSize: number;
  fontWeight: number;
  heightContainer: number;
  paddingContainer: number;
  spaceEachItem: number;
  textColor: string;
}

/**
 * Event On Click Breadcrumbs
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export type IEventOnClickBreadcrumb = IEventComponent<
  'on-click-breadcrumb-item',
  React.MouseEvent<HTMLAnchorElement, MouseEvent>
>;
