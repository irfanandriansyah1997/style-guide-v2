import { Property } from 'csstype';
import { ImgHTMLAttributes } from 'react';

/**
 * Image Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
export type IImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'style'> & {
  objectFit?: Property.ObjectFit;
  shape: IImageShapeType;
};

/**
 * Image Shape Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
export type IImageShapeType =
  | 'circle'
  | 'square'
  | 'rounded'
  | 'rounded-bottom'
  | 'rounded-left'
  | 'rounded-top'
  | 'rounded-right';
