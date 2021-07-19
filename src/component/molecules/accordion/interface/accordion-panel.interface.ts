import { ReactNode } from 'react';

import {
  IAccordionIconPosition,
  IAccordionItemProps,
  IAccordionTheme
} from '.';

export interface IAccordionPanel {
  expand: boolean;
}

export type IAccordionPanelGenerator = (param: IAccordionPanel) => ReactNode;

/**
 * IAccordion Panel Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export type IAccordionPanelProps = IAccordionItemProps &
  Partial<IAccordionPanelStyling>;

/**
 * IAccordion Panel Styling
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export interface IAccordionPanelStyling {
  expandIcon: IAccordionPanelGenerator | ReactNode;
  expandIconPosition: IAccordionIconPosition;
  theme: IAccordionTheme;
}

/**
 * Accordion Panel Toogle Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export type IAccordionPanelToggleProps = Pick<
  IAccordionItemProps,
  'header' | 'showArrow'
> &
  Partial<IAccordionPanelStyling>;
