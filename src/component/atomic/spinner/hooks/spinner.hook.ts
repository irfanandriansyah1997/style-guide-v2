import { verifiedIsNotEmpty } from '@99/helper';
import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  generateClassnameContainer,
  generateClassnameContent
} from '@/atomic/spinner/helper/spinner.helper';
import {
  ISpinnerIndicatorHooks,
  ISpinnerProps
} from '@/atomic/spinner/interface';
import { shallowEquals } from '@/helper/component.helper';

/**
 * Spinner Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.21
 */
export const useSpinner = ({
  children,
  className,
  spinning
}: ISpinnerProps): string => {
  const [wrapperClassName, setWrapperClassName] = useState<string>(
    generateClassnameContainer(className, children, spinning)
  );

  const onChangeWrapper = useCallback(
    (value: string): void => {
      setWrapperClassName(() => {
        if (!shallowEquals(value, wrapperClassName)) return value;

        return wrapperClassName;
      });
    },
    [wrapperClassName]
  );

  useEffect(() => {
    onChangeWrapper(generateClassnameContainer(className, children, spinning));
  }, [children, className, onChangeWrapper, spinning]);

  return useMemo(() => wrapperClassName, [wrapperClassName]);
};

/**
 * Spinner Indicator Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.21
 */
export const useSpinnerIndicator = ({
  className,
  spinning,
  withChildren
}: ISpinnerIndicatorHooks): string => {
  const [contentClassName, setContentClassName] = useState<string>(
    generateClassnameContent({
      className,
      spinning,
      withChildren
    })
  );

  const onChangeContent = useCallback(
    (value: string): void => {
      setContentClassName(() => {
        if (verifiedIsNotEmpty(value) && !verifiedIsNotEmpty(contentClassName))
          return value;

        if (!verifiedIsNotEmpty(value) && verifiedIsNotEmpty(contentClassName))
          return value;

        if (!shallowEquals(value, contentClassName)) return value;

        return contentClassName;
      });
    },
    [contentClassName]
  );

  useEffect(() => {
    onChangeContent(
      generateClassnameContent({
        className,
        spinning,
        withChildren
      })
    );
  }, [className, onChangeContent, spinning, withChildren]);

  return useMemo(() => contentClassName, [contentClassName]);
};
