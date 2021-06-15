import {
  bulkVerifiedIsNotEmpty,
  objToString,
  verifiedIsNotEmpty
} from '@99/helper';
import PropTypes from 'prop-types';
import { Validator } from 'react';

import { checkClassnameAvailable } from '@/helper/component.helper';

import { useList } from './hooks/list.hooks';
import ListItem from './section/list-item.component';
import styles from './style/style.module.scss';
import {
  IListClassnameList as ClassNameList,
  IListContentType,
  IListExportDefault,
  IListItemProps,
  IListOrientation,
  IListOutline,
  IListProps
} from './interface';

/**
 * List Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.14
 */
const List: IListExportDefault = ({
  children,
  className,
  ...res
}: IListProps) => {
  const { classnameContainer, item, styleItem } = useList(children, res);

  return (
    <div
      className={objToString({
        [styles[
          `m-list--divider-${res.outline}--${res.orientation}`
        ]]: bulkVerifiedIsNotEmpty([res.outline, res.orientation]),
        [`${classnameContainer}`]: verifiedIsNotEmpty(classnameContainer),
        [`${className?.wrapper}`]: checkClassnameAvailable<ClassNameList>(
          className,
          `wrapper`
        )
      })}
    >
      {item.map(({ key, payload, type }) => {
        switch (type) {
          case IListContentType.item: {
            const { children } = payload as IListItemProps;

            return (
              <div
                key={key}
                style={styleItem}
                className={objToString({
                  relative: true,
                  [styles[`m-list__item`]]: true,
                  [`${className?.item}`]: checkClassnameAvailable<ClassNameList>(
                    className,
                    `item`
                  )
                })}
              >
                {children}
              </div>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
};

List.propTypes = {
  className: PropTypes.shape({
    item: PropTypes.string,
    wrapper: PropTypes.string
  }) as Validator<ClassNameList>,
  dividerColor: PropTypes.string,
  orientation: PropTypes.oneOf<IListOrientation>([`vertical`, `horizontal`]),
  outline: PropTypes.oneOf<IListOutline>([`dash`, `solid`]),
  space: PropTypes.number
};

List.defaultProps = {
  className: undefined,
  dividerColor: undefined,
  orientation: `horizontal`,
  outline: undefined,
  space: 10
};

List.Item = ListItem;

export default List;
