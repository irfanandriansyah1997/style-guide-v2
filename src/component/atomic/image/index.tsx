import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { Property } from 'csstype';
import PropTypes from 'prop-types';
import { Validator } from 'react';

import style from '@/atomic/image/style/style.module.scss';

import {
  ImagePreset,
  ImageResponsive
} from './section/image-responsive.component';
import { IImageDefaultExport, IImageShapeType } from './interface';

/**
 * Image Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
const Image: IImageDefaultExport = ({
  alt,
  className,
  height,
  objectFit,
  shape,
  width,
  ...props
}) => (
  <img
    {...props}
    style={{
      height,
      objectFit,
      width
    }}
    alt={alt}
    className={objToString({
      [`${style[`a-image`]}`]: true,
      [`${style[`a-image--shape-${shape}`]}`]: verifiedIsNotEmpty(shape),
      [`${className}`]: verifiedIsNotEmpty(className)
    })}
  />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  objectFit: PropTypes.oneOf([
    `-moz-initial`,
    `inherit`,
    `initial`,
    `revert`,
    `unset`,
    `contain`,
    `cover`,
    `fill`,
    `none`,
    `scale-down`
  ]) as Validator<Property.ObjectFit> | undefined,
  shape: PropTypes.oneOf([
    `circle`,
    `square`,
    `rounded`,
    `rounded-bottom`,
    `rounded-left`,
    `rounded-top`,
    `rounded-right`
  ]).isRequired as Validator<IImageShapeType>,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Image.defaultProps = {
  className: undefined,
  height: undefined,
  objectFit: `initial`,
  shape: `square`,
  width: undefined
};

Image.Responsive = ImageResponsive;

Image.Preset = ImagePreset;

export default Image;
