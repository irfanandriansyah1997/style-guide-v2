import { MutableRefObject } from 'react';

import { NullAble } from '@/interface/general';

import { IExpandReducer } from './expand-reducer.interface';

/**
 * Expand Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.17
 */
export interface IExpandHooks {
  action: IExpandHooksAction;
  state: IExpandHooksState;
}

/**
 * Expand Hooks Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export interface IExpandHooksAction {
  toggleExpand(): void;
}

/**
 * Expand Hooks State Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export interface IExpandHooksState extends IExpandReducer {
  ref: MutableRefObject<NullAble<HTMLDivElement>>;
}
