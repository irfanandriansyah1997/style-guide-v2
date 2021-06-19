import { MouseEvent, ReactNode } from 'react';

import { IEventComponent } from '@/interface/general/event.interface';

/**
 * Event On Click Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnClickTags = IEventComponent<
  'on-click',
  MouseEvent<HTMLDivElement>
>;

/**
 * Tags Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.07
 */
export interface ITagsProps {
  children?: ReactNode;
  className?: string;
  inverted?: boolean;
  on?: (param: IEventOnClickTags) => void;
  outline?: boolean;
  rounded?: boolean;
  rtl?: boolean;
  size?: ITagsSize;
  theme?: ITagsThemeOption;
}

export type ITagsSize = 'small' | 'default';

export type ITagsThemeOption = 'dark' | 'light';
