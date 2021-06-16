import { Property } from 'csstype';
import PropTypes from 'prop-types';
import { FC, Validator } from 'react';

import {
  DEFAULT_GRID_ALIGN_ITEM as ALIGN_ITEM,
  DEFAULT_GRID_JUSTIFY_CONTENT as JUSTIFY_CONTENT
} from '@/atomic/grid/constant';
import { useGridRow } from '@/atomic/grid/hooks/grid.hooks';
import { IGridRowProps, IGridSpaceItem } from '@/atomic/grid/interface';

/**
 * Grid Row Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
const GridRow: FC<IGridRowProps> = (props) => {
  const { content, ...res } = useGridRow(props);

  return (
    <div {...res}>
      {content.map(({ children, key, ...res }) => (
        <div {...res} key={key}>
          {children}
        </div>
      ))}
    </div>
  );
};

GridRow.propTypes = {
  alignItems: PropTypes.oneOf<Property.AlignItems>(ALIGN_ITEM),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  justifyContent: PropTypes.oneOf<Property.JustifyContent>(JUSTIFY_CONTENT),
  spaceEachItem: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      horizontal: PropTypes.number,
      vertical: PropTypes.number
    })
  ]) as Validator<number | Partial<IGridSpaceItem>>
};

GridRow.defaultProps = {
  alignItems: `center`,
  justifyContent: `center`,
  spaceEachItem: undefined
};

export default GridRow;
