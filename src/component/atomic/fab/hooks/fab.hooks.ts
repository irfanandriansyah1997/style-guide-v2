import { useEffect, useState } from 'react';

import {
  generateFABClassName,
  generateFABStyle
} from '@/atomic/fab/helper/fab.helper';
import { IFabStyling } from '@/atomic/fab/interface';
import { IFabHooks } from '@/atomic/fab/interface/fab-hooks.interface';
import { shallowEquals } from '@/helper/component.helper';

/**
 * FAB React Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
export const useFab = (
  stylingProps: Partial<IFabStyling>,
  classNameProps: string | undefined
): IFabHooks => {
  const [className, setClassName] = useState(() =>
    generateFABClassName(stylingProps, classNameProps)
  );
  const [style, setStyle] = useState(() => generateFABStyle(stylingProps));

  useEffect(() => {
    const response = generateFABClassName(stylingProps, classNameProps);

    if (response !== className) setClassName(response);
  }, [stylingProps, classNameProps, className]);

  useEffect(() => {
    const response = generateFABStyle(stylingProps);

    if (!shallowEquals(response, style)) setStyle(response);
  }, [stylingProps, style]);

  return {
    className,
    isExtended: stylingProps.shape === `extended`,
    style
  };
};
