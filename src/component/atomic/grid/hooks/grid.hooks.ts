import {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  generateClassNameItem,
  generateClassNameWrapper,
  generateStyleItem,
  generateStyleWrapper
} from '@/atomic/grid/helper/grid.helper';
import {
  IGridItemHooks,
  IGridItemProps,
  IGridRowHooks,
  IGridRowProps
} from '@/atomic/grid/interface';
import { shallowEquals } from '@/helper/component.helper';

/**
 * Use Grid Item
 * @description generate label on pagination component
 * @param {ReactNode} children - children props
 * @returns {IReactPaginationContent}
 */
export const useGridItem = ({
  className: customClassName,
  lg,
  md,
  order,
  size,
  sm,
  spaceEachItem,
  xl,
  xs
}: IGridItemProps): IGridItemHooks => {
  const [style, setStyle] = useState<CSSProperties>(
    generateStyleItem(spaceEachItem, order)
  );
  const [className, setClassName] = useState<string>(
    generateClassNameItem(
      size,
      {
        lg,
        md,
        sm,
        xl,
        xs
      },
      customClassName
    )
  );

  const onChangeStyle = useCallback(
    (value: CSSProperties) => {
      setStyle(
        (): CSSProperties => {
          if (!shallowEquals(style, value)) return value;

          return style;
        }
      );
    },
    [style, setStyle]
  );

  const onChangeClassName = useCallback(
    (value: string) => {
      setClassName((): string => {
        if (!shallowEquals(className, value)) return value;

        return className;
      });
    },
    [className, setClassName]
  );

  useEffect(() => {
    onChangeStyle(generateStyleItem(spaceEachItem, order));
  }, [order, spaceEachItem, onChangeStyle]);

  useEffect(() => {
    onChangeClassName(
      generateClassNameItem(
        size,
        {
          lg,
          md,
          sm,
          xl,
          xs
        },
        customClassName
      )
    );
  }, [customClassName, lg, md, onChangeClassName, size, sm, xl, xs]);

  return useMemo(
    () => ({
      className,
      style
    }),
    [style, className]
  );
};

/**
 * Use Grid Row Content
 * @description generate label on pagination component
 * @param {ReactNode} children - children props
 * @returns {IReactPaginationContent}
 */
export const useGridRow = ({
  className: customClassName,
  ...res
}: IGridRowProps): IGridRowHooks => {
  const [style, setStyle] = useState<CSSProperties>(generateStyleWrapper(res));
  const [className, setClassName] = useState<string>(
    generateClassNameWrapper(customClassName)
  );

  const onChangeStyle = useCallback(
    (value: CSSProperties) => {
      setStyle(
        (): CSSProperties => {
          if (!shallowEquals(style, value)) return value;

          return style;
        }
      );
    },
    [style, setStyle]
  );

  const onChangeClassName = useCallback(
    (value: string) => {
      setClassName((): string => {
        if (!shallowEquals(className, value)) return value;

        return className;
      });
    },
    [className, setClassName]
  );

  useEffect(() => {
    onChangeStyle(generateStyleWrapper({ ...res }));
  }, [res, onChangeStyle]);

  useEffect(() => {
    onChangeClassName(generateClassNameWrapper(customClassName));
  }, [customClassName, onChangeClassName]);

  return useMemo(
    () => ({
      className,

      style
    }),
    [style, className]
  );
};
