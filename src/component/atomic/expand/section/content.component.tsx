import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { FC, LegacyRef } from 'react';

import { useExpandContext } from '@/atomic/expand/hooks/expand.hooks';
import { IExpandContentProps } from '@/atomic/expand/interface';
import styles from '@/atomic/expand/style/style.module.scss';

/**
 * Expand Content
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.17
 */
export const ExpandContent: FC<IExpandContentProps> = ({
  children,
  className
}) => {
  const {
    state: { height, ref }
  } = useExpandContext();

  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      style={{ maxHeight: height, overflow: `hidden` }}
      className={objToString({
        relative: true,
        [styles[`a-expand__content`]]: true,
        [`${className}`]: verifiedIsNotEmpty(className)
      })}
    >
      {children}
    </div>
  );
};

/**
 * Expand Selector
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.17
 */
export const ExpandSelector: FC<IExpandContentProps> = ({
  children,
  className
}) => {
  const {
    action: { toggleExpand }
  } = useExpandContext();

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyPress={undefined}
      onClick={(e): void => {
        e.preventDefault();
        toggleExpand();
      }}
      className={objToString({
        [styles[`a-expand__selector`]]: true,
        relative: true,
        [`${className}`]: verifiedIsNotEmpty(className)
      })}
    >
      {children}
    </div>
  );
};
