import {
  objToString,
  verifiedIsNotEmpty,
  verifiedKeyIsExist
} from '@99/helper';
import { CSSProperties, Key, ReactElement, ReactNode } from 'react';

import {
  IBasicSizeGrid,
  IGridItemHooks,
  IGridItemProps,
  IGridRowStyling,
  IGridSize,
  IGridSpaceItem
} from '@/atomic/grid/interface';
import GridItem from '@/atomic/grid/section/grid-item.component';
import styles from '@/atomic/grid/style/style.module.scss';
import { transformChildrenToArray } from '@/helper/component.helper';

/**
 * Generate Spacing Size
 * @param {IGridSpaceItem | number} param - spacing size props
 * @returns {IGridSpaceItem}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
const generateSpacingSize = (
  param?: Partial<IGridSpaceItem> | number
): IGridSpaceItem => {
  const defaultSize = 12;

  if (!verifiedIsNotEmpty(param)) {
    return {
      horizontal: defaultSize,
      vertical: defaultSize
    };
  }

  if (typeof param === `number`) {
    return {
      horizontal: param / 2,
      vertical: param / 2
    };
  }

  return {
    horizontal: (param as IGridSpaceItem).horizontal || defaultSize,
    vertical: (param as IGridSpaceItem).vertical || defaultSize
  };
};

/**
 * Generate Class Name Wrapper
 * @param {string | undefined} className - custom classname
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export const generateClassNameItem = (
  size: IGridSize,
  { lg, md, sm, xl, xs }: Partial<IBasicSizeGrid>,
  className?: string
): string =>
  objToString({
    [`${className}`]: verifiedIsNotEmpty(className),
    [`${styles[`a-col`]}`]: size === `auto`,
    [`${styles[`a-col-${size}`]}`]: size !== `auto`,
    [`${styles[`a-col-lg`]}`]: verifiedIsNotEmpty(lg) && lg === `auto`,
    [`${styles[`a-col-lg-${size}`]}`]: verifiedIsNotEmpty(lg) && lg !== `auto`,
    [`${styles[`a-col-md`]}`]: verifiedIsNotEmpty(md) && md === `auto`,
    [`${styles[`a-col-md-${size}`]}`]: verifiedIsNotEmpty(md) && md !== `auto`,
    [`${styles[`a-col-sm`]}`]: verifiedIsNotEmpty(sm) && sm === `auto`,
    [`${styles[`a-col-sm-${size}`]}`]: verifiedIsNotEmpty(sm) && sm !== `auto`,
    [`${styles[`a-col-xl`]}`]: verifiedIsNotEmpty(xl) && xl === `auto`,
    [`${styles[`a-col-xl-${size}`]}`]: verifiedIsNotEmpty(xl) && xl !== `auto`,
    [`${styles[`a-col-xs`]}`]: verifiedIsNotEmpty(xs) && xs === `auto`,
    [`${styles[`a-col-xs-${size}`]}`]: verifiedIsNotEmpty(xs) && xs !== `auto`
  });

/**
 * Generate Class Name Wrapper
 * @param {string | undefined} className - custom classname
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export const generateClassNameWrapper = (className?: string): string =>
  objToString({
    [`${styles[`a-row`]}`]: true,
    [`${className}`]: verifiedIsNotEmpty(className)
  });

/**
 * Generate Style Wrapper
 * @param {IGridRowStyling} props - props styling
 * @returns {CSSProperties}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export const generateStyleItem = (
  space: Partial<IGridSpaceItem> | number | undefined,
  order: number | undefined
): CSSProperties => {
  const { horizontal, vertical } = generateSpacingSize(space);

  return {
    order,
    paddingBottom: vertical,
    paddingLeft: horizontal,
    paddingRight: horizontal,
    paddingTop: vertical
  };
};

/**
 * Generate Style Wrapper
 * @param {IGridRowStyling} props - props styling
 * @returns {CSSProperties}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
export const generateStyleWrapper = ({
  alignItems,
  justifyContent,
  spaceEachItem
}: IGridRowStyling): CSSProperties => {
  const { horizontal, vertical } = generateSpacingSize(spaceEachItem);

  return {
    alignItems,
    justifyContent,
    marginBottom: vertical,
    marginLeft: -1 * horizontal,
    marginRight: -1 * horizontal,
    marginTop: -1 * vertical
  };
};

/**
 * Transform Children To Breadcumbs Item
 * @param {ReactNode} children - children Props
 * @param {Partial<IGridSpaceItem> | number} space - space between grid item
 * @returns {IBreadcrumbItemProps}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const transformChildrenToGridItem = (
  children: ReactNode,
  space?: Partial<IGridSpaceItem> | number
): IGridItemHooks[] =>
  transformChildrenToArray<IGridItemProps & { key: Key | undefined }>(children)(
    (child) => {
      if (
        verifiedIsNotEmpty(child) &&
        verifiedKeyIsExist((child as unknown) as Record<string, any>, `type`)
      ) {
        const { key, props, type } = child as ReactElement;

        if ([GridItem].includes(type as any)) {
          return { ...props, key };
        }
      }

      return undefined;
    }
  ).map(
    (
      {
        children,
        className,
        id,
        key,
        order,
        size,
        ...res
      }: IGridItemProps & { key: Key | undefined },
      index
    ): IGridItemHooks => ({
      children,
      className: generateClassNameItem(size, res, className),
      key: `${id}-${key || `0`}-${index}`,
      style: generateStyleItem(space, order)
    })
  );
