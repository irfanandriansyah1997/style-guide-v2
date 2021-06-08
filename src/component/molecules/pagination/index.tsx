import ReactPaginate from 'react-paginate';

import {
  usePaginationClassName,
  usePaginationContent
} from '../../../utils/hooks/pagination.hooks';
import PaginationItem from './section/pagination-item.component';
import { IPaginationExportDefault } from './interface';

/**
 * Pagination Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
const Pagination: IPaginationExportDefault = ({
  children,
  className,
  disableInitialCallback,
  marginDisplayed,
  on,
  page,
  pageRange,
  totalPage
}) => {
  const customClassName = usePaginationClassName(className);
  const {
    breakLabel = `...`,
    nextLabel = `Next`,
    previousLabel = `Prev`
  } = usePaginationContent(children);

  return (
    <ReactPaginate
      {...customClassName}
      previousLabel={previousLabel}
      nextLabel={nextLabel}
      breakLabel={breakLabel}
      pageCount={totalPage || 0}
      initialPage={page - 1}
      forcePage={page - 1}
      marginPagesDisplayed={marginDisplayed as number}
      pageRangeDisplayed={pageRange || 5}
      disableInitialCallback={disableInitialCallback}
      onPageChange={({ selected: page }) =>
        on?.({
          event: `on-page-change`,
          payload: {
            page
          }
        })
      }
    />
  );
};

Pagination.Item = PaginationItem;

export default Pagination;
