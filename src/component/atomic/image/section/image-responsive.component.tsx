import { bulkVerifiedIsNotEmpty } from '@99/helper';
import PropTypes from 'prop-types';
import { FC } from 'react';

import Image from '@/atomic/image';
import { useImageResponsive } from '@/atomic/image/hooks/image.hooks';
import {
  IImagePresetProps,
  IImageResponsiveProps
} from '@/atomic/image/interface';

/**
 * Image Responsive Item
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
export const ImagePreset: FC<IImagePresetProps> = () => null;

ImagePreset.propTypes = {
  sizes: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
};

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

  if (bulkVerifiedIsNotEmpty([src, srcSet])) {
    return <Image {...props} src={src} srcSet={srcSet} />;
  }

  return null;
};

ImageResponsive.displayName = `Image.Responsive`;

ImagePreset.displayName = `Image.Preset`;
