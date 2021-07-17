import { useMemo, useRef } from 'react';

import { IExpandHooks } from '@/atomic/expand/interface';

/**
 * Generate Method
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.07.17
 */
export const Fn = (): IExpandHooks => {
  const ref = useRef<HTMLDivElement>();

  return useMemo(
    () => ({
      className: ``,
      height: 0,
      ref
    }),
    [ref]
  );
};
