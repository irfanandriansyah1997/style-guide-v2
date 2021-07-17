import { objToString, verifiedIsNotEmpty } from '@99/helper';
import PropTypes from 'prop-types';
import { Validator } from 'react';

import List from '@/atomic/list';
import { checkClassnameAvailable } from '@/helper/component.helper';
import { NullAble } from '@/interface/general';

import { useBreadcrumb } from './hooks/breadcrumb.hooks';
import BreadcrumbDivider from './section/breadcrumb-divider.component';
import BreadcrumbItem from './section/breadcrumb-item.component';
import BreadcrumbLink from './section/breadcrumb-link.component';
import BreadcrumbText from './section/breadcrumb-text.component';
import styles from './style/style.module.scss';
import {
  IBreadcrumbClassnameList,
  IBreadcrumbContentType,
  IBreadcrumbExportDefault,
  IBreadcrumbItemProps,
  IBreadcrumbStyle
} from './interface';

/**
 * Breadcrumb Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
const Breadcrumb: IBreadcrumbExportDefault = ({
  children,
  className,
  on,
  separator,
  style
}) => {
  const { item, styleItem, styleWrapper } = useBreadcrumb(
    children,
    style,
    separator
  );
  const { margin, ...resStyleItem } = styleItem || {};

  return (
    <div
      style={styleWrapper}
      className={objToString({
        flex: true,
        'flex-align-center': true,
        'flex-justify-start': true,
        [`${className?.wrapper}`]: checkClassnameAvailable<IBreadcrumbClassnameList>(
          className,
          `wrapper`
        )
      })}
    >
      <List
        space={verifiedIsNotEmpty(margin) ? parseInt(`${margin}`, 10) : 10}
        className={{
          item: objToString({
            [`${styles[`m-breadcrumb__item`]}`]: true,
            [`${className?.item}`]: checkClassnameAvailable<IBreadcrumbClassnameList>(
              className,
              `item`
            )
          })
        }}
      >
        {item.map(({ key, payload, type }) => {
          switch (type) {
            case IBreadcrumbContentType.item: {
              const { label, link } = payload as IBreadcrumbItemProps;

              if (verifiedIsNotEmpty(link)) {
                return (
                  <List.Item key={`${key}-${JSON.stringify(resStyleItem)}`}>
                    <BreadcrumbLink
                      style={resStyleItem}
                      href={`${link}`}
                      on={(e) => on?.(e)}
                    >
                      {label}
                    </BreadcrumbLink>
                  </List.Item>
                );
              }

              return (
                <List.Item key={`${key}-${JSON.stringify(resStyleItem)}`}>
                  <BreadcrumbText style={resStyleItem}>{label}</BreadcrumbText>
                </List.Item>
              );
            }
            default:
              return (
                <List.Item key={key}>
                  <BreadcrumbDivider
                    className={className?.separator}
                    style={{ color: styleItem?.color as NullAble<string> }}
                  >
                    {payload}
                  </BreadcrumbDivider>
                </List.Item>
              );
          }
        })}
      </List>
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.shape({
    item: PropTypes.string,
    separator: PropTypes.string,
    wrapper: PropTypes.string
  }) as Validator<IBreadcrumbClassnameList>,
  on: PropTypes.func,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.number,
    heightContainer: PropTypes.number,
    paddingContainer: PropTypes.number,
    spaceEachItem: PropTypes.number,
    textColor: PropTypes.string
  }) as Validator<IBreadcrumbStyle>
};

Breadcrumb.defaultProps = {
  className: undefined,
  on: undefined,
  style: undefined
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
