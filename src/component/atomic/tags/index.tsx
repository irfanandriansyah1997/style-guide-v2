import {
  objToString,
  verifiedIsNotEmpty,
  verifiedIsNotFalse
} from '@99/helper';
import PropTypes from 'prop-types';
import { FC, Validator } from 'react';

import styles from '@/atomic/tags/style/style.module.scss';
import { checkClassnameAvailable } from '@/helper/component.helper';

import {
  ITagsClassnameList,
  ITagsClassnameList as List,
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
  onClick,
  outline,
  rounded,
  rtl,
  size,
  theme
}) => (
  <div
    className={objToString({
      [styles[`a-tags`]]: true,
      [styles[`a-tags--inverted`]]: verifiedIsNotFalse(inverted),
      [styles[`a-tags--outline`]]: verifiedIsNotFalse(outline),
      [styles[`a-tags--rounded`]]: verifiedIsNotFalse(rounded),
      [styles[`a-tags--rtl`]]: verifiedIsNotFalse(rtl),
      [styles[`a-tags--size-${size}`]]:
        verifiedIsNotEmpty(size) && TAGS_SIZE.includes(size as Size),
      [styles[`a-tags--theme-${theme}`]]:
        verifiedIsNotEmpty(theme) && TAGS_THEME.includes(theme as Theme),
      'flex-align-center': true,
      'flex-justify-content': true,
      'inline-flex': true,
      [`${
        className ? className.wrapper : undefined
      }`]: checkClassnameAvailable<List>(className, `wrapper`)
    })}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyPress={undefined}
  >
    <div
      className={objToString({
        flex: true,
        'flex-align-center': true,
        'flex-justify-center': true,
        'flex-row-reverse': verifiedIsNotFalse(rtl),
        [styles[`a-tags__content`]]: true,
        [`${
          className ? className.content : undefined
        }`]: checkClassnameAvailable<List>(className, `content`)
      })}
    >
      {children}
    </div>
  </div>
);

Tags.propTypes = {
  className: PropTypes.shape({
    content: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    wrapper: PropTypes.string
  }) as Validator<Partial<ITagsClassnameList>>,
  inverted: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  rtl: PropTypes.bool,
  size: PropTypes.oneOf<ITagsSize>([`default`, `small`]),
  theme: PropTypes.oneOf<ITagsThemeOption>([`dark`, `light`])
};

Tags.defaultProps = {
  className: undefined,
  inverted: false,
  onClick: undefined,
  outline: false,
  rounded: false,
  rtl: false,
  size: `default`,
  theme: `light`
};

export default Tags;
