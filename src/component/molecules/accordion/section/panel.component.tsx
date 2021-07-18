/* eslint-disable sort-exports/sort-exports */
import { FC } from 'react';

import { IAccordionItemProps, IAccordionPanelProps } from '../interface';

/**
 * Accordion Panel Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export const AccordionPanel: FC<IAccordionPanelProps> = () => (
  <div>Hello World</div>
);

/**
 * Accordion Panel Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export const AccordionItem: FC<IAccordionItemProps> = (props) => (
  <AccordionPanel {...props} />
);

export default AccordionPanel;
