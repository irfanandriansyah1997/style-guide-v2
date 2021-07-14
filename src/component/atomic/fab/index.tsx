import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { FC } from 'react';
import { Transition } from 'react-transition-group';

import styles from '@/atomic/fab/style/style.module.scss';

import Text from '../text';
import { generateFABAnimation } from './helper/fab.helper';
import { useFab } from './hooks/fab.hooks';
import { IFabProps } from './interface';

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

export default Fab;
