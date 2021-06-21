import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { FC } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import styles from '@/atomic/spinner/style/style.module.scss';

import { useSpinner, useSpinnerIndicator } from './hooks/spinner.hook';
import { ISpinnerIndicatorProps, ISpinnerProps } from './interface';

/**
 * Spinner Indicator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.21
 */
const SpinnerIndicator: FC<ISpinnerIndicatorProps> = ({
  children,
  className,
  spinning,
  withChildren
}) => {
  const contentClassName = useSpinnerIndicator({
    className,
    spinning,
    withChildren
  });

  return (
    <Transition in={spinning} timeout={300} mountOnEnter unmountOnExit>
      {(state: TransitionStatus) => (
        <div
          className={objToString({
            [contentClassName]: true,
            [styles.fade]: true,
            [styles[`fade-${state}`]]: true
          })}
        >
          {verifiedIsNotEmpty(children) ? (
            <div className={styles[`a-spinner__circle-custom`]}>{children}</div>
          ) : (
            <svg
              className={styles[`a-spinner__circle`]}
              x="0px"
              y="0px"
              viewBox="0 0 150 150"
            >
              <circle
                className={styles[`a-spinner__circle__inner`]}
                cx="75"
                cy="75"
                r="60"
              />
            </svg>
          )}
        </div>
      )}
    </Transition>
  );
};

/**
 * Spinner Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.21
 */
const Spinner: FC<ISpinnerProps> = ({
  children,
  className,
  indicator,
  spinning,
  ...props
}) => {
  const classNameWrapper = useSpinner({
    children,
    className,
    indicator,
    spinning,
    ...props
  });

  return (
    <div className={classNameWrapper}>
      <SpinnerIndicator
        className={className?.content || undefined}
        spinning={spinning}
        withChildren={verifiedIsNotEmpty(children)}
      >
        {indicator}
      </SpinnerIndicator>
      {verifiedIsNotEmpty(children) && children ? (
        <div className={styles[`a-spinner__container`]}>{children}</div>
      ) : null}
    </div>
  );
};

export default Spinner;
