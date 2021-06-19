import { objToString, verifiedIsNotFalse } from '@99/helper';
import PropTypes from 'prop-types';
import { FC, Validator } from 'react';

import style from '@/atomic/checkbox/style/style.module.scss';
import { ICheckboxProps } from '@/atomic/selection/interface';
import BasicSelection from '@/atomic/selection/section/basic.component';
import { checkClassnameAvailable } from '@/helper/component.helper';
import { IToggleClassnameList } from '@/interface/selection';

/**
 * Checkbox Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
const Checkbox: FC<ICheckboxProps> = ({ active, className, ...props }) => (
  <BasicSelection
    {...props}
    active={active}
    className={{
      label: objToString({
        [`${style[`a-checkbox__text`]}`]: true,
        [`${className?.label}`]: checkClassnameAvailable<IToggleClassnameList>(
          className,
          `label`
        )
      }),
      selector: objToString({
        relative: true,
        [`${style[`a-checkbox__toggle`]}`]: true,
        [`${className?.selector}`]: checkClassnameAvailable<IToggleClassnameList>(
          className,
          `selector`
        )
      }),
      wrapper: objToString({
        [`${style[`a-checkbox`]}`]: true,
        [`${style[`a-checkbox--active`]}`]: verifiedIsNotFalse(active),
        [`${className?.wrapper}`]: checkClassnameAvailable<IToggleClassnameList>(
          className,
          `wrapper`
        )
      })
    }}
  />
);

Checkbox.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.shape({
    label: PropTypes.string,
    selector: PropTypes.string,
    wrapper: PropTypes.string
  }) as Validator<Partial<IToggleClassnameList>>
};

Checkbox.defaultProps = {
  active: false,
  className: undefined
};

export default Checkbox;
