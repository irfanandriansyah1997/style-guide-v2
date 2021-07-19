import PropTypes from 'prop-types';
import { FC } from 'react';

import { IAccordionItemProps } from '@/molecules/accordion/interface';

import { AccordionPanel } from './panel.component';

/**
 * Accordion Panel Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export const AccordionItem: FC<IAccordionItemProps> = (props) => (
  <AccordionPanel {...props} />
);

AccordionItem.propTypes = {
  showArrow: PropTypes.bool
};

AccordionItem.defaultProps = {
  showArrow: true
};
