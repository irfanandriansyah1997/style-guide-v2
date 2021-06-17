import PropTypes from 'prop-types';
import { FC } from 'react';

import { IListExposedItemProps, IListItemProps } from '@/atomic/list/interface';

/**
 * List Item Generator
 * @author Irfan Andriansyah <irfan@99.co
 * @since 2021.06.17
 */
const ListItemGenerator: FC<IListItemProps> = ({
  children,
  className,
  style
}) => (
  <div style={style} className={className}>
    {children}
  </div>
);

/**
 * List Item
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
const ListItem: FC<IListExposedItemProps> = (props) => (
  <ListItemGenerator {...props} />
);

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

export default ListItem;
