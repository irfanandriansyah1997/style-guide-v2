import React, {
  FC,
  ForwardRefExoticComponent,
  KeyboardEvent,
  MouseEvent,
  MutableRefObject,
  RefAttributes
} from 'react';

import { IEventComponent } from '@/interface/general/event.interface';

import { IDefaultRateContent } from '.';

/**
 * Event On Star Clicked
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnStarClicked = IEventComponent<
  'on-star-clicked',
  {
    event: React.MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>;
    index: number;
  }
>;

/**
 * Event On Star Hovered
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnStarHovered = IEventComponent<
  'on-star-hovered',
  {
    event: MouseEvent<HTMLDivElement>;
    index: number;
  }
>;

/**
 * All Class Name Each Tag on Star Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface IStarClassNameList {
  active: string;
  first: string;
  focused: string;
  fullSelection: string;
  halfSelection: string;
  second: string;
  zeroSelection: string;
}

/**
 * Star Default Export Comonent
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.04
 */
export type IStarDefaultExport = FC<IStarProps> & {
  WithRef: ForwardRefExoticComponent<IStarProps & RefAttributes<HTMLLIElement>>;
};

/**
 * Star Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.30
 */
export interface IStarProps extends Partial<IStarStyling>, IDefaultRateContent {
  className?: Partial<IStarClassNameList>;
  index: number;
  on?: (param: IEventOnStarClicked | IEventOnStarHovered) => void;
  refContainer?: MutableRefObject<HTMLLIElement | undefined>;
  value: number;
}

/**
 * Start Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.30
 */
export interface IStarStyling {
  allowHalf: boolean;
  count: number;
  disabled: boolean;
  focused: boolean;
}
