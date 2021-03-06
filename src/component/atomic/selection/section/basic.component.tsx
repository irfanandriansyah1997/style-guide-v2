import { objToString } from '@99/helper';
import PropTypes from 'prop-types';
import { FC, memo, Validator } from 'react';

import { ISelectionProps } from '@/atomic/selection/interface';
import Text from '@/atomic/text';
import { ITextType } from '@/atomic/text/interface';
import { checkClassnameAvailable } from '@/helper/component.helper';
import { IToggleClassnameList } from '@/interface/selection';

/**
 * Basic Selection Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
const component: FC<ISelectionProps> = ({
  active,
  children,
  className,
  labelTag,
  on,
  value
}) => (
  <div
    className={objToString({
      flex: true,
      'flex-align-center': true,
      [`${className?.wrapper}`]: checkClassnameAvailable<IToggleClassnameList>(
        className,
        `wrapper`
      )
    })}
    role="button"
    tabIndex={0}
    onKeyDown={undefined}
    onClick={() =>
      on?.({
        event: `on-change-selection`,
        payload: {
          show: !active,
          value
        }
      })
    }
  >
    <div
      className={objToString({
        [`${className?.selector}`]: checkClassnameAvailable<IToggleClassnameList>(
          className,
          `selector`
        )
      })}
    />
    {children && (
      <Text
        className={objToString({
          [`${className?.label}`]: checkClassnameAvailable<IToggleClassnameList>(
            className,
            `label`
          )
        })}
        tag={labelTag as ITextType}
      >
        {children}
      </Text>
    )}
  </div>
);

component.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.shape({
    label: PropTypes.string,
    selector: PropTypes.string,
    wrapper: PropTypes.string
  }).isRequired as Validator<IToggleClassnameList>,
  labelTag: PropTypes.oneOf<ITextType>([
    `h1`,
    `h2`,
    `h3`,
    `h4`,
    `h5`,
    `h6`,
    `p`,
    `span`
  ]),
  on: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

component.defaultProps = {
  active: false,
  labelTag: `p`,
  on: undefined
};

const BasicSelection = memo(component);

export default BasicSelection;
