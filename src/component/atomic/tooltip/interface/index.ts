import { ReactNode } from 'react';

/**
 * All Class Name Each Tag on Tooltip Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface ITooltipClassnameList {
  toggle: string;
  tooltip: string;
}

/**
 * Tooltip Content Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.19
 */
export interface ITooltipContentProps extends Omit<ITooltipProps, 'className'> {
  className?: string;
}

export type ITooltipPosition = 'top' | 'right' | 'bottom' | 'left';

/**
 * Tooltip Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.19
 */
export interface ITooltipProps extends Partial<ITooltipStyling> {
  children?: ReactNode;
  className?: Partial<ITooltipClassnameList>;
  content: ReactNode;
}

/**
 * Tooltip Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.19
 */
export interface ITooltipStyling {
  background: string;
  position: ITooltipPosition;
  visible: boolean;
}
