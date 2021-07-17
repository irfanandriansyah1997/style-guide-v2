import { MouseEvent, ReactNode } from 'react';

import { IButtonThemeOption } from '@/atomic/button/interface';
import { IEventComponent } from '@/interface/general/event.interface';

export * from './fab-hooks.interface';

/**
 * Event Click Button
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnClickButton = IEventComponent<
  'on-click-button',
  MouseEvent<HTMLButtonElement>
>;

export type IFabAnimation =
  | 'fade-in'
  | 'fade-in-top'
  | 'fade-in-bottom'
  | 'fade-in-left'
  | 'fade-in-right';

export type IFabPosition = 'fixed' | 'absolute';

/**
 * Fab Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface IFabProps extends Partial<IFabStyling> {
  className?: string;
  icon: ReactNode;
  on(param: IEventOnClickButton): void;
  text?: string;
}

/**
 * Fab Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface IFabStyling {
  animation: IFabAnimation;
  bottom: number | string;
  left: number | string;
  position: IFabPosition;
  right: number | string;
  rtl: boolean;
  shape: IFabType;
  show: boolean;
  theme: IButtonThemeOption;
  top: number | string;
}

export type IFabType = 'basic' | 'small' | 'extended';
