import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { CSSProperties } from 'react';

import {
  IBasicSizeGrid,
  IGridRowStyling,
  IGridSize,
  IGridSpaceItem
} from '@/atomic/grid/interface';
import styles from '@/atomic/grid/style/style.module.scss';

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
    horizontal: ((param as IGridSpaceItem).horizontal || defaultSize) / 2,
    vertical: ((param as IGridSpaceItem).vertical || defaultSize) / 2
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
    [`${styles[`a-col-xs-${xs}`]}`]: verifiedIsNotEmpty(xs) && xs !== `auto`,
    [`${styles[`a-col-xs`]}`]: verifiedIsNotEmpty(xs) && xs === `auto`,
    [`${styles[`a-col-sm`]}`]: verifiedIsNotEmpty(sm) && sm === `auto`,
    [`${styles[`a-col-sm-${sm}`]}`]: verifiedIsNotEmpty(sm) && sm !== `auto`,
    [`${styles[`a-col-md`]}`]: verifiedIsNotEmpty(md) && md === `auto`,
    [`${styles[`a-col-md-${md}`]}`]: verifiedIsNotEmpty(md) && md !== `auto`,
    [`${styles[`a-col-lg`]}`]: verifiedIsNotEmpty(lg) && lg === `auto`,
    [`${styles[`a-col-lg-${lg}`]}`]: verifiedIsNotEmpty(lg) && lg !== `auto`,
    [`${styles[`a-col-xl`]}`]: verifiedIsNotEmpty(xl) && xl === `auto`,
    [`${styles[`a-col-xl-${xl}`]}`]: verifiedIsNotEmpty(xl) && xl !== `auto`
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
    flex: true,
    'flex-wrap': true,
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
