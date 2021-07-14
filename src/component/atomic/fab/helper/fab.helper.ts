import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { CSSProperties } from 'react';
import { TransitionStatus } from 'react-transition-group';

import { IFabAnimation, IFabStyling } from '@/atomic/fab/interface';
import animationStyles from '@/atomic/fab/style/animation.module.scss';
import styles from '@/atomic/fab/style/style.module.scss';

/**
 * Generate FAB Animation while fade in & fade out
 * @param {IFabAnimation | undefined} animation - animation className
 * @param {TransitionStatus} state - transtion state
 * @return {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.14
 */
export const generateFABAnimation = (
  animation: IFabAnimation | undefined,
  state: TransitionStatus
): string => {
  let animationClassname = ``;
  if (verifiedIsNotEmpty(animation)) {
    switch (state) {
      case `entered`:
        animationClassname = `${animationStyles[`${animation}-entered`]}`;
        break;

      case `entering`:
        animationClassname = `${animationStyles[`${animation}-entering`]}`;
        break;

      case `exited`:
        animationClassname = `${animationStyles[`${animation}-exited`]}`;
        break;

      case `exiting`:
        animationClassname = `${animationStyles[`${animation}-exiting`]}`;
        break;

      default:
        throw new Error(`Unknown state`);
    }
  }

  return animationClassname;
};

/**
 * Generate FAB Classname
 * @param {IFabStyling} styling - fab styling props
 * @param {string | undefined} className - custom classname
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.14
 */
export const generateFABClassName = (
  { position, rtl, theme, type }: Partial<IFabStyling>,
  className: string | undefined
): string =>
  objToString({
    flex: true,
    'flex-align-center': true,
    'flex-justify-center': true,
    'flex-row': true,
    'flex-row-reverse': rtl,
    [`${position}`]: verifiedIsNotEmpty(position),
    [styles[`a-fab`]]: true,
    [styles[`a-fab--type-${type}`]]: true,
    [styles[`a-fab--theme-${theme}`]]: true,
    [`${className}`]: verifiedIsNotEmpty(className)
  });

/**
 * Generate FAB Style
 * @param {IFabStyling} styling - fab styling props
 * @returns {CSSProperties}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.14
 */
export const generateFABStyle = ({
  bottom,
  left,
  position,
  right,
  top
}: Partial<IFabStyling>): CSSProperties => ({
  bottom,
  left,
  position,
  right,
  top
});
