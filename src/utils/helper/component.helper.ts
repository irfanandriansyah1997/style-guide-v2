/* eslint-disable sort-exports/sort-exports */
import { verifiedIsNotEmpty, verifiedKeyIsExist } from '@99/helper';
import {
  Children,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  ReactPortal
} from 'react';

import { IDefaultText } from '@/interface/general';

/**
 * Check Classname Available
 * @param {Partial<IButtonClassnameList>} className - class name list on button component
 * @param {string} key - key on IButtonClassnameList interface
 * @returns {boolean}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export function checkClassnameAvailable<Props>(
  className: Partial<Props> | undefined,
  key: keyof Props
): boolean {
  return (
    verifiedIsNotEmpty(className) &&
    verifiedIsNotEmpty((className as Props)[key])
  );
}

/**
 * Getter Size
 * @param {IDefaultText} key - key param will be contains key of object on sizePreset parameter or random string and number
 * @param {Record<P, IDefaultText>} sizePrest - size preset param is object who collect key of size preset
 * @returns {IDefaultText}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
export function getterSize<P extends string>(
  key: IDefaultText,
  sizePreset: Record<P, IDefaultText>
): IDefaultText {
  if (Object.prototype.hasOwnProperty.call(sizePreset, key)) {
    return sizePreset[key as P];
  }

  return key;
}

/**
 * This function does a shallow comparison on two objects
 * @param {Object} a - first object to compare
 * @param {Object} b - second object to compare
 * @returns {Boolean} - whether the two objects are equal
 * */
export const shallowEquals = (a: any, b: any): boolean => {
  if (a === b) return true;
  if (!(a || b)) return true;

  const aKeys = Object.keys(a);
  for (let position = 0; position < aKeys.length; position += 1) {
    const key = aKeys[position];
    if (!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }

  const bKeys = Object.keys(b);
  for (let position = 0; position < bKeys.length; position += 1) {
    const key = bKeys[position];
    if (!(key in a) || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
};

/**
 * Transform Children Props To Array
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {ReactNode} children - children props
 * @return {Output}
 * @description the result this method is array depends on criteria / condition callback parameter when mapping children props
 * @since 2021.06.06
 */
export function transformChildrenToArray<Output>(children: ReactNode) {
  return (
    callback: (
      child:
        | string
        | number
        | boolean
        | Record<string, any>
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactNodeArray
        | ReactPortal
        | null
        | undefined
    ) => Output | undefined
  ): Output[] => {
    const result = Children.toArray(children)
      .map(callback)
      ?.filter(verifiedIsNotEmpty) as Output[];

    if (
      typeof result === `object` &&
      verifiedKeyIsExist(result as Record<string, any>, `length`)
    ) {
      return result;
    }

    return [];
  };
}

/**
 * Is Equals
 * @param {ReactNode} children
 * @param {ReactNode} children
 * @returns {boolean}
 */
export const isEqual = (prevChildren: ReactNode, nextChildren: ReactNode) =>
  shallowEquals(prevChildren, nextChildren);
