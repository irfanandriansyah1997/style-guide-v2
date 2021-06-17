import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { Children, cloneElement, ReactElement } from 'react';

import GridItem from './section/grid-item.component';
import GridRow from './section/grid-row.component';
import styles from './style/style.module.scss';
import { IGridDefaultExport } from './interface';

/**
 * Grid Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
const Grid: IGridDefaultExport = ({ children, className }) => (
  <div
    className={objToString({
      [`${styles[`a-container`]}`]: true,
      [`${className}`]: verifiedIsNotEmpty(className)
    })}
  >
    {Children.map(children, (child) => {
      const { type } = child as ReactElement;

      if ([GridRow].includes(type as any)) {
        return cloneElement(child as ReactElement);
      }

      return null;
    })}
  </div>
);

Grid.Item = GridItem;

Grid.Rows = GridRow;

export default Grid;
