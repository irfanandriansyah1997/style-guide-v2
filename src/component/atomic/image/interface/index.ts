import { Property } from 'csstype';
import { FC, ImgHTMLAttributes, ReactNode } from 'react';

/**
 * Image Default Export Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.06
 */
export type IImageDefaultExport = FC<IImageProps> & {
  Preset: FC<IImagePresetProps>;
  Responsive: FC<IImageResponsiveProps>;
};

/**
 * Image Preset Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
export interface IImagePresetProps {
  sizes: number;
  src: string;
}

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
 * Image Responsive Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
export interface IImageResponsiveProps
  extends Omit<IImageProps, 'src' | 'srcSet'> {
  children: ReactNode;
}

/**
 * Image Responsive Template Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.06
 */
export interface IImageResponsiveTemplate
  extends Omit<IImageResponsiveProps, 'children'> {
  imageDesktop: string;
  imageMobile: string;
  imageTableHorizontal: string;
  imageTablet: string;
}

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
