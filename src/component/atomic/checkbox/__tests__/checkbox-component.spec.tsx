import { fireEvent, render } from '@testing-library/react';

import Checkbox from '@/atomic/checkbox';

describe(`Testing Checkbox Component`, () => {
  it(`Testing When Checkbox Selected`, () => {
    const { container } = render(
      <Checkbox value="1" active labelTag="p">
        Label
      </Checkbox>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-checkbox`);
      expect(container.firstChild).toHaveClass(`a-checkbox--active`);

      const toggle = container.firstChild.childNodes[0] as HTMLElement;
      const text = container.firstChild.childNodes[1] as HTMLElement;

      expect((container.firstChild as HTMLElement).childElementCount).toBe(2);
      expect(toggle).toHaveClass(`a-checkbox__toggle`);
      expect(text).toHaveClass(`a-checkbox__text`);
      expect(text.innerHTML).toBe(`Label`);
    }
  });

  it(`Testing When Checkbox Unselected`, () => {
    const { container } = render(
      <Checkbox value="1" labelTag="p">
        Label
      </Checkbox>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-checkbox`);
      expect(container.firstChild).not.toHaveClass(`a-checkbox--active`);

      const toggle = container.firstChild.childNodes[0] as HTMLElement;
      const text = container.firstChild.childNodes[1] as HTMLElement;

      expect((container.firstChild as HTMLElement).childElementCount).toBe(2);
      expect(toggle).toHaveClass(`a-checkbox__toggle`);
      expect(text).toHaveClass(`a-checkbox__text`);
      expect(text.innerHTML).toBe(`Label`);
    }
  });

  it(`Testing trigger onChange Checkbox`, () => {
    const onSpy = jest.fn((output) => output);
    const { container } = render(
      <Checkbox value="sample-value" active labelTag="p" on={onSpy}>
        Label
      </Checkbox>
    );

    if (container.firstChild) {
      fireEvent(
        container.firstChild,
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true
        })
      );
    }

    expect(onSpy).toHaveBeenCalledTimes(1);
    expect(onSpy.mock.results[0].value).toStrictEqual({
      event: `on-change-selection`,
      payload: {
        show: false,
        value: `sample-value`
      }
    });
  });

  it(`Testing Set Classname On Checkbox Component`, () => {
    const { container } = render(
      <Checkbox
        value="1"
        active
        labelTag="p"
        className={{
          label: `sample-label`,
          selector: `sample-selector`,
          wrapper: `sample-wrapper`
        }}
      >
        Label
      </Checkbox>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-checkbox`);
      expect(container.firstChild).toHaveClass(`sample-wrapper`);
      expect(container.firstChild).toHaveClass(`a-checkbox--active`);

      const toggle = container.firstChild.childNodes[0] as HTMLElement;
      const text = container.firstChild.childNodes[1] as HTMLElement;

      expect((container.firstChild as HTMLElement).childElementCount).toBe(2);
      expect(toggle).toHaveClass(`sample-selector`);
      expect(toggle).toHaveClass(`a-checkbox__toggle`);
      expect(text).toHaveClass(`sample-label`);
      expect(text).toHaveClass(`a-checkbox__text`);
    }
  });
});
