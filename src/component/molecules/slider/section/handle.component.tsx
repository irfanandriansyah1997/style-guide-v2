import { objToString } from '@99/helper';
import { FC } from 'react';

import { IHandleProps } from '@/molecules/slider/interface';

/**
 * Handle Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
const Handler: FC<IHandleProps> = ({
  ariaLabel,
  ariaLabelledBy,
  ariaValueTextFormatter,
  className,
  disabled,
  max,
  min,
  style,
  value
}) => (
  <div
    className={objToString({
      [className]: true
    })}
    style={style}
    // aria attribute
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    aria-disabled={!!disabled}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    aria-valuetext={ariaValueTextFormatter}
  />
);

export default Handler;
