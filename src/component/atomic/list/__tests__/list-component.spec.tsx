import { render } from '@testing-library/react';

import List from '@/atomic/list';

describe(`Testing List Component`, () => {
  it(`Testing With Customize Solid Vertical`, () => {
    const { container } = render(
      <List
        dividerColor="#236d9d"
        orientation="vertical"
        outline="solid"
        space={20}
        className={{
          item: `sample-item`,
          wrapper: `sample-wrapper`
        }}
      >
        <List.Item>List Number 1</List.Item>
        <List.Item>List Number 2</List.Item>
        <List.Item>List Number 3</List.Item>
        <List.Item>List Number 4</List.Item>
        <List.Item>List Number 5</List.Item>
        <div>Sample Item</div>
      </List>
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      const firstItem = childNodes[0] as HTMLElement;
      const secondItem = childNodes[1] as HTMLElement;
      const lastItem = childNodes[4] as HTMLElement;

      expect(childElementCount).toBe(5);
      expect(container.firstChild as HTMLElement).toHaveClass(
        `m-list--divider-solid--vertical`
      );
      expect(container.firstChild as HTMLElement).toHaveClass(`sample-wrapper`);

      expect(firstItem).toHaveClass(`sample-item`);
      expect(firstItem).toHaveClass(`m-list__item`);
      expect(firstItem).toHaveStyle({ 'border-color': `#236d9d` });

      expect(firstItem).toHaveTextContent(`List Number 1`);
      expect(secondItem).toHaveTextContent(`List Number 2`);
      expect(lastItem).toHaveTextContent(`List Number 5`);
    }
  });

  it(`Testing With Dash Horizontal`, () => {
    const { container } = render(
      <List
        dividerColor="#236d9d"
        orientation="horizontal"
        outline="dash"
        space={20}
        className={{
          item: `sample-item`,
          wrapper: `sample-wrapper`
        }}
      >
        <List.Item>List Number 1</List.Item>
        <List.Item>List Number 2</List.Item>
        <List.Item>List Number 3</List.Item>
        <List.Item>List Number 4</List.Item>
        <List.Item>List Number 5</List.Item>
        <div>Sample Item</div>
      </List>
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      const firstItem = childNodes[0] as HTMLElement;
      const secondItem = childNodes[1] as HTMLElement;
      const lastItem = childNodes[4] as HTMLElement;

      expect(childElementCount).toBe(5);
      expect(container.firstChild as HTMLElement).toHaveClass(
        `m-list--divider-dash--horizontal`
      );
      expect(container.firstChild as HTMLElement).toHaveClass(`sample-wrapper`);

      expect(firstItem).toHaveClass(`sample-item`);
      expect(firstItem).toHaveClass(`m-list__item`);
      expect(firstItem).toHaveStyle({ 'border-color': `#236d9d` });

      expect(firstItem).toHaveTextContent(`List Number 1`);
      expect(secondItem).toHaveTextContent(`List Number 2`);
      expect(lastItem).toHaveTextContent(`List Number 5`);
    }
  });

  it(`Testing Without Border`, () => {
    const { container } = render(
      <List
        dividerColor="#236d9d"
        space={20}
        className={{
          item: `sample-item`,
          wrapper: `sample-wrapper`
        }}
      >
        <List.Item>List Number 1</List.Item>
        <List.Item>List Number 2</List.Item>
        <List.Item>List Number 3</List.Item>
        <List.Item>List Number 4</List.Item>
        <List.Item>List Number 5</List.Item>
        <div>Sample Item</div>
      </List>
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      const firstItem = childNodes[0] as HTMLElement;
      const secondItem = childNodes[1] as HTMLElement;
      const lastItem = childNodes[4] as HTMLElement;

      expect(childElementCount).toBe(5);
      expect(container.firstChild as HTMLElement).not.toHaveClass(
        `m-list--divider-dash--horizontal`
      );
      expect(container.firstChild as HTMLElement).not.toHaveClass(
        `m-list--divider-solid--vertical`
      );
      expect(container.firstChild as HTMLElement).toHaveClass(`sample-wrapper`);

      expect(firstItem).toHaveClass(`sample-item`);
      expect(firstItem).toHaveClass(`m-list__item`);
      expect(firstItem).toHaveStyle({ 'border-color': `#236d9d` });

      expect(firstItem).toHaveTextContent(`List Number 1`);
      expect(secondItem).toHaveTextContent(`List Number 2`);
      expect(lastItem).toHaveTextContent(`List Number 5`);
    }
  });
});
