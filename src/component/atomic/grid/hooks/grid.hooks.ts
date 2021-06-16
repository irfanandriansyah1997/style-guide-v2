import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  generateClassNameWrapper,
  generateStyleWrapper,
  transformChildrenToGridItem
} from '@/atomic/grid/helper/grid.helper';
import {
  IGridItemHooks,
  IGridRowHooks,
  IGridRowProps,
  IGridSpaceItem
} from '@/atomic/grid/interface';
import { shallowEquals } from '@/helper/component.helper';

/**
 * Use Grid Row Content
 * @description generate label on pagination component
 * @param {ReactNode} children - children props
 * @returns {IReactPaginationContent}
 */
export const useGridItem = (
  children: ReactNode,
  space?: Partial<IGridSpaceItem> | number
): IGridItemHooks[] => {
  const [content, setContent] = useState<IGridItemHooks[]>(
    transformChildrenToGridItem(children, space)
  );

  const onChangeContent = useCallback(
    (value: IGridItemHooks[]) => {
      setContent((): IGridItemHooks[] => {
        if (content.length !== value.length) return value;

        const isChange = content.filter(
          (item, index) => !shallowEquals(item, value[index])
        );
        if (isChange.length > 0) return value;

        return content;
      });
    },
    [content, setContent]
  );

  useEffect(() => {
    onChangeContent(transformChildrenToGridItem(children, space));
  }, [children, space, onChangeContent]);

  return useMemo(() => content, [content]);
};

/**
 * Use Grid Row Content
 * @description generate label on pagination component
 * @param {ReactNode} children - children props
 * @returns {IReactPaginationContent}
 */
export const useGridRow = ({
  children,
  className: customClassName,
  ...res
}: IGridRowProps): IGridRowHooks => {
  const content = useGridItem(children);
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
      content,
      style
    }),
    [content, style, className]
  );
};
