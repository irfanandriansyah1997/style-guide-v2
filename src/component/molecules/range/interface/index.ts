import { CSSProperties, ReactNode } from 'react';

interface IRangeIndicator {
  max: number;
  min: number;
}

/**
 * Basic Slider Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.04
 */
export interface IBasicSliderProps
  extends Partial<IBasicSliderStyling>,
    IRangeIndicator {
  marks: Record<number, ReactNode | IMarksCustom>;
}

/**
 * Slider Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.04
 */
export interface IBasicSliderStyling {
  disabled: boolean;
  reverse: boolean;
  vertical: boolean;
}

/**
 * Handle Range Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.04
 */
export interface IHandleRangeProps extends IRangeIndicator {
  min: number;
  position?: number;
  tabIndex?: number;
  value: number;
}

/**
 * Marks Custom Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.04
 */
export interface IMarksCustom {
  label: string;
  style: CSSProperties;
}

/**
 * Range Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.04
 */
export interface IRangeProps extends IBasicSliderProps {
  defaultValue: number[];
  value: number[];
}

/**
 * Slider Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.04
 */
export interface ISliderProps extends IBasicSliderProps {
  defaultValue: number;
  value: number;
}
