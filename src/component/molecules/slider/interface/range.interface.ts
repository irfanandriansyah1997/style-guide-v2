import { GenerateHTMLAttribute, IBasicSliderProps } from './basic.interface';

type IBaseProps = IBasicSliderProps<number[], true>;

/**
 * Customize HTML Attribute on Slider Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export type IRangeHTMLAttribute = GenerateHTMLAttribute<string[]>;

/**
 * Range Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface IRangeProps extends IBaseProps, IRangeHTMLAttribute {
  defaultValue: [];
  pushAble: boolean | number;
  tabIndex: number[];
  value: [];
}
