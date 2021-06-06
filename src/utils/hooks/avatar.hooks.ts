import { useEffect, useState } from 'react';

import { AVATAR_SIZE_PRESET } from '@/constant/size';
import { getterSize } from '@/helper/component.helper';
import { IImageSizeType } from '@/interface/general';

/**
 * Use Avatar
 * @description main purpose this react hook it's for generate avatar component size based on `unformattedSize` param
 * @param {number | IImageSizeType} unformattedSize -  size avatar component, maybe on param contains text / number
 * @return Record<string, number>
 */
export const useAvatar = (unformattedSize: number | IImageSizeType) => {
  const [size, setSize] = useState<number>(
    parseInt(
      `${getterSize<IImageSizeType>(unformattedSize, AVATAR_SIZE_PRESET)}`,
      10
    )
  );

  useEffect(() => {
    setSize(
      parseInt(
        `${getterSize<IImageSizeType>(unformattedSize, AVATAR_SIZE_PRESET)}`,
        10
      )
    );
  }, [unformattedSize]);

  return {
    size
  };
};
