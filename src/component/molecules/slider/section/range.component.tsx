import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { Range as RCRange } from 'rc-slider';
import { FC } from 'react';

import { checkClassnameAvailable } from '@/helper/component.helper';
import {
  IBasicSliderClassname as ClassNameList,
  IHandleProps,
  IRangeProps
} from '@/molecules/slider/interface';

import Handler from './handle.component';

/**
 * Range Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
const Range: FC<IRangeProps> = ({ className, ...props }) => (
  <RCRange
    {...props}
    className={objToString({
      [`${className?.wrapper}`]: checkClassnameAvailable<ClassNameList>(
        className,
        `wrapper`
      )
    })}
    handle={(props) => (
      <Handler
        {...((props as unknown) as IHandleProps)}
        className={objToString({
          [props.className]: verifiedIsNotEmpty(props.className),
          [`${className?.handle}`]: checkClassnameAvailable<ClassNameList>(
            className,
            `handle`
          )
        })}
      />
    )}
  />
);

export default Range;
