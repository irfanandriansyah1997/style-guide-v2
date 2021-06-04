import { objToString, verifiedIsNotFalse } from '@99/helper';
import { FC } from 'react';

import { ICheckboxProps } from '@/atomic/selection/interface';
import style from '@/atomic/selection/style/checkbox.module.scss';
import { checkClassnameAvailable } from '@/helper/component.helper';
import { IToggleClassnameList } from '@/interface/selection';

import BasicSelection from './section/basic.component';

/**
 * Checkbox Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
const Checkbox: FC<ICheckboxProps> = ({ active, className, ...props }) => (
  <BasicSelection
    {...props}
    className={{
      label: objToString({
        [`${style[`a-checkbox__text`]}`]: true,
        [`${
          className ? className.wrapper : undefined
        }`]: checkClassnameAvailable<IToggleClassnameList>(className, `label`)
      }),
      selector: objToString({
        [`${style[`a-checkbox__toggle`]}`]: true,
        [`${
          className ? className.wrapper : undefined
        }`]: checkClassnameAvailable<IToggleClassnameList>(
          className,
          `selector`
        )
      }),
      wrapper: objToString({
        [`${style[`a-checkbox`]}`]: true,
        [`${style[`a-checkbox--active`]}`]: verifiedIsNotFalse(active),
        [`${
          className ? className.wrapper : undefined
        }`]: checkClassnameAvailable<IToggleClassnameList>(className, `wrapper`)
      })
    }}
  />
);

export default Checkbox;
