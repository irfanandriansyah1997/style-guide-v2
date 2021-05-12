import PropTypes from 'prop-types';
import { FC, Validator } from 'react';

import './style/style.scss';
import TextComponent from '../text';
import { IButtonProps } from './interface';

/**
 * Primary UI component for user interaction
 */
export const Button: FC<IButtonProps> = ({
  backgroundColor,
  label,
  primary,
  size,
  ...props
}) => {
  const mode = primary
    ? `storybook-button--primary`
    : `storybook-button--secondary`;
  return (
    <button
      type="button"
      className={[`storybook-button`, `storybook-button--${size}`, mode].join(
        ` `
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      <TextComponent.Span>{label}</TextComponent.Span>
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  size: PropTypes.oneOf([`small`, `medium`, `large`]) as Validator<
    'small' | 'medium' | 'large'
  >
};

Button.defaultProps = {
  backgroundColor: undefined,
  onClick: undefined,
  primary: false,
  size: `medium`
};
