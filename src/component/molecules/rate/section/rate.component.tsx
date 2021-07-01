import { FC, useEffect } from 'react';

import { IRateProps } from '@/molecules/rate/interface';

import { useRate } from '../hooks/rate.hooks';
import Star from './star.component';

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
    disabled
  } = props;
  const {
    dom: { focus },
    eventHandler: { onClick, onHover },
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
      <Star
        ref={this.saveRef(index)}
        index={index}
        count={count}
        disabled={disabled}
        allowHalf={allowHalf}
        value={hoverValue === undefined ? value : hoverValue}
        onClick={onClick}
        onHover={onHover}
        key={index}
        character={character}
        characterRender={characterRender}
        focused={focused}
      />
    );
  }

  return <div>Hello World</div>;
};

export default Rate;
