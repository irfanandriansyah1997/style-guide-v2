import { GenerateHTMLAttribute, IBasicSliderProps } from './basic.interface';

/**
 * Customize HTML Attribute on Slider Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export type ISliderHTMLAttribute = GenerateHTMLAttribute<string>;

/**
 * Slider Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface ISliderProps extends IBasicSliderProps, ISliderHTMLAttribute {
  defaultValue?: number;
  tabIndex?: number;
  value?: number;
}
