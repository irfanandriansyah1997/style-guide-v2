import { objToString, verifiedIsNotEmpty } from '@99/helper';
import PropTypes from 'prop-types';
import { createElement, FC } from 'react';

import { ITextProps, ITextType } from '@/atomic/text/interface';
import style from '@/atomic/text/style/style.module.scss';

/**
 * Basic Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const BasicText: FC<ITextProps> = ({
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
      [`${style[`a-text`]}`]: true,
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

BasicText.propTypes = {
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

export default BasicText;
