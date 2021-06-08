import {
  objToString,
  verifiedIsNotEmpty,
  verifiedIsNotFalse
} from '@99/helper';
import PropTypes from 'prop-types';
import { FC } from 'react';

import styles from '@/atomic/tags/style/style.module.scss';

import {
  ITagsProps,
  ITagsSize,
  ITagsSize as Size,
  ITagsThemeOption,
  ITagsThemeOption as Theme
} from './interface';

const TAGS_THEME: Theme[] = [`dark`, `light`];

const TAGS_SIZE: Size[] = [`default`, `small`];

/**
 * Tags Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.07
 */
const Tags: FC<ITagsProps> = ({
  children,
  className,
  inverted,
  on,
  outline,
  rounded,
  rtl,
  size,
  theme
}) => (
  <div
    className={objToString({
      [styles[`a-tags`]]: true,
      [styles[`a-tags--inverted`]]:
        verifiedIsNotFalse(inverted) && !verifiedIsNotFalse(outline),
      [styles[`a-tags--outline`]]: verifiedIsNotFalse(outline),
      [styles[`a-tags--rounded`]]: verifiedIsNotFalse(rounded),
      [styles[`a-tags--size-${size}`]]:
        verifiedIsNotEmpty(size) && TAGS_SIZE.includes(size as Size),
      [styles[`a-tags--theme-${theme}`]]:
        verifiedIsNotEmpty(theme) && TAGS_THEME.includes(theme as Theme),
      'flex-align-center': true,
      'flex-justify-content': true,
      'flex-row-reverse': verifiedIsNotFalse(rtl),
      'inline-flex': true,
      [`${className}`]: verifiedIsNotEmpty(className)
    })}
    role="button"
    tabIndex={0}
    onKeyDown={undefined}
    onClick={(e) =>
      on?.({
        event: `on-click`,
        payload: e
      })
    }
  >
    {children}
  </div>
);

Tags.propTypes = {
  className: PropTypes.string,
  inverted: PropTypes.bool,
  on: PropTypes.func,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  rtl: PropTypes.bool,
  size: PropTypes.oneOf<ITagsSize>([`default`, `small`]),
  theme: PropTypes.oneOf<ITagsThemeOption>([`dark`, `light`])
};

Tags.defaultProps = {
  className: undefined,
  inverted: false,
  on: undefined,
  outline: false,
  rounded: false,
  rtl: false,
  size: `default`,
  theme: `light`
};

export default Tags;
