import { CSSProperties, ReactNode } from 'react';

/**
 * Basic Slider Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.04
 */
export interface IBasicSliderProps extends Partial<IBasicSliderStyling> {
  marks: Record<number, ReactNode | IMarksCustom>;
  max: number;
  min: number;
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
