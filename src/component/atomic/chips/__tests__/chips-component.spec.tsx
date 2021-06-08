import { bulkVerifiedIsNotEmpty } from '@99/helper';
import { fireEvent, render } from '@testing-library/react';

import Chips from '@/atomic/chips';

describe(`Testing Chips Component`, () => {
  it(`Testing Chips Normally`, () => {
    const onSpy = jest.fn((param) => param);
    const { container } = render(<Chips label="chips" on={onSpy} />);

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-chips`);

      const element = container.querySelector(
        `div > .a-chips > .a-tags`
      ) as HTMLElement;
      const iconCloseElement = element.querySelector(`button`) as HTMLElement;

      if (bulkVerifiedIsNotEmpty([element, iconCloseElement])) {
        expect(element).toHaveClass(`a-tags`);
        expect(element).toHaveClass(`a-tags--size-default`);
        expect(element).not.toHaveClass(`a-tags--theme-light`);
        expect(element).toHaveClass(`a-tags--theme-dark`);
        expect(element).not.toHaveClass(`a-tags--theme-light`);
        expect(element).not.toHaveClass(`a-tags--outline`);
        expect(element).not.toHaveClass(`a-tags--rounded`);
        expect(element).not.toHaveClass(`flex-row-reverse`);
        expect(element).toHaveTextContent(`chips`);

        fireEvent(
          iconCloseElement,
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true
          })
        );
      }

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(onSpy.mock.results[0].value.event).toBe(`on-click-close-icon`);
    }
  });

  it(`Testing Chips With Outline`, () => {
    const onSpy = jest.fn((param) => param);
    const { container } = render(<Chips label="chips" on={onSpy} outline />);

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-chips`);

      const element = container.querySelector(
        `div > .a-chips > .a-tags`
      ) as HTMLElement;
      const iconCloseElement = element.querySelector(`button`) as HTMLElement;

      if (bulkVerifiedIsNotEmpty([element, iconCloseElement])) {
        expect(element).toHaveClass(`a-tags`);
        expect(element).toHaveClass(`a-tags--size-default`);
        expect(element).not.toHaveClass(`a-tags--theme-light`);
        expect(element).toHaveClass(`a-tags--theme-dark`);
        expect(element).not.toHaveClass(`a-tags--theme-light`);
        expect(element).toHaveClass(`a-tags--outline`);
        expect(element).not.toHaveClass(`a-tags--rounded`);
        expect(element).not.toHaveClass(`flex-row-reverse`);
        expect(element).toHaveTextContent(`chips`);

        fireEvent(
          iconCloseElement,
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true
          })
        );
      }

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(onSpy.mock.results[0].value.event).toBe(`on-click-close-icon`);
    }
  });

  it(`Testing Chips With Custom Class Name`, () => {
    const onSpy = jest.fn((param) => param);
    const { container } = render(
      <Chips
        label="custom classname"
        on={onSpy}
        outline
        className={{
          close: `custom-close-classname`,
          content: `custom-content-classname`,
          wrapper: `custom-wrapper-classname`
        }}
      />
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-chips`);
      expect(container.firstChild).toHaveClass(`custom-wrapper-classname`);

      const element = container.querySelector(
        `div > .a-chips > .a-tags`
      ) as HTMLElement;
      const iconCloseElement = element.querySelector(`button`) as HTMLElement;

      if (bulkVerifiedIsNotEmpty([element, iconCloseElement])) {
        expect(element).toHaveClass(`a-tags`);
        expect(element).toHaveClass(`a-tags--size-default`);
        expect(element).not.toHaveClass(`a-tags--theme-light`);
        expect(element).toHaveClass(`a-tags--theme-dark`);
        expect(element).not.toHaveClass(`a-tags--theme-light`);
        expect(element).toHaveClass(`a-tags--outline`);
        expect(element).not.toHaveClass(`a-tags--rounded`);
        expect(element).not.toHaveClass(`flex-row-reverse`);
        expect(element).toHaveClass(`custom-content-classname`);
        expect(element).toHaveTextContent(`custom classname`);
        expect(iconCloseElement).toHaveClass(`custom-close-classname`);

        fireEvent(
          iconCloseElement,
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true
          })
        );
      }

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(onSpy.mock.results[0].value.event).toBe(`on-click-close-icon`);
    }
  });
});
