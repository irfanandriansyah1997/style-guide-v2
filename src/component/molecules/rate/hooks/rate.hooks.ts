import { verifiedIsNotEmpty } from '@99/helper';
import {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  useRef,
  useState
} from 'react';
import { findDOMNode } from 'react-dom';

import {
  IEventOnStarClicked,
  IEventOnStarHovered,
  IRateHooks,
  IRateProps
} from '../interface';
import Star from '../star';
import { getOffsetLeft } from '../util';

/**
 * Generate Method
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.07.01
 */
export const useRate = ({
  allowClear,
  allowHalf,
  count,
  defaultValue: defaultValueProps,
  direction,
  disabled,
  on,
  value: valueProps
}: IRateProps): IRateHooks => {
  const rateRef = useRef<HTMLUListElement>();
  const starRef = useRef<Star[]>([]);
  const [cleanedValue, setCleanedValue] = useState<number | undefined>(
    undefined
  );
  const [focused, setFocused] = useState<boolean>(false);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const [value, setValue] = useState<number>(
    valueProps || (defaultValueProps as number)
  );

  /**
   * Get Star DOM
   * @param {number} index - position index star on rate component
   * @returns {HTMLElement | undefined}
   */
  const getStarDOM = (index: number): HTMLElement | undefined => {
    // eslint-disable-next-line react/no-find-dom-node
    const element = findDOMNode(starRef.current?.[index]);

    if (verifiedIsNotEmpty(element)) {
      return element as HTMLElement;
    }

    return undefined;
  };

  /**
   * Get Star Value
   * @param {number} index - position index star on rate component
   * @param {number} x - x axis
   * @returns {number}
   */
  const getStarValue = (index: number, x: number) => {
    const reverse = direction === `rtl`;
    let currentValue = index + 1;
    const starEle = getStarDOM(index);

    if (allowHalf && starEle) {
      const leftDis = getOffsetLeft(starEle);
      const width = starEle.clientWidth;
      if (reverse && x - leftDis > width / 2) {
        currentValue -= 0.5;
      } else if (!reverse && x - leftDis < width / 2) {
        currentValue -= 0.5;
      }
    }

    return currentValue;
  };

  /**
   * Event Handling On Change Value
   * @param {number} value - value star
   * @returns {void}
   */
  const onChangeValue = (value: number) => {
    if (!verifiedIsNotEmpty(valueProps)) {
      setValue(value);
    }

    on({
      event: `on-change`,
      payload: {
        value
      }
    });
  };

  /**
   * Event Handling On Hover
   * @param {IEventOnStarHovered} param - event on star hovered
   * @returns {void}
   */
  const onHover: (param: IEventOnStarHovered) => void = ({
    payload: { event, index }
  }) => {
    const starValue: number = getStarValue(index, event.pageX);

    if (hoverValue !== cleanedValue) {
      setCleanedValue(undefined);
      setHoverValue(starValue);
    }

    on({
      event: `on-hover`,
      payload: { value: starValue }
    });
  };

  /**
   * On Mouse Leave
   * @param {IEventOnStarHovered} param - event on star hovered
   * @returns {void}
   */
  const onMouseLeave: MouseEventHandler<HTMLUListElement> = (): void => {
    setCleanedValue(undefined);
    setHoverValue(undefined);

    on({
      event: `on-hover`,
      payload: { value: undefined }
    });
  };

  /**
   * Event Handling On Clicked
   * @param {IEventOnStarClicked} param - event on star hovered
   * @returns {void}
   */
  const onClick: (param: IEventOnStarClicked) => void = ({
    payload: { event, index }
  }) => {
    const starValue: number = getStarValue(
      index,
      (event as React.MouseEvent).pageX
    );
    let isReset = false;
    if (allowClear) {
      isReset = starValue === value;
    }

    onMouseLeave({} as MouseEvent<HTMLUListElement>);
    onChangeValue(isReset ? 0 : starValue);
    setCleanedValue(isReset ? starValue : undefined);
  };

  /**
   * Event Handling When Focused On List Component
   * @returns {void}
   */
  const onFocus: FocusEventHandler<HTMLUListElement> = (): void => {
    setFocused(true);
    on({
      event: `on-focus`,
      payload: undefined
    });
  };

  /**
   * Event Handling When Focused On List Component
   * @returns {void}
   */
  const onBlur: FocusEventHandler<HTMLUListElement> = (): void => {
    setFocused(true);
    on({
      event: `on-focus`,
      payload: undefined
    });
  };

  /**
   * Event Handling When Push Keyboard Button On List Component
   * @param {KeyboardEvent<HTMLUListElement>} event - event handler
   * @returns {void}
   */
  const onKeyDown: KeyboardEventHandler<HTMLUListElement> = (event): void => {
    const { code, preventDefault } = event;
    const reverse = direction === `rtl`;
    let response = value;

    if (!reverse) {
      if (code === `ArrowRight` && value < count) {
        if (allowHalf) {
          response += 0.5;
        } else {
          response += 1;
        }
        onChangeValue(response);
      } else if (code === `ArrowLeft` && value > 0) {
        if (allowHalf) {
          response -= 0.5;
        } else {
          response -= 1;
        }
        onChangeValue(response);
      }

      preventDefault();
    }

    if (reverse) {
      if (code === `ArrowRight` && value > 0) {
        if (allowHalf) {
          response -= 0.5;
        } else {
          response -= 1;
        }
        onChangeValue(response);
      } else if (code === `ArrowLeft` && value < count) {
        if (allowHalf) {
          response += 0.5;
        } else {
          response += 1;
        }
        onChangeValue(response);
      }

      preventDefault();
    }

    on({
      event: `on-key-down`,
      payload: event
    });
  };

  /**
   * Make Focus Component
   * @returns {void}
   */
  const focus = () => {
    if (!disabled) {
      rateRef.current?.focus();
    }
  };

  /**
   * Make Blur Component
   * @returns {void}
   */
  const blur = () => {
    if (!disabled) {
      rateRef.current?.blur();
    }
  };

  return {
    dom: {
      blur,
      focus
    },
    eventHandler: {
      onBlur,
      onClick,
      onFocus,
      onHover,
      onKeyDown
    },
    ref: {
      rate: rateRef,
      star: starRef
    },
    state: {
      cleanedValue,
      focused,
      hoverValue,
      value
    }
  };
};
