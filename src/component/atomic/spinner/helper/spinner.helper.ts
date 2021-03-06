import {
  objToString,
  verifiedIsNotEmpty,
  verifiedIsNotFalse
} from '@99/helper';
import { ReactNode } from 'react';

import {
  ISpinnerClassnameList,
  ISpinnerIndicatorHooks
} from '@/atomic/spinner/interface';
import styles from '@/atomic/spinner/style/style.module.scss';
import { checkClassnameAvailable } from '@/helper/component.helper';
import { PartialNull } from '@/interface/general';

/**
 * Generate Classname Container
 * @param {Partial<IListStyle> | undefined} style - style object props
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const generateClassnameContainer = (
  className: PartialNull<ISpinnerClassnameList>,
  children?: ReactNode,
  isSpinning?: boolean
): string =>
  objToString({
    [`${styles[`a-spinner`]}`]: true,
    [`${styles[`a-spinner--spinning`]}`]: verifiedIsNotFalse(isSpinning),
    [`${styles[`a-spinner--with-children`]}`]: verifiedIsNotEmpty(children),
    relative: true,
    [`${className?.wrapper}`]: checkClassnameAvailable<ISpinnerClassnameList>(
      className,
      `wrapper`
    )
  });

/**
 * Generate Classname Content
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
export const generateClassnameContent = ({
  className
}: ISpinnerIndicatorHooks): string => {
  const response: Record<string, boolean> = {
    absolute: true,
    [`${styles[`a-spinner__spinner`]}`]: true,
    [`${className}`]: verifiedIsNotEmpty(className)
  };

  return objToString(response);
};
