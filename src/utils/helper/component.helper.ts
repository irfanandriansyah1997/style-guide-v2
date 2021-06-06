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
    const result = Children.map(children, callback)?.filter(verifiedIsNotEmpty);

    if (
      typeof result === `object` &&
      verifiedKeyIsExist(result as Record<string, any>, `length`)
    ) {
      return result;
    }

    return [];
  };
}
