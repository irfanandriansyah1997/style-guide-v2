import { fireEvent, render } from '@testing-library/react';

import Tags from '@/atomic/tags';

describe(`Testing Tags Component`, () => {
  it(`Testing Tags Normally`, () => {
    const onSpy = jest.fn((response) => response);
    const { container } = render(<Tags on={onSpy}>Testing</Tags>);

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-tags`);
      expect(container.firstChild).toHaveClass(`a-tags--size-default`);
      expect(container.firstChild).toHaveClass(`a-tags--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-tags--outline`);
      expect(container.firstChild).not.toHaveClass(`a-tags--rounded`);
      expect(container.firstChild).not.toHaveClass(`flex-row-reverse`);

      fireEvent(
        container.firstChild,
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true
        })
      );

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(onSpy.mock.results[0].value.event).toBe(`on-click`);
    }
  });

  it(`Testing Tags Rounded`, () => {
    const { container } = render(
      <Tags rounded size="small">
        Testing
      </Tags>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-tags`);
      expect(container.firstChild).not.toHaveClass(`a-tags--size-default`);
      expect(container.firstChild).toHaveClass(`a-tags--size-small`);
      expect(container.firstChild).toHaveClass(`a-tags--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-tags--outline`);
      expect(container.firstChild).toHaveClass(`a-tags--rounded`);
      expect(container.firstChild).not.toHaveClass(`flex-row-reverse`);
    }
  });

  it(`Testing Tags Dark`, () => {
    const { container } = render(
      <Tags theme="dark" size="small">
        Testing
      </Tags>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-tags`);
      expect(container.firstChild).not.toHaveClass(`a-tags--size-default`);
      expect(container.firstChild).toHaveClass(`a-tags--size-small`);
      expect(container.firstChild).not.toHaveClass(`a-tags--size-big`);
      expect(container.firstChild).toHaveClass(`a-tags--theme-dark`);
      expect(container.firstChild).not.toHaveClass(`a-tags--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-tags--outline`);
      expect(container.firstChild).not.toHaveClass(`a-tags--rounded`);
      expect(container.firstChild).not.toHaveClass(`flex-row-reverse`);
    }
  });

  it(`Testing Tags Outline`, () => {
    const { container } = render(<Tags outline>Testing</Tags>);

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-tags`);
      expect(container.firstChild).toHaveClass(`a-tags--size-default`);
      expect(container.firstChild).not.toHaveClass(`a-tags--theme-dark`);
      expect(container.firstChild).toHaveClass(`a-tags--theme-light`);
      expect(container.firstChild).toHaveClass(`a-tags--outline`);
      expect(container.firstChild).not.toHaveClass(`a-tags--inverted`);
      expect(container.firstChild).not.toHaveClass(`a-tags--rounded`);
      expect(container.firstChild).not.toHaveClass(`flex-row-reverse`);
    }
  });

  it(`Testing Tags Inverted`, () => {
    const { container } = render(<Tags inverted>Testing</Tags>);

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-tags`);
      expect(container.firstChild).toHaveClass(`a-tags--size-default`);
      expect(container.firstChild).not.toHaveClass(`a-tags--theme-dark`);
      expect(container.firstChild).toHaveClass(`a-tags--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-tags--outline`);
      expect(container.firstChild).toHaveClass(`a-tags--inverted`);
      expect(container.firstChild).not.toHaveClass(`a-tags--rounded`);
      expect(container.firstChild).not.toHaveClass(`flex-row-reverse`);
    }
  });

  it(`Testing Tags RTL`, () => {
    const { container } = render(<Tags rtl>Testing</Tags>);

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-tags`);
      expect(container.firstChild).toHaveClass(`a-tags--size-default`);
      expect(container.firstChild).toHaveClass(`a-tags--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-tags--outline`);
      expect(container.firstChild).not.toHaveClass(`a-tags--rounded`);
      expect(container.firstChild).toHaveClass(`flex-row-reverse`);
    }
  });

  it(`Testing With Set Custom Classname`, () => {
    const { container } = render(
      <Tags rtl className="custom-className">
        Testing
      </Tags>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`custom-className`);
      expect(container.firstChild).toHaveClass(`a-tags`);
      expect(container.firstChild).toHaveClass(`a-tags--size-default`);
      expect(container.firstChild).toHaveClass(`a-tags--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-tags--outline`);
      expect(container.firstChild).not.toHaveClass(`a-tags--rounded`);
      expect(container.firstChild).toHaveClass(`flex-row-reverse`);
    }
  });
});
