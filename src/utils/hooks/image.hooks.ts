import { ReactNode, useEffect, useState } from 'react';

import { transformChildrenToImageResponsive } from '@/helper/image.helper';
import { IImageResponsive } from '@/interface/general/image.interface';

/**
 * Image Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @description generate src and srcset for responsive image purpose
 * @since 2021.06.06
 */
export const useImageResponsive = (
  children: ReactNode
): Partial<IImageResponsive> => {
  const [image, setImageProps] = useState<Partial<IImageResponsive>>(
    transformChildrenToImageResponsive(children)
  );

  useEffect(() => {
    setImageProps(transformChildrenToImageResponsive(children));
  }, [children]);

  return image;
};
