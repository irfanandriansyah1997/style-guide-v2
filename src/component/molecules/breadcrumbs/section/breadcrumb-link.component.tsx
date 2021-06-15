import { FC } from 'react';

import { IBreadcrumbLinkProps } from '@/molecules/breadcrumbs/interface';

/**
 * Breadcrumb Link
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.15
 */
const BreadcrumbLink: FC<IBreadcrumbLinkProps> = ({
  children,
  href,
  on,
  style
}) => (
  <a
    style={style}
    href={href}
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
    {children}
  </a>
);

export default BreadcrumbLink;
