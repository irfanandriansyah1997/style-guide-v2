import { IMeterShape } from '@/atomic/meter/interface';

/**
 * Generate Rounded Type For Wrapper & Content Meter Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.19
 * @param {IMeterShape} shape - shape type meter component eg. rounded, shape or number for defined border radius size
 * @param {number}  height - height meter component
 * @returns {number}
 */
export const generateBorderRadiusMeter = (
  rounded: IMeterShape,
  height: number
): number => {
  switch (rounded) {
    case `rounded`:
      return height;

    case `square`:
      return 0;

    default:
      return rounded;
  }
};
