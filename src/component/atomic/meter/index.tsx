import { objToString } from '@99/helper';
import PropTypes from 'prop-types';
import { FC, memo, useCallback, useEffect, useState, Validator } from 'react';

import { STYLE_GUIDE_COLOR } from '@/constant/color';
import {
  checkClassnameAvailable,
  shallowEquals
} from '@/helper/component.helper';

import { generateBorderRadiusMeter } from './helper/meter.helper';
import styles from './style/style.module.scss';
import { IMeterClassnameList, IMeterProps, IMeterShape } from './interface';

/**
 * Meter Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.19
 */
const Meter: FC<IMeterProps> = ({
  bgColor: backgroundColor,
  borderRadius,
  className,
  color,
  height,
  value
}) => {
  const [rounded, setRounded] = useState(
    generateBorderRadiusMeter(borderRadius as IMeterShape, value)
  );

  const onChangeContent = useCallback(
    (value: number) => {
      setRounded(() => {
        if (value !== rounded) return value;

        return rounded;
      });
    },
    [rounded]
  );

  useEffect(() => {
    onChangeContent(
      generateBorderRadiusMeter(borderRadius as IMeterShape, value)
    );
  }, [height, borderRadius, value, onChangeContent]);

  return (
    <div
      className={objToString({
        [`${className?.wrapper}`]: checkClassnameAvailable<IMeterClassnameList>(
          className,
          `wrapper`
        )
      })}
      style={{
        backgroundColor,
        borderRadius: rounded,
        height,
        overflow: `hidden`
      }}
    >
      <div
        className={objToString({
          [styles[`a-meter__value`]]: true,
          [`${className?.content}`]: checkClassnameAvailable<IMeterClassnameList>(
            className,
            `content`
          )
        })}
        style={{
          backgroundColor: color,
          borderRadius: rounded,
          height,
          width: `${value}%`
        }}
      />
    </div>
  );
};

Meter.propTypes = {
  bgColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([`rounded`, `square`])
  ]) as Validator<IMeterShape | null | undefined>,
  color: PropTypes.string,
  height: PropTypes.number,
  value: PropTypes.number.isRequired
};

Meter.defaultProps = {
  bgColor: STYLE_GUIDE_COLOR.light200,
  borderRadius: `rounded`,
  color: STYLE_GUIDE_COLOR.info500,
  height: 10
};

export default memo(Meter, (prev, next) => shallowEquals(prev, next));
