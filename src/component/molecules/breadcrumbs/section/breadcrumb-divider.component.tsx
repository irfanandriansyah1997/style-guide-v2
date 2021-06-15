import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { FC } from 'react';

import { IBreadcrumbDivider } from '@/molecules/breadcrumbs/interface';

/**
 * Breadcrumb Divider
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.15
 */
const BreadcrumbDivider: FC<IBreadcrumbDivider> = ({
  children,
  className,
  style
}) => (
  <div
    className={objToString({
      [`${className}`]: verifiedIsNotEmpty(className)
    })}
    style={style}
  >
    {children}
  </div>
);

export default BreadcrumbDivider;
