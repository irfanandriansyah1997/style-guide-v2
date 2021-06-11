import { useBreadcrumb } from '@/utils/hooks/breadcrumb.hooks';

import BreadcrumbItem from './section/breadcrumb-item.component';
import { IBreadcrumbExportDefault } from './interface';

/**
 * Breadcrumb Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.11
 */
const Breadcrumb: IBreadcrumbExportDefault = ({ children, on, style }) => {
  const { item, styleItem, styleWrapper } = useBreadcrumb(children, style);

  return (
    <div style={styleWrapper}>
      {item.map(({ label, link }) => (
        <a
          key={link}
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
      ))}
    </div>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
