import { objToString, verifiedIsNotEmpty } from '@99/helper';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { Transition } from 'react-transition-group';

import { IButtonThemeOption } from '@/atomic/button/interface';
import styles from '@/atomic/fab/style/style.module.scss';
import Text from '@/atomic/text';

import { generateFABAnimation } from './helper/fab.helper';
import { useFab } from './hooks/fab.hooks';
import { IFabAnimation, IFabPosition, IFabProps, IFabType } from './interface';

/**
 * Floating Action Button Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
const Fab: FC<IFabProps> = ({
  className: classNameProps,
  icon,
  on,
  text,
  ...styling
}) => {
  const { className, isExtended, style } = useFab(styling, classNameProps);

  return (
    <Transition in={styling.show} timeout={300}>
      {(state) => {
        const animationClassName = generateFABAnimation(
          styling.animation,
          state
        );

        return (
          <button
            style={style}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              on({
                event: `on-click-button`,
                payload: e
              });
            }}
            className={objToString({
              [`${className}`]: true,
              [`${animationClassName}`]: verifiedIsNotEmpty(animationClassName)
            })}
          >
            <div
              className={objToString({
                flex: true,
                'flex-align-center': true,
                'flex-justify-center': true,
                [styles[`a-fab__icon`]]: true
              })}
            >
              {icon}
            </div>
            {isExtended && verifiedIsNotEmpty(text) && (
              <Text.Span
                className={objToString({
                  flex: true,
                  'flex-align-center': true,
                  'flex-justify-center': true,
                  [styles[`a-fab__text`]]: true
                })}
                font-weight={500}
              >
                {text}
              </Text.Span>
            )}
          </button>
        );
      }}
    </Transition>
  );
};

Fab.propTypes = {
  animation: PropTypes.oneOf<IFabAnimation>([
    `fade-in`,
    `fade-in-bottom`,
    `fade-in-left`,
    `fade-in-right`,
    `fade-in-top`
  ]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  on: PropTypes.func.isRequired,
  position: PropTypes.oneOf<IFabPosition>([`absolute`, `fixed`]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rtl: PropTypes.bool,
  shape: PropTypes.oneOf<IFabType>([`basic`, `extended`, `small`]),
  show: PropTypes.bool,
  text: PropTypes.string,
  theme: PropTypes.oneOf<IButtonThemeOption>([`dark`, `light`]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Fab.defaultProps = {
  animation: `fade-in`,
  className: undefined,
  position: `absolute`,
  rtl: false,
  shape: `basic`,
  show: true,
  text: undefined,
  theme: `light`
};

export default Fab;
