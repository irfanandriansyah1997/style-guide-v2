import { FC } from 'react';

import { IAccordionItemProps } from './accordion-item.interface';
import { IAccordionPanelStyling } from './accordion-panel.interface';

export * from './accordion-item.interface';
export * from './accordion-panel.interface';

/**
 * All Class Name Each Tag on Accordion Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface IAccordionClassnameList {
  panel: string;
  wrapper: string;
}

/**
 * List Export Default Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export type IAccordionExportDefault = FC<IAccordionProps> & {
  Item: FC<IAccordionItemProps>;
};

export type IAccordionIconPosition = 'left' | 'right';

/**
 * Accordion Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export interface IAccordionProps extends Partial<IAccordionStyling> {
  className?: string;
  defaultActiveKey?: (string | number)[];
}

/**
 * Accordion Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export interface IAccordionStyling extends Partial<IAccordionPanelStyling> {
  accordion: boolean;
}

export type IAccordionTheme = 'ghost' | 'borderred';
