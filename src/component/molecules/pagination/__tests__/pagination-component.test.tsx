import { fireEvent, render } from '@testing-library/react';

import Pagination from '@/molecules/pagination';

describe(`Testing Pagination Component Component`, () => {
  it(`Testing On Click Pagination Item`, () => {
    const onSpy = jest.fn((response) => response);
    const { container } = render(
      <Pagination
        disableInitialCallback
        marginDisplayed={2}
        page={2}
        pageRange={2}
        totalPage={100}
        on={onSpy}
      >
        <Pagination.Item type="previous-label">Previous</Pagination.Item>
        <Pagination.Item type="break-label">Break Label</Pagination.Item>
        <Pagination.Item type="next-label">Next</Pagination.Item>
      </Pagination>
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      const previousLink = (childNodes[0] as HTMLElement)
        .childNodes[0] as HTMLElement;
      const page1 = (childNodes[1] as HTMLElement).childNodes[0] as HTMLElement;
      const page2 = (childNodes[2] as HTMLElement).childNodes[0] as HTMLElement;
      const breakLabel = (childNodes[4] as HTMLElement)
        .childNodes[0] as HTMLElement;
      const nextLink = (childNodes[7] as HTMLElement)
        .childNodes[0] as HTMLElement;

      expect(previousLink).toHaveTextContent(`Previous`);
      expect(nextLink).toHaveTextContent(`Next`);
      expect(breakLabel).toHaveTextContent(`Break Label`);
      expect(childElementCount).toBe(8);

      /**
       * On Click Previous Link
       */
      fireEvent(
        previousLink,
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true
        })
      );

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(page1).toHaveClass(`m-paginate__link--active`);
      expect(page2).not.toHaveClass(`m-paginate__link--active`);
      expect(onSpy.mock.results[0].value.event).toBe(`on-page-change`);
      expect(onSpy.mock.results[0].value.payload).toStrictEqual({ page: 0 });

      /**
       * On Click Next Link
       */
      fireEvent(
        nextLink,
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true
        })
      );

      expect(onSpy).toHaveBeenCalledTimes(2);
      expect(page1).not.toHaveClass(`m-paginate__link--active`);
      expect(page2).toHaveClass(`m-paginate__link--active`);
      expect(onSpy.mock.results[1].value.event).toBe(`on-page-change`);
      expect(onSpy.mock.results[1].value.payload).toStrictEqual({ page: 1 });

      /**
       * On Click Next Link
       */
      fireEvent(
        page1,
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true
        })
      );

      expect(onSpy).toHaveBeenCalledTimes(3);
      expect(page1).toHaveClass(`m-paginate__link--active`);
      expect(page2).not.toHaveClass(`m-paginate__link--active`);
      expect(onSpy.mock.results[2].value.event).toBe(`on-page-change`);
      expect(onSpy.mock.results[2].value.payload).toStrictEqual({ page: 0 });
    }
  });
});
