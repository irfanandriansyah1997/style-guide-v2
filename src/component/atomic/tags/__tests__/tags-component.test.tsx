import { fireEvent, render } from '@testing-library/react';

import Tags from '@/atomic/tags';

describe(`Testing Tags Component With Tag Anchor`, () => {
  it(`Testing Tags Normally`, () => {
    const onClickSpy = jest.fn();
    const { container } = render(<Tags onClick={onClickSpy}>Testing</Tags>);

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-tags`);
      expect(container.firstChild).toHaveClass(`a-tags--size-default`);
      expect(container.firstChild).toHaveClass(`a-tags--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-tags--outline`);
      expect(container.firstChild).not.toHaveClass(`a-tags--rounded`);
      expect(container.firstChild).not.toHaveClass(`a-tags--rtl`);

      const element = container.querySelector(`.a-tags > div`) as HTMLElement;

      if (element) {
        expect(element).not.toHaveClass(`flex-row-reverse`);
      }

      fireEvent(
        container.firstChild,
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true
        })
      );

      expect(onClickSpy).toHaveBeenCalledTimes(1);
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
      expect(container.firstChild).not.toHaveClass(`a-tags--rtl`);

      const element = container.querySelector(`.a-tags > div`) as HTMLElement;

      if (element) {
        expect(element).not.toHaveClass(`flex-row-reverse`);
      }
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
      expect(container.firstChild).not.toHaveClass(`a-tags--rtl`);

      const element = container.querySelector(`.a-tags > div`) as HTMLElement;

      if (element) {
        expect(element).not.toHaveClass(`flex-row-reverse`);
      }
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
      expect(container.firstChild).not.toHaveClass(`a-tags--rtl`);

      const element = container.querySelector(`.a-tags > div`) as HTMLElement;

      if (element) {
        expect(element).not.toHaveClass(`flex-row-reverse`);
      }
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
      expect(container.firstChild).not.toHaveClass(`a-tags--rtl`);

      const element = container.querySelector(`.a-tags > div`) as HTMLElement;

      if (element) {
        expect(element).not.toHaveClass(`flex-row-reverse`);
      }
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
      expect(container.firstChild).toHaveClass(`a-tags--rtl`);

      const element = container.querySelector(`.a-tags > div`) as HTMLElement;

      if (element) {
        expect(element).toHaveClass(`flex-row-reverse`);
      }
    }
  });

  it(`Testing With Set Custom Classname`, () => {
    const { container } = render(
      <Tags
        rtl
        className={{
          content: `custom-className`,
          wrapper: `custom-wrapper`
        }}
      >
        Testing
      </Tags>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`custom-wrapper`);
      expect(container.firstChild).toHaveClass(`a-tags`);
      expect(container.firstChild).toHaveClass(`a-tags--size-default`);
      expect(container.firstChild).toHaveClass(`a-tags--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-tags--outline`);
      expect(container.firstChild).not.toHaveClass(`a-tags--rounded`);
      expect(container.firstChild).toHaveClass(`a-tags--rtl`);

      const element = container.querySelector(`.a-tags > div`) as HTMLElement;

      if (element) {
        expect(element).toHaveClass(`flex-row-reverse`);
        expect(element).toHaveClass(`custom-className`);
      }
    }
  });
});
