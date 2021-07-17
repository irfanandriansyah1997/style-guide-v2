import { objToString } from '@99/helper';
import { CSSProperties } from 'react';

import { IListStyle } from '@/atomic/list/interface';
import { NullAble, PartialNull } from '@/interface/general';

/**
 * Generate Classname Container
 * @param {Partial<IListStyle> | undefined} style - style object props
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const generateClassnameContainer = (
  style: PartialNull<IListStyle>
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
  style: PartialNull<IListStyle>
): CSSProperties => {
  if (style) {
    const { dividerColor: borderColor, orientation, outline, space } = style;
    let padding: NullAble<string>;
    let borderStyle: NullAble<string>;

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
