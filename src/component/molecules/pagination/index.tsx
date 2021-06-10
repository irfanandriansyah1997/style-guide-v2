import PropTypes from 'prop-types';
import { Validator } from 'react';
import ReactPaginate from 'react-paginate';

import {
  usePaginationClassName,
  usePaginationContent
} from '@/utils/hooks/pagination.hooks';

import PaginationItem from './section/pagination-item.component';
import {
  IPaginationClassnameList,
  IPaginationExportDefault
} from './interface';

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
      pageCount={totalPage}
      initialPage={page - 1}
      forcePage={page - 1}
      marginPagesDisplayed={marginDisplayed as number}
      pageRangeDisplayed={pageRange}
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

Pagination.propTypes = {
  className: PropTypes.shape({
    active: PropTypes.string,
    activeLink: PropTypes.string,
    break: PropTypes.string,
    breakLink: PropTypes.string,
    container: PropTypes.string,
    disabled: PropTypes.string,
    next: PropTypes.string,
    nextLink: PropTypes.string,
    page: PropTypes.string,
    pageLink: PropTypes.string,
    previous: PropTypes.string,
    previousLink: PropTypes.string
  }) as Validator<Partial<IPaginationClassnameList>>,
  disableInitialCallback: PropTypes.bool,
  marginDisplayed: PropTypes.number,
  on: PropTypes.func,
  page: PropTypes.number.isRequired,
  pageRange: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired
};

Pagination.defaultProps = {
  className: undefined,
  disableInitialCallback: false,
  marginDisplayed: 2,
  on: undefined
};

export default Pagination;
