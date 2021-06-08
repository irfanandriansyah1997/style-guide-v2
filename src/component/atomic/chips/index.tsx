import { objToString } from '@99/helper';
import PropTypes from 'prop-types';
import { FC, Validator } from 'react';

import styles from '@/atomic/chips/style/style.module.scss';
import Tags from '@/atomic/tags';
import { checkClassnameAvailable } from '@/helper/component.helper';

import { IChipsClassnameList as List, IChipsProps } from './interface';

/**
 * Chips Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
const Chips: FC<IChipsProps> = ({ className, label, on, outline }) => (
  <div
    className={objToString({
      [styles[`a-chips`]]: true,
      [`${
        className ? className.wrapper : undefined
      }`]: checkClassnameAvailable<List>(className, `wrapper`)
    })}
  >
    <Tags
      inverted
      theme="dark"
      outline={outline}
      className={objToString({
        [`${
          className ? className.content : undefined
        }`]: checkClassnameAvailable<List>(className, `content`)
      })}
    >
      {label}
      <button
        type="button"
        aria-label="close"
        onClick={(e) =>
          on?.({
            event: `on-click-close-icon`,
            payload: e
          })
        }
        style={{ height: 16, width: 16 }}
        className={objToString({
          flex: true,
          'flex-align-center': true,
          'flex-justify-center': true,
          relative: true,
          [styles[`a-chips__close`]]: true,
          [`${
            className ? className.close : undefined
          }`]: checkClassnameAvailable<List>(className, `close`)
        })}
      />
    </Tags>
  </div>
);

Chips.propTypes = {
  className: PropTypes.shape({
    close: PropTypes.string,
    content: PropTypes.string,
    text: PropTypes.string
  }) as Validator<List>,
  label: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
  outline: PropTypes.bool
};

Chips.defaultProps = {
  className: undefined,
  outline: false
};

export default Chips;
