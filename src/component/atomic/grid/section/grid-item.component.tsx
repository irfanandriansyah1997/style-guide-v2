import PropTypes from 'prop-types';
import { FC, Validator } from 'react';

import { DEFAULT_GRID_SIZE } from '@/atomic/grid/constant';
import {
  IGridItemExposedProps,
  IGridItemProps,
  IGridSize,
  IGridSpaceItem
} from '@/atomic/grid/interface';

import { useGridItem } from '../hooks/grid.hooks';

/**
 * Grid Generator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.17
 */
const GridGenerator: FC<IGridItemExposedProps> = ({ children, ...props }) => {
  const { ...res } = useGridItem(props);

  return <div {...res}>{children}</div>;
};

/**
 * Grid Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
const GridItem: FC<IGridItemProps> = (props) => <GridGenerator {...props} />;

GridItem.propTypes = {
  lg: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE),
  md: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE),
  order: PropTypes.number,
  size: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE).isRequired,
  sm: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE),
  spaceEachItem: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      horizontal: PropTypes.number,
      vertical: PropTypes.number
    })
  ]) as Validator<number | Partial<IGridSpaceItem>>,
  xl: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE),
  xs: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE)
};

GridItem.defaultProps = {
  order: undefined
};

export default GridItem;
