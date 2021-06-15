import { ReactNode, useCallback, useEffect, useState } from 'react';

import { transformChildrenToImageResponsive } from '@/atomic/image/helper/image.helper';
import { shallowEquals } from '@/helper/component.helper';
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

  const onChangeImage = useCallback(
    (value: Partial<IImageResponsive>) => {
      setImageProps(
        (): Partial<IImageResponsive> => {
          if (!shallowEquals(image, value)) return value;

          return image;
        }
      );
    },
    [setImageProps, image]
  );

  useEffect(() => {
    onChangeImage(transformChildrenToImageResponsive(children));
  }, [children, onChangeImage]);

  return image;
};
