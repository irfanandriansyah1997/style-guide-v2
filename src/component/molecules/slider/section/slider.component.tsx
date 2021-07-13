import { objToString, verifiedIsNotEmpty } from '@99/helper';
import RCSlider from 'rc-slider';
import { FC } from 'react';

import { checkClassnameAvailable } from '@/helper/component.helper';
import {
  IBasicSliderClassname as ClassNameList,
  IHandleProps,
  ISliderProps
} from '@/molecules/slider/interface';

import 'rc-slider/assets/index.css';
import Handler from './handle.component';

/**
 * Slider Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
const Slider: FC<ISliderProps> = ({ className, ...res }) => (
  <RCSlider
    {...res}
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

export default Slider;
