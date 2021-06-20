import { objToString } from '@99/helper';
import PropTypes from 'prop-types';
import { FC, useRef, Validator } from 'react';

import {
  ITooltipClassnameList,
  ITooltipPosition,
  ITooltipProps
} from '@/atomic/tooltip/interface';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import { checkClassnameAvailable } from '@/helper/component.helper';

import TooltipContent from './section/tooltip-content.component';

/**
 * Tooltip Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.19
 */
const Tooltip: FC<ITooltipProps> = ({ children, className, ...res }) => {
  const node = useRef<HTMLDivElement>(null);

  return (
    <div className="relative inline-block">
      <div
        className={objToString({
          [`${className?.toggle}`]: checkClassnameAvailable<ITooltipClassnameList>(
            className,
            `toggle`
          )
        })}
        ref={node}
      >
        {children}
      </div>
      <TooltipContent {...res} className={className?.tooltip} ref={node} />
    </div>
  );
};

Tooltip.propTypes = {
  background: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.shape({
    toggle: PropTypes.string,
    tooltip: PropTypes.string
  }) as Validator<Partial<ITooltipClassnameList>>,
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  position: PropTypes.oneOf<ITooltipPosition>([
    `bottom`,
    `left`,
    `right`,
    `top`
  ]),
  visible: PropTypes.bool
};

Tooltip.defaultProps = {
  background: STYLE_GUIDE_COLOR.dark500,
  position: `top`,
  visible: true
};

export default Tooltip;
