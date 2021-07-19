import { ReactNode } from 'react';

import { IAccordionPanelGenerator } from './accordion-panel.interface';

/**
 * Accordion Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export interface IAccordionItemProps extends Partial<IAccordionItemStyling> {
  children: ReactNode;
  header: IAccordionPanelGenerator | ReactNode;
  keys: string | number;
}

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.07.19
 */
export interface IAccordionItemStyling {
  showArrow?: boolean;
}
