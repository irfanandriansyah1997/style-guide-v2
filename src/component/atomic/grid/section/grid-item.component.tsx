import PropTypes from 'prop-types';
import { FC } from 'react';

import { DEFAULT_GRID_SIZE } from '@/atomic/grid/constant';
import { IGridItemProps, IGridSize } from '@/atomic/grid/interface';

/**
 * Grid Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
const GridItem: FC<IGridItemProps> = () => null;

GridItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  id: PropTypes.string.isRequired,
  lg: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE),
  md: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE),
  size: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE).isRequired,
  sm: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE),
  xl: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE),
  xs: PropTypes.oneOf<IGridSize>(DEFAULT_GRID_SIZE)
};

GridItem.defaultProps = {};

export default GridItem;
