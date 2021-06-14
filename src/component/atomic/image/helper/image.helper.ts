import { verifiedIsNotEmpty, verifiedKeyIsExist } from '@99/helper';
import { ReactElement, ReactNode } from 'react';

import { IImagePresetProps } from '@/atomic/image/interface';
import { ImagePreset } from '@/atomic/image/section/image-responsive.component';
import { transformChildrenToArray } from '@/helper/component.helper';
import { IImageResponsive } from '@/interface/general';

/**
 * Transform Children To Image Responsive Object
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.06
 */
export const transformChildrenToImageResponsive = (
  children: ReactNode
): Partial<IImageResponsive> => {
  const props = transformChildrenToArray<IImagePresetProps>(children)(
    (child) => {
      if (
        verifiedIsNotEmpty(child) &&
        verifiedKeyIsExist((child as unknown) as Record<string, any>, `type`)
      ) {
        const { props, type } = child as ReactElement;

        if ([ImagePreset].includes(type as any)) {
          return props;
        }
      }

      return undefined;
    }
  ).sort((a, b) => a.sizes - b.sizes);

  return {
    src: props.length > 0 ? props[0].src : undefined,
    srcSet: (props || []).map(({ sizes, src }) => `${src} ${sizes}w`).join(`,`)
  };
};
