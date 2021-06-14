import { objToString, verifiedIsNotEmpty } from '@99/helper';
import PropTypes from 'prop-types';
import { Validator } from 'react';

import Text from '@/atomic/text';
import { checkClassnameAvailable } from '@/helper/component.helper';

import { useBreadcrumb } from './hooks/breadcrumb.hooks';
import BreadcrumbItem from './section/breadcrumb-item.component';
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
      {item.map(({ key, payload, type }) => {
        switch (type) {
          case IBreadcrumbContentType.item: {
            const { label, link } = payload as IBreadcrumbItemProps;

            if (verifiedIsNotEmpty(link)) {
              return (
                <a
                  key={key}
                  className={objToString({
                    [styles[`m-breadcrumb__item`]]: true,
                    [`${className?.item}`]: checkClassnameAvailable<IBreadcrumbClassnameList>(
                      className,
                      `item`
                    )
                  })}
                  style={styleItem}
                  href={link}
                  onKeyDown={undefined}
                  role="button"
                  tabIndex={0}
                  onClick={(e) =>
                    on?.({
                      event: `on-click-breadcrumb-item`,
                      payload: e
                    })
                  }
                >
                  {label}
                </a>
              );
            }

            return (
              <div
                key={key}
                className={objToString({
                  [styles[`m-breadcrumb__item`]]: true,
                  [`${className?.item}`]: checkClassnameAvailable<IBreadcrumbClassnameList>(
                    className,
                    `item`
                  )
                })}
                style={{
                  margin: styleItem?.margin as string | undefined
                }}
              >
                <Text.Paragraph
                  fontSize={styleItem?.fontSize as number | undefined}
                  fontWeight={styleItem?.fontWeight as number | undefined}
                  color={styleItem?.color as string | undefined}
                >
                  {label}
                </Text.Paragraph>
              </div>
            );
          }
          default:
            return (
              <div
                key={key}
                style={{
                  color: styleItem?.color as string | undefined
                }}
                className={objToString({
                  [`${className?.separator}`]: checkClassnameAvailable<IBreadcrumbClassnameList>(
                    className,
                    `separator`
                  )
                })}
              >
                {payload}
              </div>
            );
        }
      })}
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
