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
  children,
  className,
  labelTag,
  onChangeSelection,
  value
}) => (
  <div
    className={objToString({
      flex: true,
      'flex-align-center': true,
      [`${
        className ? className.wrapper : undefined
      }`]: checkClassnameAvailable<IToggleClassnameList>(className, `wrapper`)
    })}
  >
    <div
      className={objToString({
        [`${
          className ? className.wrapper : undefined
        }`]: checkClassnameAvailable<IToggleClassnameList>(
          className,
          `selector`
        )
      })}
      role="button"
      tabIndex={0}
      aria-hidden="true"
      onClick={() => onChangeSelection?.(value)}
    />
    {children && (
      <Text
        className={objToString({
          [`${
            className ? className.wrapper : undefined
          }`]: checkClassnameAvailable<IToggleClassnameList>(className, `label`)
        })}
        tag={labelTag as ITextType}
      >
        {children}
      </Text>
    )}
  </div>
);

component.propTypes = {
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
  onChangeSelection: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

component.defaultProps = {
  labelTag: `p`,
  onChangeSelection: undefined
};

const BasicSelection = memo(component);

export default BasicSelection;
