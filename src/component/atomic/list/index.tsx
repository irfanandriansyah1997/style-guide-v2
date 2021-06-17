import {
  bulkVerifiedIsNotEmpty,
  objToString,
  verifiedIsNotEmpty,
  verifiedKeyIsExist
} from '@99/helper';
import PropTypes from 'prop-types';
import { Children, cloneElement, memo, ReactElement, Validator } from 'react';

import {
  checkClassnameAvailable,
  shallowEquals
} from '@/helper/component.helper';

import { useList } from './hooks/list.hooks';
import ListItem from './section/list-item.component';
import styles from './style/style.module.scss';
import {
  IListClassnameList as ClassNameList,
  IListExportDefault,
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
  const { classnameContainer, styleItem } = useList(res);

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
      {Children.map(children as ReactElement, (child: ReactElement) => {
        const { props, type } = child as ReactElement;

        if ([ListItem].includes(type as any)) {
          return cloneElement(child, {
            className: objToString({
              relative: true,
              [styles[`m-list__item`]]: true,
              [`${className?.item}`]: checkClassnameAvailable<ClassNameList>(
                className,
                `item`
              ),
              [`${props.className}`]:
                verifiedKeyIsExist(props, `className`) &&
                verifiedIsNotEmpty(props.className)
            }),
            style: styleItem
          });
        }

        return null;
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

List.Memoized = memo(List, (prev, next) => {
  const prevProps = { ...prev };
  const nextProps = { ...next };
  delete prevProps.children;
  delete nextProps.children;

  return shallowEquals(prevProps, nextProps);
});

List.Item = ListItem;

export default List;
