/**
 * Handle Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export interface IHandleProps {
  ariaLabel?: string;

  ariaLabelledBy?: string;
  ariaValueTextFormatter?: (val: number) => string;
  className: string;
  disabled?: boolean;
  dragging?: boolean;
  index: number;
  max?: number;
  min?: number;
  offset: number;
  prefixCls?: string;
  ref?: React.Ref<any>;
  reverse?: boolean;
  style?: React.CSSProperties;
  tabIndex?: number;
  value: number;
  vertical?: boolean;
}
