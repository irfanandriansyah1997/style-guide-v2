import {
  objToString,
  verifiedIsNotEmpty,
  verifiedIsNotFalse
} from '@99/helper';
import { FC, memo, ReactNode } from 'react';

import {
  IBasicButtonProps,
  IButtonClassnameList
} from '@/atomic/button/interface';
import styles from '@/atomic/button/style/style.module.scss';
import Text from '@/atomic/text';

/**
 * Check Classname Available
 * @param {Partial<IButtonClassnameList>} className - class name list on button component
 * @param {string} key - key on IButtonClassnameList interface
 * @returns {boolean}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
const checkClassnameAvailable = (
  className: Partial<IButtonClassnameList> | undefined,
  key: keyof IButtonClassnameList
): boolean =>
  verifiedIsNotEmpty(className) &&
  verifiedIsNotEmpty((className as IButtonClassnameList)[key]);

/**
 * Basic Button Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
const component: FC<Partial<IBasicButtonProps> & { children?: ReactNode }> = ({
  children,
  className,
  icon,
  rtl
}) => (
  <div
    className={objToString({
      flex: true,
      'flex-align-center': true,
      'flex-row-reverse': verifiedIsNotFalse(rtl),
      [`${className ? className.content : undefined}`]: checkClassnameAvailable(
        className,
        `content`
      )
    })}
  >
    {icon && (
      <div
        className={objToString({
          [styles[`a-button__icon`]]: true,
          [`${
            className ? className.icon : undefined
          }`]: checkClassnameAvailable(className, `icon`)
        })}
      >
        {icon}
      </div>
    )}
    <Text.Span
      className={objToString({
        [styles[`a-button__text`]]: true,
        [`${className ? className.text : undefined}`]: checkClassnameAvailable(
          className,
          `text`
        )
      })}
    >
      {children}
    </Text.Span>
  </div>
);

export const BasicButton = memo(component);

/**
 * Generate Button Class Name
 * @param {Partial<IBasicButtonProps>} props - basic props button component
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export const generateButtonClassName = (
  tag: 'button' | 'a',
  {
    className,
    icon,
    outline,
    rounded,
    rtl,
    size,
    theme
  }: Partial<IBasicButtonProps>
): string =>
  objToString({
    [styles[`a-button`]]: true,
    [styles[`a-button--outline`]]: verifiedIsNotFalse(outline),
    [styles[`a-button--rounded`]]: verifiedIsNotFalse(rounded),
    [styles[`a-button--rtl`]]: verifiedIsNotFalse(rtl),
    [styles[`a-button--size-big`]]: verifiedIsNotEmpty(size) && size === `big`,
    [styles[`a-button--size-default`]]:
      verifiedIsNotEmpty(size) && size === `default`,
    [styles[`a-button--size-small`]]:
      verifiedIsNotEmpty(size) && size === `small`,
    [styles[`a-button--theme-dark`]]:
      verifiedIsNotEmpty(theme) &&
      !verifiedIsNotFalse(outline) &&
      theme === `dark`,
    [styles[`a-button--theme-light`]]:
      verifiedIsNotEmpty(theme) &&
      !verifiedIsNotFalse(outline) &&
      theme === `light`,
    [styles[`a-button--with-icon`]]: verifiedIsNotEmpty(icon),
    flex: tag === `button`,
    'flex-align-center': true,
    'flex-justify-content': true,
    'inline-flex': tag === `a`,
    [`${className ? className.wrapper : undefined}`]: checkClassnameAvailable(
      className,
      `wrapper`
    )
  });
