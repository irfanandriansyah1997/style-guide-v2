import { fireEvent, render } from '@testing-library/react';

import Button from '@/atomic/button';

describe(`Testing Button Component With Tag Anchor`, () => {
  it(`Testing Button Normally`, () => {
    const onClickSpy = jest.fn();
    const { container } = render(
      <Button.Anchor onClick={onClickSpy}>Testing</Button.Anchor>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-button`);
      expect(container.firstChild).toHaveClass(`a-button--size-default`);
      expect(container.firstChild).toHaveClass(`a-button--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-button--outline`);
      expect(container.firstChild).not.toHaveClass(`a-button--rounded`);
      expect(container.firstChild).not.toHaveClass(`a-button--rtl`);

      const element = container.querySelector(`.a-button > div`) as HTMLElement;

      if (element) {
        const text = element.childNodes[0] as HTMLElement;

        expect(element.childElementCount).toBe(1);
        expect(element).not.toHaveClass(`flex-row-reverse`);
        expect(text).toHaveClass(`a-text`);
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

  it(`Testing Button Rounded`, () => {
    const { container } = render(
      <Button.Anchor rounded size="big">
        Testing
      </Button.Anchor>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-button`);
      expect(container.firstChild).not.toHaveClass(`a-button--size-default`);
      expect(container.firstChild).not.toHaveClass(`a-button--size-small`);
      expect(container.firstChild).toHaveClass(`a-button--size-big`);
      expect(container.firstChild).toHaveClass(`a-button--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-button--outline`);
      expect(container.firstChild).toHaveClass(`a-button--rounded`);
      expect(container.firstChild).not.toHaveClass(`a-button--rtl`);

      const element = container.querySelector(`.a-button > div`) as HTMLElement;

      if (element) {
        const text = element.childNodes[0] as HTMLElement;

        expect(element.childElementCount).toBe(1);
        expect(element).not.toHaveClass(`flex-row-reverse`);
        expect(text).toHaveClass(`a-text`);
      }
    }
  });

  it(`Testing Button Dark`, () => {
    const { container } = render(
      <Button.Anchor theme="dark" size="small">
        Testing
      </Button.Anchor>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-button`);
      expect(container.firstChild).not.toHaveClass(`a-button--size-default`);
      expect(container.firstChild).toHaveClass(`a-button--size-small`);
      expect(container.firstChild).not.toHaveClass(`a-button--size-big`);
      expect(container.firstChild).toHaveClass(`a-button--theme-dark`);
      expect(container.firstChild).not.toHaveClass(`a-button--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-button--outline`);
      expect(container.firstChild).not.toHaveClass(`a-button--rounded`);
      expect(container.firstChild).not.toHaveClass(`a-button--rtl`);

      const element = container.querySelector(`.a-button > div`) as HTMLElement;

      if (element) {
        const text = element.childNodes[0] as HTMLElement;

        expect(element.childElementCount).toBe(1);
        expect(element).not.toHaveClass(`flex-row-reverse`);
        expect(text).toHaveClass(`a-text`);
      }
    }
  });

  it(`Testing Button Outline`, () => {
    const { container } = render(
      <Button.Anchor outline>Testing</Button.Anchor>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-button`);
      expect(container.firstChild).toHaveClass(`a-button--size-default`);
      expect(container.firstChild).not.toHaveClass(`a-button--theme-dark`);
      expect(container.firstChild).not.toHaveClass(`a-button--theme-light`);
      expect(container.firstChild).toHaveClass(`a-button--outline`);
      expect(container.firstChild).not.toHaveClass(`a-button--rounded`);
      expect(container.firstChild).not.toHaveClass(`a-button--rtl`);

      const element = container.querySelector(`.a-button > div`) as HTMLElement;

      if (element) {
        const text = element.childNodes[0] as HTMLElement;

        expect(element.childElementCount).toBe(1);
        expect(element).not.toHaveClass(`flex-row-reverse`);
        expect(text).toHaveClass(`a-text`);
      }
    }
  });

  it(`Testing Button With Icon & RTL`, () => {
    const { container } = render(
      <Button.Anchor rtl icon={<div style={{ height: 15, width: 15 }} />}>
        Testing
      </Button.Anchor>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-button`);
      expect(container.firstChild).toHaveClass(`a-button--size-default`);
      expect(container.firstChild).toHaveClass(`a-button--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-button--outline`);
      expect(container.firstChild).not.toHaveClass(`a-button--rounded`);
      expect(container.firstChild).toHaveClass(`a-button--rtl`);

      const element = container.querySelector(`.a-button > div`) as HTMLElement;

      if (element) {
        const icon = element.childNodes[0] as HTMLElement;
        const text = element.childNodes[1] as HTMLElement;

        expect(element.childElementCount).toBe(2);
        expect(element).toHaveClass(`flex-row-reverse`);
        expect(icon).toHaveClass(`a-button__icon`);
        expect(text).toHaveClass(`a-button__text`);
      }
    }
  });

  it(`Testing With Set Custom Classname`, () => {
    const { container } = render(
      <Button.Anchor
        rtl
        icon={<div style={{ height: 15, width: 15 }} />}
        className={{
          content: `custom-className`,
          icon: `custom-icon`,
          text: `custom-text`,
          wrapper: `custom-wrapper`
        }}
      >
        Testing
      </Button.Anchor>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`custom-wrapper`);
      expect(container.firstChild).toHaveClass(`a-button`);
      expect(container.firstChild).toHaveClass(`a-button--size-default`);
      expect(container.firstChild).toHaveClass(`a-button--theme-light`);
      expect(container.firstChild).not.toHaveClass(`a-button--outline`);
      expect(container.firstChild).not.toHaveClass(`a-button--rounded`);
      expect(container.firstChild).toHaveClass(`a-button--rtl`);

      const element = container.querySelector(`.a-button > div`) as HTMLElement;

      if (element) {
        const icon = element.childNodes[0] as HTMLElement;
        const text = element.childNodes[1] as HTMLElement;

        expect(element.childElementCount).toBe(2);
        expect(element).toHaveClass(`flex-row-reverse`);
        expect(element).toHaveClass(`custom-className`);
        expect(icon).toHaveClass(`a-button__icon`);
        expect(icon).toHaveClass(`custom-icon`);
        expect(text).toHaveClass(`a-button__text`);
        expect(text).toHaveClass(`custom-text`);
      }
    }
  });
});
