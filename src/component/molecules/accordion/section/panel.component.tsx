/* eslint-disable sort-exports/sort-exports */

import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { FC } from 'react';

import Expand from '@/atomic/expand';
import { useExpandContext } from '@/atomic/expand/hooks/expand.hooks';
import styles from '@/component/molecules/accordion/style/style.module.scss';
import { generateElementPanel } from '@/molecules/accordion/helper/accordion.helper';
import {
  IAccordionPanel,
  IAccordionPanelProps,
  IAccordionPanelToggleProps
} from '@/molecules/accordion/interface';
import { useSelectionContext } from '@/utils/hooks/selection';

/**
 * Accordion Icon
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
const AccordionIcon: FC<IAccordionPanel> = ({ expand }) => (
  <div
    className={objToString({
      [styles[`m-accordion__triangle`]]: true,
      [styles[`m-accordion__triangle--openned`]]: expand
    })}
  />
);

/**
 * Accordion Toggle Section
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.07.19
 */
const AccordionToggle: FC<IAccordionPanelToggleProps> = ({
  expandIcon: icon,
  expandIconPosition: position,
  header,
  showArrow,
  theme
}) => {
  const {
    state: { expand }
  } = useExpandContext();

  return (
    <div
      className={objToString({
        [styles[`m-accordion__toggle`]]: true,
        [styles[`m-accordion__toggle--theme-${theme}`]]: verifiedIsNotEmpty(
          theme
        ),
        flex: true,
        'flex-justify-between': position === `right`,
        'flex-justify-end': position === `left`,
        'flex-row': position === `right`,
        'flex-row-reverse': position === `left`
      })}
    >
      {generateElementPanel(header)({ expand })}
      {showArrow && (
        <div
          className={objToString({
            [styles[`m-accordion__toggle-icon--${position}`]]: true
          })}
        >
          {verifiedIsNotEmpty(icon) ? (
            generateElementPanel(icon)({ expand })
          ) : (
            <AccordionIcon expand={expand} />
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Accordion Panel Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export const AccordionPanel: FC<IAccordionPanelProps> = ({
  children,
  keys,
  ...res
}) => {
  const {
    action: { changeValue },
    state: { selected }
  } = useSelectionContext();

  return (
    <Expand
      on={({ event, payload }): void => {
        if (event === `on-toggle`) {
          changeValue({
            event: payload === true ? `register` : `remove`,
            value: keys
          });
        }
      }}
      openned={selected.includes(keys)}
      selectorPosition="top"
    >
      <Expand.Selector>
        <AccordionToggle {...res} />
      </Expand.Selector>
      <Expand.Content>{children}</Expand.Content>
    </Expand>
  );
};
