import { render } from '@testing-library/react';

import Grid from '@/atomic/grid';

describe(`Testing Grid Component`, () => {
  it(`Should render container, row and column component correctly`, () => {
    const { container } = render(
      <Grid size="full-width" className="custom-container">
        <Grid.Rows className="custom-rows">
          <Grid.Item size={5} order={1} className="custom-item">
            Testing Render Grid Item 1
          </Grid.Item>
          <div>Hello World</div>
        </Grid.Rows>
        <Grid.Rows>
          <Grid.Item size={5}>Testing Render Grid Item 2</Grid.Item>
        </Grid.Rows>
      </Grid>
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      expect(container.firstChild).toHaveClass(`a-container`);
      expect(container.firstChild).toHaveClass(`a-container--full-width`);
      expect(container.firstChild).toHaveClass(`custom-container`);
      expect(childElementCount).toBe(2);

      const rows1 = childNodes[0] as HTMLElement;
      const {
        childElementCount: countChildRows1,
        childNodes: nodesRows1
      } = rows1;

      expect(rows1).toHaveTextContent(`Testing Render Grid Item`);
      expect(countChildRows1).toBe(1);
      expect(rows1).toHaveClass(`custom-rows`);

      expect(rows1.style.alignItems).toBe(`center`);
      expect(rows1.style.justifyContent).toBe(`center`);
      expect(rows1.style.marginBottom).toBe(`5px`);
      expect(rows1.style.marginLeft).toBe(`-5px`);
      expect(rows1.style.marginRight).toBe(`-5px`);
      expect(rows1.style.marginTop).toBe(`-5px`);

      const column1 = nodesRows1[0] as HTMLElement;
      expect(column1).toHaveTextContent(`Testing Render Grid Item`);
      expect(column1).toHaveClass(`custom-item`);
      expect(column1).toHaveClass(`a-col-5`);

      expect(column1.style.order).toBe(`1`);
      expect(column1.style.paddingBottom).toBe(`5px`);
      expect(column1.style.paddingLeft).toBe(`5px`);
      expect(column1.style.paddingRight).toBe(`5px`);
      expect(column1.style.paddingTop).toBe(`5px`);
    }
  });

  it(`Should render row with custom padding`, () => {
    const { container } = render(
      <Grid size="full-width" className="custom-container">
        <Grid.Rows
          className="custom-rows"
          spaceEachItem={{
            horizontal: 10,
            vertical: 30
          }}
        >
          <Grid.Item size={5} order={1} className="custom-item">
            Testing Render Grid Item 1
          </Grid.Item>
          <div>Hello World</div>
        </Grid.Rows>
      </Grid>
    );

    if (container.firstChild) {
      const { childNodes } = container.firstChild as HTMLElement;
      expect(container.firstChild).toHaveClass(`a-container`);
      expect(container.firstChild).toHaveClass(`a-container--full-width`);
      expect(container.firstChild).toHaveClass(`custom-container`);

      const rows1 = childNodes[0] as HTMLElement;
      const {
        childElementCount: countChildRows1,
        childNodes: nodesRows1
      } = rows1;

      expect(rows1).toHaveTextContent(`Testing Render Grid Item`);
      expect(countChildRows1).toBe(1);
      expect(rows1).toHaveClass(`custom-rows`);

      expect(rows1.style.alignItems).toBe(`center`);
      expect(rows1.style.justifyContent).toBe(`center`);
      expect(rows1.style.marginBottom).toBe(`15px`);
      expect(rows1.style.marginLeft).toBe(`-5px`);
      expect(rows1.style.marginRight).toBe(`-5px`);
      expect(rows1.style.marginTop).toBe(`-15px`);

      const column1 = nodesRows1[0] as HTMLElement;
      expect(column1).toHaveTextContent(`Testing Render Grid Item`);
      expect(column1).toHaveClass(`custom-item`);
      expect(column1).toHaveClass(`a-col-5`);
      expect(column1.style.order).toBe(`1`);
      expect(column1.style.paddingBottom).toBe(`15px`);
      expect(column1.style.paddingLeft).toBe(`5px`);
      expect(column1.style.paddingRight).toBe(`5px`);
      expect(column1.style.paddingTop).toBe(`15px`);
    }
  });

  it(`Should render column with multiple viewport`, () => {
    const { container } = render(
      <Grid size="full-width" className="custom-container">
        <Grid.Rows className="custom-rows">
          <Grid.Item
            size={5}
            order={2}
            xs={12}
            sm={10}
            md={8}
            lg={6}
            xl={4}
            className="custom-item"
          >
            Testing Render Grid Item 1
          </Grid.Item>
        </Grid.Rows>
      </Grid>
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      expect(container.firstChild).toHaveClass(`a-container`);
      expect(container.firstChild).toHaveClass(`a-container--full-width`);
      expect(container.firstChild).toHaveClass(`custom-container`);
      expect(childElementCount).toBe(1);

      const rows1 = childNodes[0] as HTMLElement;
      const {
        childElementCount: countChildRows1,
        childNodes: nodesRows1
      } = rows1;

      expect(rows1).toHaveTextContent(`Testing Render Grid Item`);
      expect(countChildRows1).toBe(1);
      expect(rows1).toHaveClass(`custom-rows`);

      expect(rows1.style.alignItems).toBe(`center`);
      expect(rows1.style.justifyContent).toBe(`center`);
      expect(rows1.style.marginBottom).toBe(`5px`);
      expect(rows1.style.marginLeft).toBe(`-5px`);
      expect(rows1.style.marginRight).toBe(`-5px`);
      expect(rows1.style.marginTop).toBe(`-5px`);

      const column1 = nodesRows1[0] as HTMLElement;
      expect(column1).toHaveTextContent(`Testing Render Grid Item`);
      expect(column1).toHaveClass(`custom-item`);
      expect(column1).toHaveClass(`a-col-5`);
      expect(column1).toHaveClass(`a-col-xs-12`);
      expect(column1).toHaveClass(`a-col-sm-10`);
      expect(column1).toHaveClass(`a-col-md-8`);
      expect(column1).toHaveClass(`a-col-lg-6`);
      expect(column1).toHaveClass(`a-col-xl-4`);

      expect(column1.style.order).toBe(`2`);
      expect(column1.style.paddingBottom).toBe(`5px`);
      expect(column1.style.paddingLeft).toBe(`5px`);
      expect(column1.style.paddingRight).toBe(`5px`);
      expect(column1.style.paddingTop).toBe(`5px`);
    }
  });
});
