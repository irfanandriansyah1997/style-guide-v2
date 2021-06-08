import { fireEvent, render } from '@testing-library/react';

import Radio from '@/atomic/radio';

describe(`Testing Radio Component`, () => {
  it(`Testing When Radio Selected`, () => {
    const { container } = render(
      <Radio value="1" active labelTag="p">
        Label
      </Radio>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-radio`);
      expect(container.firstChild).toHaveClass(`a-radio--active`);

      const toggle = container.firstChild.childNodes[0] as HTMLElement;
      const text = container.firstChild.childNodes[1] as HTMLElement;

      expect((container.firstChild as HTMLElement).childElementCount).toBe(2);
      expect(toggle).toHaveClass(`a-radio__toggle`);
      expect(text).toHaveClass(`a-radio__text`);
      expect(text.innerHTML).toBe(`Label`);
    }
  });

  it(`Testing When Radio Unselected`, () => {
    const { container } = render(
      <Radio value="1" labelTag="p">
        Label
      </Radio>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-radio`);
      expect(container.firstChild).not.toHaveClass(`a-radio--active`);

      const toggle = container.firstChild.childNodes[0] as HTMLElement;
      const text = container.firstChild.childNodes[1] as HTMLElement;

      expect((container.firstChild as HTMLElement).childElementCount).toBe(2);
      expect(toggle).toHaveClass(`a-radio__toggle`);
      expect(text).toHaveClass(`a-radio__text`);
      expect(text.innerHTML).toBe(`Label`);
    }
  });

  it(`Testing trigger onChange radio`, () => {
    const onSpy = jest.fn((output) => output);
    const { container } = render(
      <Radio value="sample-value" active labelTag="p" on={onSpy}>
        Label
      </Radio>
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

  it(`Testing Set Classname On Radio Component`, () => {
    const { container } = render(
      <Radio
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
      </Radio>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-radio`);
      expect(container.firstChild).toHaveClass(`sample-wrapper`);
      expect(container.firstChild).toHaveClass(`a-radio--active`);

      const toggle = container.firstChild.childNodes[0] as HTMLElement;
      const text = container.firstChild.childNodes[1] as HTMLElement;

      expect((container.firstChild as HTMLElement).childElementCount).toBe(2);
      expect(toggle).toHaveClass(`sample-selector`);
      expect(toggle).toHaveClass(`a-radio__toggle`);
      expect(text).toHaveClass(`sample-label`);
      expect(text).toHaveClass(`a-radio__text`);
    }
  });
});
