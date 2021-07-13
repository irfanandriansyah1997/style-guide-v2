import { GenerateHTMLAttribute, IBasicSliderProps } from './basic.interface';

type IBaseProps = IBasicSliderProps<number>;

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
export interface ISliderProps extends IBaseProps, ISliderHTMLAttribute {
  defaultValue?: number;
  tabIndex?: number;
  value?: number;
}
