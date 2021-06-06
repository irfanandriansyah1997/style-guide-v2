import { FC } from 'react';

import {
  IImagePresetProps,
  IImageResponsiveProps
} from '@/atomic/image/interface';
import { useImageResponsive } from '@/utils/hooks/image.hooks';

import Image from '..';

/**
 * Image Responsive Item
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
export const ImagePreset: FC<IImagePresetProps> = () => null;

/**
 * Image Responsive
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
export const ImageResponsive: FC<IImageResponsiveProps> = ({
  children,
  ...props
}) => {
  const { src, srcSet } = useImageResponsive(children);

  return <Image {...props} src={src} srcSet={srcSet} />;
};

ImageResponsive.displayName = `Image.Responsive`;

ImagePreset.displayName = `Image.Preset`;
