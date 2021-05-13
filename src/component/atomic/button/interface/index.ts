import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Anchor Tag Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export type IAnchorTagProps = IAnchorType & Partial<IBasicButtonProps>;

type IAnchorType = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'style' | 'className'
>;

/**
 * Button Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface IBasicButtonProps {
  className?: Partial<IButtonClassnameList>;
  icon?: ReactNode;
  outline?: boolean;
  rounded?: boolean;
  rtl?: boolean;
  size?: IButtonSize;
  theme?: IButtonThemeOption;
}

/**
 * All Class Name Each Tag on Button Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface IButtonClassnameList {
  content: string;
  icon: string;
  text: string;
  wrapper: string;
}

export type IButtonSize = 'small' | 'default' | 'big';

/**
 * Button Tag Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export type IButtonTagProps = IButtonType & Partial<IBasicButtonProps>;

export type IButtonThemeOption = 'dark' | 'light';

type IButtonType = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'style' | 'className'
>;
