/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import { FC, Validator } from 'react';

import {
  IButtonClassnameList,
  IButtonSize,
  IButtonTagProps,
  IButtonThemeOption
} from '@/atomic/button/interface';

import { BasicButton, generateButtonClassName } from './basic.component';

/**
 * Button Tag Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
const ButtonTag: FC<IButtonTagProps> = ({
  children,
  className,
  icon,
  outline,
  rounded,
  rtl,
  size,
  theme,
  ...res
}) => (
  <button
    {...res}
    className={generateButtonClassName(`button`, {
      className,
      icon,
      outline,
      rounded,
      rtl,
      size,
      theme
    })}
  >
    <BasicButton
      className={className}
      icon={icon}
      rounded={rounded}
      outline={outline}
      rtl={rtl}
      size={size}
      theme={theme}
    >
      {children}
    </BasicButton>
  </button>
);

ButtonTag.propTypes = {
  className: PropTypes.shape({
    content: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    wrapper: PropTypes.string
  }) as Validator<Partial<IButtonClassnameList>>,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  outline: PropTypes.bool,
  rtl: PropTypes.bool,
  size: PropTypes.oneOf<IButtonSize>([`big`, `default`, `small`]),
  theme: PropTypes.oneOf<IButtonThemeOption>([`dark`, `light`])
};

ButtonTag.defaultProps = {
  className: {},
  icon: undefined,
  outline: false,
  rtl: false,
  size: `default`,
  theme: `light`
};

export default ButtonTag;
