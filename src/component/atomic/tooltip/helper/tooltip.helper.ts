import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { TransitionStatus } from 'react-transition-group';

import { ITooltipStyling as Styling } from '@/atomic/tooltip/interface';
import styles from '@/atomic/tooltip/style/style.module.scss';
import { NullAble } from '@/interface/general';

interface ITooltipStyling extends Pick<Styling, 'position'> {
  className?: string;
  state: TransitionStatus;
}

/**
 * Generate Classname Tooltip Content
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.20
 */
export const generateClassName = ({
  className,
  position,
  state
}: ITooltipStyling): string => {
  let stateClassName: NullAble<string>;
  switch (state) {
    case `entered`:
      stateClassName = styles[`fade-entered`];
      break;

    case `entering`:
      stateClassName = styles[`fade-entering`];
      break;

    case `exited`:
      stateClassName = styles[`fade-exited`];
      break;

    case `exiting`:
      stateClassName = styles[`fade-exiting`];
      break;

    default:
      break;
  }

  return objToString({
    absolute: true,
    block: true,
    [`${styles.fade}`]: true,
    [`${styles[`a-tooltip__content`]}`]: true,
    [`${styles[`a-tooltip__content--position-${position}`]}`]: true,
    [`${stateClassName}`]: true,
    [`${className}`]: verifiedIsNotEmpty(className)
  });
};
