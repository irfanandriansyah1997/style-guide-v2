import { MouseEventHandler, ReactNode } from 'react';

/**
 * All Class Name Each Tag on Tags Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface ITagsClassnameList {
  content: string;
  wrapper: string;
}

/**
 * Tags Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.07
 */
export interface ITagsProps {
  children?: ReactNode;
  className?: Partial<ITagsClassnameList>;
  inverted?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  outline?: boolean;
  rounded?: boolean;
  rtl?: boolean;
  size?: ITagsSize;
  theme?: ITagsThemeOption;
}

export type ITagsSize = 'small' | 'default';

export type ITagsThemeOption = 'dark' | 'light';
