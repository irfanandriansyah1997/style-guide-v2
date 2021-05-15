import PropTypes from 'prop-types';
import { FC, Validator } from 'react';

import {
  IAnchorTagProps,
  IButtonClassnameList,
  IButtonSize,
  IButtonThemeOption
} from '@/atomic/button/interface';

import { BasicButton, generateButtonClassName } from './basic.component';

/**
 * Anchor Tag Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
const AnchorTag: FC<IAnchorTagProps> = ({
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
  <a
    {...res}
    className={generateButtonClassName(`a`, {
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
      rounded={rounded}
      className={className}
      icon={icon}
      outline={outline}
      rtl={rtl}
      size={size}
      theme={theme}
    >
      {children}
    </BasicButton>
  </a>
);

AnchorTag.propTypes = {
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
  rounded: PropTypes.bool,
  rtl: PropTypes.bool,
  size: PropTypes.oneOf<IButtonSize>([`big`, `default`, `small`]),
  theme: PropTypes.oneOf<IButtonThemeOption>([`dark`, `light`])
};

AnchorTag.defaultProps = {
  className: undefined,
  icon: undefined,
  outline: false,
  rounded: false,
  rtl: false,
  size: `default`,
  theme: `light`
};

export default AnchorTag;
