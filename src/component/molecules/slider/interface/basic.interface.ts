import { CSSProperties, ReactNode } from 'react';

/**
 * Generate HTML Attribute
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface GenerateHTMLAttribute<T> {
  ariaLabelForHandle: T;
  ariaLabelledByForHandle: T;
  ariaValueTextFormatterForHandle: T;
}

/**
 * Basic Slider ClassName Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface IBasicSliderClassname {
  handle: string;
  wrapper: string;
}

/**
 * Basic Slider Data
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface IBasicSliderData {
  max: number;
  min: number;
  step: number;
}

/**
 * Basic Slider Event Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface IBasicSliderEvent<T> {
  onAfterChange?: (value: T) => void;
  onBeforeChange?: (value: T) => void;
  onChange?: (value: T) => void;
}

/**
 * Basic Slider Layout Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface IBasicSliderLayout {
  className: Partial<IBasicSliderClassname>;
  disabled: boolean;
  dots: boolean;
  marks: Record<number, ReactNode | Partial<IMarksProps>>;
  reverse: boolean;
  vertical: boolean;
}

/**
 * Basic Slider Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export type IBasicSliderProps<T, IS_ARRAY = false> = Partial<IBasicSliderData> &
  Partial<IBasicSliderEvent<T>> &
  Partial<IBasicSliderLayout> &
  Partial<IBasicSliderStyling<IS_ARRAY>>;

/**
 * Basic Slider Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export type IBasicSliderStyling<IS_ARRAY> = {
  activeDotStyle: CSSProperties;
  dotStyle: CSSProperties;
  maximumTrackStyle: CSSProperties;
  railStyle: CSSProperties;
  style: CSSProperties;
} & IS_ARRAY extends false
  ? {
      handleStyle: CSSProperties;
      trackStyle: CSSProperties;
    }
  : {
      handleStyle: CSSProperties[];
      trackStyle: CSSProperties[];
    };

/**
 * Mark Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface IMarksProps {
  label: string;
  style: CSSProperties;
}
