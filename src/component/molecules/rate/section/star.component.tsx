import { objToString } from '@99/helper';
import {
  forwardRef,
  KeyboardEventHandler,
  LegacyRef,
  MouseEventHandler,
  MutableRefObject,
  ReactElement,
  useCallback
} from 'react';

import { checkClassnameAvailable } from '@/helper/component.helper';
import {
  IStarClassNameList,
  IStarDefaultExport,
  IStarProps
} from '@/molecules/rate/interface';
import styles from '@/molecules/rate/style/style.module.scss';

/**
 * Star Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.30
 */
const Star: IStarDefaultExport = (props) => {
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
    refContainer,
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
    let response = `${styles[`m-star`]} `;
    const offsetValue = index + 1;

    if (value === 0 && index === 0 && focused) {
      response += objToString({
        [`${styles[`m-star--focused`]}`]: true,
        [`${className?.focused}`]: checkClassnameAvailable<IStarClassNameList>(
          className,
          `focused`
        )
      });
    } else if (allowHalf && value + 0.5 >= offsetValue && value < offsetValue) {
      response += objToString({
        [`${styles[`m-star--active`]}`]: true,
        [`${styles[`m-star--focused`]}`]: focused,
        [`${styles[`m-star--half`]}`]: true,
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
        [`${styles[`m-star--focused`]}`]: focusedCondition,
        [`${styles[`m-star--full`]}`]: fullCondition,
        [`${styles[`m-star--zero`]}`]: halfCondition,
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
    <li
      className={generateClassName()}
      ref={refContainer as LegacyRef<HTMLLIElement> | undefined}
    >
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
            [`${styles[`m-star__first`]}`]: true,
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
            [`${styles[`m-star__second`]}`]: true,
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

Star.WithRef = forwardRef<HTMLLIElement, IStarProps>((props, ref) => (
  <Star {...props} refContainer={ref as MutableRefObject<HTMLLIElement>} />
));

export default Star;
