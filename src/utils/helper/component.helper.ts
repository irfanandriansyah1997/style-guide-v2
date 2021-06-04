import { verifiedIsNotEmpty } from '@99/helper';

/**
 * Check Classname Available
 * @param {Partial<IButtonClassnameList>} className - class name list on button component
 * @param {string} key - key on IButtonClassnameList interface
 * @returns {boolean}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export function checkClassnameAvailable<Props>(
  className: Partial<Props> | undefined,
  key: keyof Props
): boolean {
  return (
    verifiedIsNotEmpty(className) &&
    verifiedIsNotEmpty((className as Props)[key])
  );
}
