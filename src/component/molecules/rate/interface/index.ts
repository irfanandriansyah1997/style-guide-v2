import {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  MutableRefObject,
  ReactElement,
  ReactNode
} from 'react';

import {
  IEventOnStarClicked,
  IEventOnStarHovered,
  IStarProps
} from './star.interface';

export * from './star.interface';
export * from './rate.interface';

/**
 * Default Rate Content
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.01
 */

export interface IDefaultRateContent {
  character?: ReactNode;
  characterRender?: (origin: ReactElement, props: IStarProps) => ReactElement;
}

/**
 * Rate Event Handler
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.01
 */
export interface IRateEventHandler {
  onBlur: FocusEventHandler<HTMLUListElement>;
  onClick: (param: IEventOnStarClicked) => void;
  onFocus: FocusEventHandler<HTMLUListElement>;
  onHover: (param: IEventOnStarHovered) => void;
  onKeyDown: KeyboardEventHandler<HTMLUListElement>;
  onMouseLeave: MouseEventHandler<HTMLUListElement>;
}

/**
 * Rate Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.01
 */
export interface IRateHooks {
  dom: {
    blur(): void;
    focus(): void;
  };
  eventHandler: IRateEventHandler;
  ref: IRateRefHooks;
  state: IRateStateHooks;
}

/**
 * Rate State Referrence Interface
 * @author Irfan Andriansyah <irfan@99.co>

 * @since 2021.07.01
 */
export interface IRateRefHooks {
  rate: MutableRefObject<HTMLUListElement | undefined>;
  star: MutableRefObject<HTMLLIElement[]>;
}

/**
 * Rate State Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.01
 */
export interface IRateStateHooks {
  cleanedValue: number | null;
  focused: boolean;
  hoverValue?: number;
  value: number;
}
