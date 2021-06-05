import { ReactNode } from 'react';

import { IImageSizeType } from '@/interface/general';

/**
 * Avatar Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
export interface IAvatarProps {
  alt?: string; // if avatar contains icon will be convert to be abbr attribute on div otherwise will be rendered as alt attribute on image
  children?: ReactNode;
  className?: string; // as icon
  size: number | IImageSizeType;
  src?: string;
}
