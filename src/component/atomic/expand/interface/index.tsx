import { FC, ReactNode } from 'react';

import { IEventComponent } from '@/interface/general/event.interface';

export * from './expand-hooks.interface';
export * from './expand-reducer.interface';

/**
 * Event On Resize
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnResizeComponent = IEventComponent<'on-resize', number>;

/**
 * Event On Toggle Expand
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnToggleExpand = IEventComponent<'on-toggle', boolean>;

/**
 * All Class Name Each Tag on Expand Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface IExpandClassnameList {
  content: string;
  toggle: string;
  wrapper: string;
}

/**
 * Expand Content Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.17
 */
export interface IExpandContentProps {
  children: ReactNode;
  className?: string;
}

/**
 * Expand Export Default Contract
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export type IExpandExportDefault = FC<IExpandProps> & {
  Content: FC<IExpandContentProps>;
  Selector: FC<IExpandContentProps>;
};

/**
 * Expand Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.17
 */
export interface IExpandProps extends Partial<IExpandStyling> {
  className?: Partial<IExpandClassnameList>;
  on(param: IEventOnResizeComponent | IEventOnToggleExpand): void;
}

export type IExpandSelectorPosition = 'top' | 'bottom';

/**
 * Expand Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.17
 */
export interface IExpandStyling {
  initialHeight: number;
  openned: boolean;
  selectorPosition: IExpandSelectorPosition;
}
