import { objToString } from '@99/helper';
import { FC, LegacyRef, useEffect } from 'react';

import { IRateProps } from '@/molecules/rate/interface';

import { useRate } from './hooks/rate.hooks';
import Star from './section/star.component';
import styles from './style/style.module.scss';

/**
 * Rate Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.01
 */
const Rate: FC<IRateProps> = (props) => {
  const {
    allowHalf,
    autoFocus,
    character,
    characterRender,
    count,
    direction,
    disabled,
    tabIndex
  } = props;
  const {
    dom: { focus },
    eventHandler: {
      onBlur,
      onClick,
      onFocus,
      onHover,
      onKeyDown,
      onMouseLeave
    },
    ref: { rate, star },
    state: { focused, hoverValue, value }
  } = useRate(props);

  useEffect(() => {
    if (autoFocus && !disabled) {
      focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stars = [];

  for (let index = 0; index < count; index += 1) {
    stars.push(
      <Star.WithRef
        ref={(item) => {
          if (item !== null) star.current[index] = item;
        }}
        index={index}
        count={count}
        disabled={disabled}
        allowHalf={allowHalf}
        value={hoverValue === undefined ? value : hoverValue}
        key={index}
        character={character}
        characterRender={characterRender}
        focused={focused}
        on={(payload) => {
          switch (payload.event) {
            case `on-star-clicked`:
              onClick(payload);
              break;

            case `on-star-hovered`:
              onHover(payload);
              break;

            default:
              break;
          }
        }}
      />
    );
  }

  return (
    <ul
      className={objToString({
        [`${styles[`m-rate`]}`]: true,
        [`${styles[`m-rate--disabled`]}`]: disabled,
        [`${styles[`m-rate--rtl`]}`]: direction === `rtl`
      })}
      onMouseLeave={disabled ? undefined : onMouseLeave}
      tabIndex={disabled ? -1 : tabIndex}
      onFocus={disabled ? undefined : onFocus}
      onBlur={disabled ? undefined : onBlur}
      onKeyDown={disabled ? undefined : onKeyDown}
      ref={rate as LegacyRef<HTMLUListElement>}
      role="radiogroup"
    >
      {stars}
    </ul>
  );
};

Rate.defaultProps = {
  allowClear: true,
  allowHalf: false,
  character: `★`,
  count: 5,
  defaultValue: 0,
  direction: `ltr`,
  tabIndex: 0
};

export default Rate;
