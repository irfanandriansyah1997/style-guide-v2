import { objToString, verifiedIsNotEmpty } from '@99/helper';
import PropTypes from 'prop-types';
import { createElement, FC } from 'react';

import { ITextProps, ITextType } from '@/component/atomic/text/interface';
import style from '@/component/atomic/text/style/style.module.scss';

/**
 * Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const TextComponent: FC<ITextProps> = ({
  className,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  tag,
  textAlign,
  textDecoration,
  ...res
}) =>
  createElement(tag, {
    ...res,
    className: objToString({
      [`${style[`ui-atomic-text`]}`]: true,
      [`${className}`]: verifiedIsNotEmpty(className)
    }),
    style: {
      color,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight: verifiedIsNotEmpty(lineHeight)
        ? `${lineHeight}px`
        : undefined,
      textAlign,
      textDecoration
    }
  });

TextComponent.propTypes = {
  tag: PropTypes.oneOf<ITextType>([
    `h1`,
    `h2`,
    `h3`,
    `h4`,
    `h5`,
    `h6`,
    `p`,
    `span`
  ]).isRequired
};

export default TextComponent;