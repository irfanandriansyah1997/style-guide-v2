import { KeyboardEvent } from 'react';

import { IEventComponent } from '@/interface/general/event.interface';

import { IStarClassNameList } from './star.interface';
import { IDefaultRateContent } from '.';

/**
 * Event On Blur
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnBlur = IEventComponent<'on-blur', undefined>;

/**
 * Event On Change
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnChange = IEventComponent<
  'on-change',
  {
    value: number;
  }
>;

/**
 * Event On Focus
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnFocus = IEventComponent<'on-focus', undefined>;

/**
 * Event On Hover
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnHover = IEventComponent<
  'on-hover',
  {
    value?: number;
  }
>;

/**
 * Event On Key Down
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnKeyDown = IEventComponent<
  'on-key-down',
  KeyboardEvent<HTMLUListElement>
>;

/**
 * All Class Name Each Tag on Rate Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface IRateClassNameList extends IStarClassNameList {
  disabled: string;
  rtl: string;
}

export type IRateDirection = 'rtl' | 'ltr';

/**
 * Rate Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.01
 */
export interface IRateProps extends Partial<IRateStyling>, IDefaultRateContent {
  className: Partial<IRateClassNameList>;
  count: number;
  defaultValue?: number;
  on: (
    param:
      | IEventOnBlur
      | IEventOnChange
      | IEventOnFocus
      | IEventOnHover
      | IEventOnKeyDown
  ) => void;
  value?: number;
}

/**
 * Rate Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.01
 */
export interface IRateStyling {
  allowClear: boolean;
  allowHalf: boolean;
  autoFocus: boolean;
  direction: IRateDirection;
  disabled: boolean;
  tabIndex: number;
}
