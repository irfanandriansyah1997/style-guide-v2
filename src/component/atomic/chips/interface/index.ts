import { MouseEvent } from 'react';

import { IEventComponent } from '@/interface/general/event.interface';

/**
 * All Class Name Each Tag on Chips Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface IChipsClassnameList {
  close: string;
  content: string;
  wrapper: string;
}

/**
 * Chips Props Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export interface IChipsProps {
  className?: Partial<IChipsClassnameList>;
  label: string;
  on: (param: IEventIconCloseOnClick) => void;
  outline?: boolean;
}

/**
 * Event Icon Close On Click
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventIconCloseOnClick = IEventComponent<
  'on-click-close-icon',
  MouseEvent<HTMLButtonElement>
>;
