import { ReactNode } from 'react';

import { SingularOrPlural } from '@/interface/general';

interface IAccordionPanel {
  expand: boolean;
}

type IAccordionPanelGenerator = (param: IAccordionPanel) => ReactNode;

/**
 * All Class Name Each Tag on Accordion Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface IAccordionClassnameList {
  panel: string;
  wrapper: string;
}

export type IAccordionIconPosition = 'left' | 'right';

/**
 * Accordion Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export interface IAccordionItemProps {
  children: ReactNode;
  header: IAccordionPanelGenerator | ReactNode;
  key: string | string;
  showArrow?: boolean;
}

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
}

/**
 * Accordion Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export interface IAccordionProps {
  accordion: boolean;
  className: string;
  defaultActiveKey: SingularOrPlural<string> | SingularOrPlural<number>;
}

/**
 * Accordion Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export interface IAccordionStyling extends Partial<IAccordionPanelStyling> {
  accordion: boolean;
}

export type IAccordionTheme = 'ghost' | 'right';
