import { objToString, verifiedIsNotFalse } from '@99/helper';
import { FC } from 'react';

import style from '@/atomic/radio/style/style.module.scss';
import { IRadioProps } from '@/atomic/selection/interface';
import BasicSelection from '@/atomic/selection/section/basic.component';
import { checkClassnameAvailable } from '@/helper/component.helper';
import { IToggleClassnameList } from '@/interface/selection';

/**
 * Radio Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
const Radio: FC<IRadioProps> = ({ active, className, ...props }) => (
  <BasicSelection
    {...props}
    className={{
      label: objToString({
        [`${style[`a-radio__text`]}`]: true,
        [`${
          className ? className.wrapper : undefined
        }`]: checkClassnameAvailable<IToggleClassnameList>(className, `label`)
      }),
      selector: objToString({
        [`${style[`a-radio__toggle`]}`]: true,
        [`${
          className ? className.wrapper : undefined
        }`]: checkClassnameAvailable<IToggleClassnameList>(
          className,
          `selector`
        )
      }),
      wrapper: objToString({
        [`${style[`a-radio`]}`]: true,
        [`${style[`a-radio--active`]}`]: verifiedIsNotFalse(active),
        [`${
          className ? className.wrapper : undefined
        }`]: checkClassnameAvailable<IToggleClassnameList>(className, `wrapper`)
      })
    }}
  />
);

export default Radio;
