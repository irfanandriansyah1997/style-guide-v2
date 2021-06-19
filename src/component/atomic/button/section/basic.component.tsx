import {
  objToString,
  verifiedIsNotEmpty,
  verifiedIsNotFalse
} from '@99/helper';
import { FC, memo, ReactNode } from 'react';

import {
  IBasicButtonProps,
  IButtonClassnameList as List,
  IButtonSize as Size,
  IButtonThemeOption as Theme
} from '@/atomic/button/interface';
import styles from '@/atomic/button/style/style.module.scss';
import Text from '@/atomic/text';
import { checkClassnameAvailable } from '@/helper/component.helper';

const BUTTON_THEME: Theme[] = [`dark`, `light`];

const BUTTON_SIZE: Size[] = [`big`, `default`, `small`];

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
      [`${className?.content}`]: checkClassnameAvailable<List>(
        className,
        `content`
      )
    })}
  >
    {icon && (
      <div
        className={objToString({
          [styles[`a-button__icon`]]: true,
          [`${className?.icon}`]: checkClassnameAvailable<List>(
            className,
            `icon`
          )
        })}
      >
        {icon}
      </div>
    )}
    <Text.Span
      className={objToString({
        [styles[`a-button__text`]]: true,
        [`${className?.text}`]: checkClassnameAvailable<List>(className, `text`)
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
    [styles[`a-button--size-${size}`]]:
      verifiedIsNotEmpty(size) && BUTTON_SIZE.includes(size as Size),
    [styles[`a-button--theme-${theme}`]]:
      verifiedIsNotEmpty(theme) &&
      BUTTON_THEME.includes(theme as Theme) &&
      !verifiedIsNotFalse(outline),
    [styles[`a-button--with-icon`]]: verifiedIsNotEmpty(icon),
    flex: tag === `button`,
    'flex-align-center': true,
    'flex-justify-content': true,
    'inline-flex': tag === `a`,
    [`${className?.wrapper}`]: checkClassnameAvailable<List>(
      className,
      `wrapper`
    )
  });
