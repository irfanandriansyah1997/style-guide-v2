import PropTypes from 'prop-types';
import { FC } from 'react';

import { IListItemProps } from '@/atomic/list/interface';

/**
 * List Item
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
const ListItem: FC<IListItemProps> = () => null;

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

ListItem.defaultProps = {
  children: undefined
};

export default ListItem;
