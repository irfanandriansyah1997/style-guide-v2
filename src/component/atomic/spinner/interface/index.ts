import { ReactNode } from 'react';

/**
 * All Class Name Each Tag on Spinner Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.21
 */
export interface ISpinnerClassnameList {
  content: string;
  wrapper: string;
}

/**
 * Spinner Indicator Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.21
 */
export type ISpinnerIndicatorHooks = Omit<ISpinnerIndicatorProps, 'children'>;

/**
 * Spinner Indicator Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.21
 */
export interface ISpinnerIndicatorProps {
  children?: ReactNode;
  className?: string;
  spinning: boolean;
  withChildren?: boolean;
}

/**
 * Spinner Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.21
 */
export interface ISpinnerProps {
  children?: ReactNode;
  className?: Partial<ISpinnerClassnameList>;
  indicator?: ReactNode;
  spinning: boolean;
}
