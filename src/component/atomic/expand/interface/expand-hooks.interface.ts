import { MutableRefObject } from 'react';

import { NullAble } from '@/interface/general';

/**
 * Expand Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.17
 */
export interface IExpandHooks {
  className: string;
  height: number;
  ref: MutableRefObject<NullAble<HTMLDivElement>>;
}
