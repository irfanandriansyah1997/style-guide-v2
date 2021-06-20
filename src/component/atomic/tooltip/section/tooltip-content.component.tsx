import { objToString, verifiedIsNotFalse } from '@99/helper';
import {
  forwardRef,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { Transition } from 'react-transition-group';

import { generateClassName } from '@/atomic/tooltip/helper/tooltip.helper';
import {
  ITooltipContentProps,
  ITooltipPosition
} from '@/atomic/tooltip/interface';
import styles from '@/atomic/tooltip/style/style.module.scss';

/**
 * Tooltip Content Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.19
 */
const TooltipContent = forwardRef<HTMLDivElement, ITooltipContentProps>(
  ({ background, className, content, position, visible }, ref) => {
    const node = useRef<HTMLDivElement>(null);
    const [showTooltip, setShowTooltip] = useState(false);

    /**
     * Event Listener When User Mouseover Tooltip Component
     * @param {MouseEvent} event - mouse event param
     * @return {void}
     */
    const eventListener = useCallback(
      ({ target }: MouseEvent): void => {
        const element = (ref as RefObject<HTMLInputElement>).current;
        const elementContent = node.current;

        if (!verifiedIsNotFalse(visible)) {
          setShowTooltip(false);
        } else if (element && element.contains(target as Node)) {
          setShowTooltip(true);
        } else if (elementContent && elementContent.contains(target as Node)) {
          setShowTooltip(true);
        } else {
          setShowTooltip(false);
        }
      },
      [ref, visible, node]
    );

    useEffect(() => {
      window.addEventListener(`mouseover`, eventListener);

      return (): void => window.removeEventListener(`mouseover`, eventListener);
    }, [eventListener]);

    return (
      <Transition in={showTooltip} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            ref={node}
            className={generateClassName({
              className,
              position: position as ITooltipPosition,
              state
            })}
            style={{ background }}
          >
            <div
              className={objToString({
                absolute: true,
                [`${styles[`a-tooltip__triangle`]}`]: true
              })}
              style={{
                borderBottomColor:
                  position === `bottom` ? background : undefined,
                borderLeftColor: position === `left` ? background : undefined,
                borderRightColor: position === `right` ? background : undefined,
                borderTopColor: position === `top` ? background : undefined
              }}
            />
            {content}
          </div>
        )}
      </Transition>
    );
  }
);

export default TooltipContent;
