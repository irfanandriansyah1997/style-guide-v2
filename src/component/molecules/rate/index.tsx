/* eslint-disable react/static-property-placement */
/* eslint-disable require-jsdoc-except/require-jsdoc */

import { objToString, verifiedIsNotEmpty } from '@99/helper';
import React from 'react';

import { findDOMNode } from '@/helper/component.helper';

import Star, { StarProps } from './star';
import { getOffsetLeft } from './util';

export interface RateProps {
  allowClear?: boolean;
  allowHalf?: boolean;
  autoFocus?: boolean;
  character?: React.ReactNode;
  characterRender?: (
    origin: React.ReactElement,
    props: StarProps
  ) => React.ReactNode;
  className?: string;
  count?: number;
  defaultValue?: number;
  direction?: string;
  disabled?: boolean;
  onBlur?: () => void;
  onChange?: (value: number) => void;
  onFocus?: () => void;
  onHoverChange?: (value: number) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  prefixCls?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  value?: number;
}

interface RateState {
  cleanedValue: number;
  focused: boolean;
  hoverValue?: number;
  value: number;
}

class Rate extends React.Component<RateProps, RateState> {
  static defaultProps = {
    allowClear: true,
    allowHalf: false,
    character: `★`,
    count: 5,
    defaultValue: 0,
    direction: `ltr`,
    onChange: noop,
    onHoverChange: noop,
    prefixCls: `rc-rate`,
    style: {},
    tabIndex: 0
  };

  stars: Record<string, Star>;

  rate: HTMLUListElement;

  constructor(props: RateProps) {
    super(props);
    let { value } = props;
    if (value === undefined) {
      value = props.defaultValue;
    }

    this.stars = {};

    this.state = {
      cleanedValue: null,
      focused: false,
      value
    };
  }

  componentDidMount() {
    const { autoFocus, disabled } = this.props;
    if (autoFocus && !disabled) {
      this.focus();
    }
  }

  onHover = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const { onHoverChange } = this.props;
    const hoverValue = this.getStarValue(index, event.pageX);
    const { cleanedValue } = this.state;
    if (hoverValue !== cleanedValue) {
      this.setState({
        cleanedValue: null,
        hoverValue
      });
    }
    onHoverChange?.(hoverValue);
  };

  onMouseLeave = () => {
    const { onHoverChange } = this.props;
    this.setState({
      cleanedValue: null,
      hoverValue: undefined
    });
    onHoverChange?.(undefined);
  };

  onClick = (event: React.MouseEvent | React.KeyboardEvent, index: number) => {
    const { allowClear } = this.props;
    const { value } = this.state;
    const newValue = this.getStarValue(
      index,
      (event as React.MouseEvent).pageX
    );
    let isReset = false;
    if (allowClear) {
      isReset = newValue === value;
    }
    this.onMouseLeave();
    this.changeValue(isReset ? 0 : newValue);
    this.setState({
      cleanedValue: isReset ? newValue : null
    });
  };

  onFocus = () => {
    const { onFocus } = this.props;
    this.setState({
      focused: true
    });
    if (onFocus) {
      onFocus();
    }
  };

  onBlur = () => {
    const { onBlur } = this.props;
    this.setState({
      focused: false
    });
    if (onBlur) {
      onBlur();
    }
  };

  onKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (event) => {
    const { keyCode } = event;
    const { allowHalf, count, direction, onKeyDown } = this.props;
    const reverse = direction === `rtl`;
    let { value } = this.state;
    if (keyCode === KeyCode.RIGHT && value < count && !reverse) {
      if (allowHalf) {
        value += 0.5;
      } else {
        value += 1;
      }
      this.changeValue(value);
      event.preventDefault();
    } else if (keyCode === KeyCode.LEFT && value > 0 && !reverse) {
      if (allowHalf) {
        value -= 0.5;
      } else {
        value -= 1;
      }
      this.changeValue(value);
      event.preventDefault();
    } else if (keyCode === KeyCode.RIGHT && value > 0 && reverse) {
      if (allowHalf) {
        value -= 0.5;
      } else {
        value -= 1;
      }
      this.changeValue(value);
      event.preventDefault();
    } else if (keyCode === KeyCode.LEFT && value < count && reverse) {
      if (allowHalf) {
        value += 0.5;
      } else {
        value += 1;
      }
      this.changeValue(value);
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  static getDerivedStateFromProps(nextProps: RateProps, state: RateState) {
    if (`value` in nextProps && nextProps.value !== undefined) {
      return {
        ...state,
        value: nextProps.value
      };
    }
    return state;
  }

  getStarDOM(index: number): HTMLElement {
    // eslint-disable-next-line react/no-find-dom-node
    return findDOMNode(this.stars[index]);
  }

  getStarValue(index: number, x: number) {
    const { allowHalf, direction } = this.props;
    const reverse = direction === `rtl`;
    let value = index + 1;
    if (allowHalf) {
      const starEle = this.getStarDOM(index);
      const leftDis = getOffsetLeft(starEle);
      const width = starEle.clientWidth;
      if (reverse && x - leftDis > width / 2) {
        value -= 0.5;
      } else if (!reverse && x - leftDis < width / 2) {
        value -= 0.5;
      }
    }
    return value;
  }

  saveRef = (index: number) => (node: Star) => {
    this.stars[index] = node;
  };

  saveRate = (node: HTMLUListElement) => {
    this.rate = node;
  };

  focus() {
    const { disabled } = this.props;
    if (!disabled) {
      this.rate.focus();
    }
  }

  blur() {
    const { disabled } = this.props;
    if (!disabled) {
      this.rate.blur();
    }
  }

  changeValue(value: number) {
    const { onChange } = this.props;
    if (!(`value` in this.props)) {
      this.setState({
        value
      });
    }
    onChange(value);
  }

  render() {
    const {
      allowHalf,
      character,
      characterRender,
      className,
      count,
      direction,
      disabled,
      prefixCls,
      style,
      tabIndex
    } = this.props;
    const { focused, hoverValue, value } = this.state;
    const stars = [];
    const disabledClass = disabled ? `${prefixCls}-disabled` : ``;
    for (let index = 0; index < count; index += 1) {
      stars.push(
        <Star
          ref={this.saveRef(index)}
          index={index}
          count={count}
          disabled={disabled}
          prefixCls={`${prefixCls}-star`}
          allowHalf={allowHalf}
          value={hoverValue === undefined ? value : hoverValue}
          onClick={this.onClick}
          onHover={this.onHover}
          key={index}
          character={character}
          characterRender={characterRender}
          focused={focused}
        />
      );
    }
    const rateClassName = objToString({
      [`${prefixCls}`]: verifiedIsNotEmpty(prefixCls),
      [`${disabledClass}`]: true,
      className,
      [`${prefixCls}-rtl`]: direction === `rtl`
    });
    return (
      <ul
        className={rateClassName}
        style={style}
        onMouseLeave={disabled ? null : this.onMouseLeave}
        tabIndex={disabled ? -1 : tabIndex}
        onFocus={disabled ? null : this.onFocus}
        onBlur={disabled ? null : this.onBlur}
        onKeyDown={disabled ? null : this.onKeyDown}
        ref={this.saveRate}
        role="radiogroup"
      >
        {stars}
      </ul>
    );
  }
}

export default Rate;
