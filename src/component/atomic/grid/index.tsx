import { objToString, verifiedIsNotEmpty } from '@99/helper';
import PropTypes from 'prop-types';
import { Children, cloneElement, ReactElement } from 'react';

import GridItem from './section/grid-item.component';
import GridRow from './section/grid-row.component';
import styles from './style/style.module.scss';
import { IGridContainerSize, IGridDefaultExport } from './interface';

/**
 * Grid Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
const Grid: IGridDefaultExport = ({ children, className, size }) => (
  <div
    className={objToString({
      [`${styles[`a-container`]}`]: true,
      [`${styles[`a-container--${size}`]}`]: true,
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

Grid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf<IGridContainerSize>([`normal`, `full-width`, `unset`])
};

Grid.defaultProps = {
  size: `normal`
};

Grid.Item = GridItem;

Grid.Rows = GridRow;

export default Grid;
