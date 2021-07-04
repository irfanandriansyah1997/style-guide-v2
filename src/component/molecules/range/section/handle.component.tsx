import { objToString, verifiedIsNotEmpty } from '@99/helper';
import {
  FC,
  LegacyRef,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import { IHandleRangeProps } from '@/molecules/range/interface';
import styles from '@/molecules/range/style/style.module.scss';
/**
 * Handle Range Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.04
 */
const HandleRange: FC<IHandleRangeProps> = ({ max, min, position, value }) => {
  const ref = useRef<HTMLDivElement>();
  const [isFocused, setIsFocused] = useState(false);
  const handleMouseUp = useCallback(() => {
    if (document.activeElement === ref.current) setIsFocused(true);
  }, []);
  const handleMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    ref.current?.focus();
  }, []);

  useEffect(() => {
    document.addEventListener(`mouseup`, handleMouseUp);

    return () => document.removeEventListener(`mouseup`, handleMouseUp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handle When Blur
   * @returns {void}
   */
  const handleBlur = () => {
    setIsFocused(false);
  };

  /**
   * Handle When Key Down
   * @returns {void}
   */
  const handleKeyDown = () => {
    setIsFocused(false);
  };

  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      className={objToString({
        absolute: true,
        [styles[`m-range__handle`]]: true,
        [styles[`m-range__handle--focus`]]: isFocused
      })}
      style={{
        left: verifiedIsNotEmpty(position) ? `${position}%` : undefined,
        right: `auto`,
        transform: `translateX(-50%)`
      }}
      tabIndex={0}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-label="handle-range"
    />
  );
};

export default HandleRange;
