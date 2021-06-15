import {
  objToString,
  verifiedIsNotEmpty,
  verifiedKeyIsExist
} from '@99/helper';
import { CSSProperties, Key, ReactElement, ReactNode } from 'react';

import {
  IListContent,
  IListContentType,
  IListItemProps,
  IListStyle
} from '@/atomic/list/interface';
import ListItem from '@/atomic/list/section/list-item.component';
import { transformChildrenToArray } from '@/helper/component.helper';

/**
 * Generate Classname Container
 * @param {Partial<IListStyle> | undefined} style - style object props
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const generateClassnameContainer = (
  style: Partial<IListStyle> | undefined
): string => {
  let className: Record<string, boolean> = {
    flex: true,
    'flex-wrap': true,
    relative: true
  };
  if (style) {
    const { orientation } = style;

    switch (orientation) {
      case `horizontal`:
        className = {
          ...className,
          'flex-align-center': true,
          'flex-row': true
        };
        break;
      case `vertical`:
        className = {
          ...className,
          'flex-align-start': true,
          'flex-column': true
        };
        break;
    }
  }

  return objToString(className);
};

/**
 * Generate Style Item
 * @param {Partial<IListStyle> | undefined} style - style object props
 * @returns {CSSProperties}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const generateStyleItem = (
  style: Partial<IListStyle> | undefined
): CSSProperties => {
  if (style) {
    const { dividerColor: borderColor, orientation, outline, space } = style;
    let padding: string | undefined;
    let borderStyle: string | undefined;

    if (space) {
      switch (orientation) {
        case `horizontal`:
          padding = `0px ${(space as number) / 2}px`;
          break;
        case `vertical`:
          padding = `${(space as number) / 2}px 0px`;
          break;
      }
    }

    if (outline) {
      switch (outline) {
        case `solid`:
          borderStyle = `solid`;
          break;
        case `dash`:
          borderStyle = `dashed`;
          break;
      }
    }

    return {
      borderColor,
      borderStyle,
      padding
    };
  }

  return {};
};

/**
 * Transform Children To List Item
 * @param {ReactNode} children - children Props
 * @returns {IBreadcrumbItemProps}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const transformChildrenToListContent = (
  children: ReactNode
): IListContent[] =>
  transformChildrenToArray<{
    item: IListItemProps;
    key: Key | null;
  }>(children)((child) => {
    if (
      verifiedIsNotEmpty(child) &&
      verifiedKeyIsExist((child as unknown) as Record<string, any>, `type`)
    ) {
      const { key, props, type } = child as ReactElement;

      if ([ListItem].includes(type as any)) {
        return {
          item: props,
          key
        };
      }
    }

    return undefined;
  }).map(
    ({ item, key }, index): IListContent => ({
      key: key ? `${key}` : `${index}`,
      payload: item,
      type: IListContentType.item
    })
  );
