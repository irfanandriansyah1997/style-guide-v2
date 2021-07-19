import { Children, cloneElement, ReactElement } from 'react';

import { useSelection } from '@/utils/hooks/selection';
import SelectionContext from '@/utils/hooks/selection/context';

import { AccordionItem } from './section/item.component';
import { IAccordionExportDefault } from './interface';

/**
 * Accordion Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
const Accordion: IAccordionExportDefault = ({
  accordion,
  children,
  defaultActiveKey,
  expandIcon,
  expandIconPosition,
  theme
}) => {
  const { action, state } = useSelection({
    defaultValue: defaultActiveKey,
    type: accordion ? `single` : `multiple`
  });

  return (
    <SelectionContext.Provider value={{ action, state }}>
      {Children.map(children, (child) => {
        const { props, type } = child as ReactElement;

        if ([AccordionItem].includes(type as any)) {
          return cloneElement(child as ReactElement, {
            ...props,
            expandIcon,
            expandIconPosition,
            theme
          });
        }

        return null;
      })}
    </SelectionContext.Provider>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
