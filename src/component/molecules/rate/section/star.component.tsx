import { objToString } from '@99/helper';
import {
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactElement,
  useCallback
} from 'react';

import { checkClassnameAvailable } from '@/helper/component.helper';
import { IStarClassNameList, IStarProps } from '@/molecules/rate/interface';

/**
 * Star Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.30
 */
const Star: FC<IStarProps> = (props) => {
  const {
    allowHalf,
    character,
    characterRender,
    className,
    count,
    disabled,
    focused,
    index,
    on,
    value
  } = props;

  /**
   * On Click Star
   * @param {MouseEvent<HTMLDivElement, MouseEvent>} event - event handling when user click
   * @returns {void}
   */
  const onClick: MouseEventHandler<HTMLDivElement> = (event): void => {
    on?.({
      event: `on-star-clicked`,
      payload: {
        event,
        index
      }
    });
  };

  /**
   * Event listener when user keypress enter
   * @param {KeyboardEvent<HTMLDivElement>} event - event handling when user press keyboard
   * @returns {void}
   */
  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event): void => {
    if (event.code === `Enter`) {
      on?.({
        event: `on-star-clicked`,
        payload: {
          event,
          index
        }
      });
    }
  };

  /**
   * Event listener when user keypress enter
   * @param {KeyboardEvent<HTMLDivElement>} event - event handling when user press keyboard
   * @returns {void}
   */
  const onHover: MouseEventHandler<HTMLDivElement> = (event): void => {
    on?.({
      event: `on-star-hovered`,
      payload: {
        event,
        index
      }
    });
  };

  /**
   * Generate Classname
   * @returns {string}
   */
  const generateClassName = useCallback((): string => {
    let response = ``;
    const offsetValue = index + 1;

    if (value === 0 && index === 0 && focused) {
      response += objToString({
        'm-star--focused': true,
        [`${className?.focused}`]: checkClassnameAvailable<IStarClassNameList>(
          className,
          `focused`
        )
      });
    } else if (allowHalf && value + 0.5 >= offsetValue && value < offsetValue) {
      response += objToString({
        'm-star--active': true,
        'm-star--focused': focused,
        'm-star--half': true,
        [`${className?.active}`]: checkClassnameAvailable<IStarClassNameList>(
          className,
          `active`
        ),
        [`${className?.focused}`]:
          checkClassnameAvailable<IStarClassNameList>(className, `focused`) &&
          focused,
        [`${className?.halfSelection}`]: checkClassnameAvailable<IStarClassNameList>(
          className,
          `halfSelection`
        )
      });
    } else {
      const focusedCondition = offsetValue === value && focused;
      const fullCondition = offsetValue <= value;
      const halfCondition = !fullCondition;

      response += objToString({
        'm-star--focused': focusedCondition,
        'm-star--full': fullCondition,
        'm-star--half': halfCondition,
        [`${className?.focused}`]:
          checkClassnameAvailable<IStarClassNameList>(className, `focused`) &&
          focusedCondition,
        [`${className?.fullSelection}`]:
          checkClassnameAvailable<IStarClassNameList>(
            className,
            `fullSelection`
          ) && fullCondition,
        [`${className?.halfSelection}`]:
          checkClassnameAvailable<IStarClassNameList>(
            className,
            `halfSelection`
          ) && halfCondition
      });
    }

    return response;
  }, [allowHalf, className, focused, index, value]);

  const characterNode =
    typeof character === `function` ? character(props) : character;

  let component: ReactElement = (
    <li className={generateClassName()}>
      <div
        onClick={disabled ? undefined : onClick}
        onKeyDown={disabled ? undefined : onKeyDown}
        onMouseMove={disabled ? undefined : onHover}
        role="radio"
        aria-checked={value > index ? `true` : `false`}
        aria-posinset={index + 1}
        aria-setsize={count}
        tabIndex={disabled ? -1 : 0}
      >
        <div
          className={objToString({
            'm-star__first': true,
            [`${className?.first}`]: checkClassnameAvailable<IStarClassNameList>(
              className,
              `first`
            )
          })}
        >
          {characterNode}
        </div>
        <div
          className={objToString({
            'm-star__second': true,
            [`${className?.second}`]: checkClassnameAvailable<IStarClassNameList>(
              className,
              `second`
            )
          })}
        >
          {characterNode}
        </div>
      </div>
    </li>
  );

  if (characterRender) {
    component = characterRender(component as React.ReactElement, props);
  }

  return component as ReactElement;
};

export default Star;
