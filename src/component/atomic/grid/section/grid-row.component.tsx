import { Property } from 'csstype';
import PropTypes from 'prop-types';
import { Children, cloneElement, FC, ReactElement, Validator } from 'react';

import {
  DEFAULT_GRID_ALIGN_ITEM as ALIGN_ITEM,
  DEFAULT_GRID_JUSTIFY_CONTENT as JUSTIFY_CONTENT
} from '@/atomic/grid/constant';
import { useGridRow } from '@/atomic/grid/hooks/grid.hooks';
import { IGridRowProps, IGridSpaceItem } from '@/atomic/grid/interface';

import GridItem from './grid-item.component';

/**
 * Grid Row Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.16
 */
const GridRow: FC<IGridRowProps> = ({ children, ...props }) => {
  const { ...res } = useGridRow({ ...props });

  return (
    <div {...res}>
      {Children.map(children as ReactElement, (child: ReactElement) => {
        const { type } = child as ReactElement;

        if ([GridItem].includes(type as any)) {
          return cloneElement(child, { spaceEachItem: props.spaceEachItem });
        }

        return null;
      })}
    </div>
  );
};

GridRow.propTypes = {
  alignItems: PropTypes.oneOf<Property.AlignItems>(ALIGN_ITEM),
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
  spaceEachItem: 10
};

export default GridRow;
