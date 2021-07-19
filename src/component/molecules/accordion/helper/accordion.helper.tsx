import { verifiedIsNotEmpty } from '@99/helper';
import { isValidElement, ReactNode } from 'react';

import { IAccordionPanel, IAccordionPanelGenerator } from '../interface';

/**
 * Generate element panel
 * @param {IAccordionPanelGenerator | ReactNode} element - element component must be contain ReactNode or Function
 * @returns {IAccordionPanelGenerator}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export const generateElementPanel = (
  element?: IAccordionPanelGenerator | ReactNode
): IAccordionPanelGenerator => (param: IAccordionPanel): ReactNode => {
  if (verifiedIsNotEmpty(element)) {
    if (isValidElement(element)) {
      return element as ReactNode;
    }

    return (element as IAccordionPanelGenerator)(param);
  }

  return null;
};
