/* eslint-disable sort-exports/sort-exports */
import { verifiedIsNotEmpty, verifiedKeyIsExist } from '@99/helper';
import {
  Children,
  cloneElement,
  isValidElement,
  JSXElementConstructor,
  ReactChild,
  ReactElement,
  ReactInstance,
  ReactNode,
  ReactNodeArray,
  ReactPortal
} from 'react';
import ReactDOM from 'react-dom';
import { isFragment } from 'react-is';

import { IDefaultText, NullAble, PartialNull } from '@/interface/general';

/**
 * Get Scroll
 * @param {Window} window - A window containing a DOM document
 * @returns {number}
 */
const getScroll = (w: Window): number => {
  let ret = w.pageXOffset;
  const method = `scrollLeft`;

  if (typeof ret !== `number`) {
    const d = w.document;
    ret = d.documentElement[method];

    if (typeof ret !== `number`) {
      ret = d.body[method];
    }
  }
  return ret;
};

/**
 * Get Client Position
 * @param {HTMLElement} elem - Any HTML element
 */
const getClientPosition = (elem: HTMLElement) => {
  let x: number;
  let y: number;
  const doc = elem.ownerDocument;
  const { body } = doc;
  const docElem = doc && doc.documentElement;
  const box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
};

/**
 * Check Classname Available
 * @param {Partial<IButtonClassnameList>} className - class name list on button component
 * @param {string} key - key on IButtonClassnameList interface
 * @returns {boolean}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export function checkClassnameAvailable<Props>(
  className: PartialNull<Props>,
  key: keyof Props
): boolean {
  return (
    verifiedIsNotEmpty(className) &&
    verifiedIsNotEmpty((className as Props)[key])
  );
}

/**
 * Flatten Children
 * @param {ReactNode} children - children props from react component
 * @param {number} depth - number of depth flatten react children
 * @param {(string | number)[]} keys - keys list
 * @returns {ReactChild[]}
 */
export const flattenChildren = (
  children: ReactNode,
  depth = 0,
  keys: (string | number)[] = []
): ReactChild[] =>
  Children.toArray(children)
    .reduce((acc: ReactChild[], node, nodeIndex): ReactChild[] => {
      if (isFragment(node)) {
        acc.push(
          ...flattenChildren(
            node.props.children,
            depth + 1,
            keys.concat(node.key || nodeIndex)
          )
        );
      } else if (isValidElement(node)) {
        acc.push(
          cloneElement(node, {
            key: keys.concat(String(node.key)).join(`.`)
          })
        );
      } else if (typeof node === `string` || typeof node === `number`) {
        acc.push(node);
      }
      return acc;
    }, [])
    .filter(verifiedIsNotEmpty);

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

  if (typeof a === `object` && typeof b === `object`) {
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
  }

  return false;
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
    ) => NullAble<Output>
  ): Output[] => {
    const result = flattenChildren(children)
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
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 * @param {ReactInstance | HTMLElement} node - node element
 * @returns {hh}
 */
export function findDOMNode<T = Element | Text>(
  node: ReactInstance | HTMLElement
): T {
  if (node instanceof HTMLElement) {
    return (node as unknown) as T;
  }

  // eslint-disable-next-line react/no-find-dom-node
  return (ReactDOM.findDOMNode(node) as unknown) as T;
}

/**
 * Get Offset Left
 * @param {HTMLElement} elem - Any HTML element
 * @returns {number}
 */
export function getOffsetLeft(el: HTMLElement): number {
  const pos = getClientPosition(el);
  const doc = el.ownerDocument;
  // Only IE use `parentWindow`
  const w: Window = doc.defaultView || (doc as any).parentWindow;
  pos.left += getScroll(w);
  return pos.left;
}
