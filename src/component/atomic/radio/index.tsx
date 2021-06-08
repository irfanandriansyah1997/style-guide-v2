import { objToString, verifiedIsNotFalse } from '@99/helper';
import PropTypes from 'prop-types';
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
    active={active}
    className={{
      label: objToString({
        [`${style[`a-radio__text`]}`]: true,
        [`${
          className ? className.label : undefined
        }`]: checkClassnameAvailable<IToggleClassnameList>(className, `label`)
      }),
      selector: objToString({
        relative: true,
        [`${style[`a-radio__toggle`]}`]: true,
        [`${
          className ? className.selector : undefined
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

Radio.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.shape({})
};

Radio.defaultProps = {
  active: false,
  className: undefined
};

export default Radio;
