import { fireEvent, render } from '@testing-library/react';

import Tooltip from '@/atomic/tooltip';
import { STYLE_GUIDE_COLOR } from '@/constant/color';

describe(`Test Tooltip component`, () => {
  it(`Simulate Hover Tooltip`, () => {
    const { container } = render(
      <Tooltip
        content="Sample Content"
        position="right"
        background={STYLE_GUIDE_COLOR.light100}
        className={{
          toggle: `sample-class-toggle`,
          tooltip: `sample-class-tooltip`
        }}
      >
        <h1>Hover This Heading</h1>
      </Tooltip>
    );

    expect(container.outerHTML).toMatchSnapshot();

    if (container.firstChild) {
      const {
        childNodes: firstChildNodes
      } = container.firstChild as HTMLElement;
      const toggle = firstChildNodes[0] as HTMLElement;

      expect((container.firstChild as HTMLElement).childElementCount).toBe(1);
      expect(toggle).toHaveClass(`sample-class-toggle`);
      expect(toggle).toHaveTextContent(`Hover This Heading`);
      expect((toggle.firstChild as HTMLElement).tagName).toBe(`H1`);

      fireEvent.mouseEnter(toggle);
      expect(container.outerHTML).toMatchSnapshot();

      const {
        childNodes: secondChildNodes
      } = container.firstChild as HTMLElement;
      expect((container.firstChild as HTMLElement).childElementCount).toBe(2);
      const tooltip = secondChildNodes[1] as HTMLElement;
      const triangle = tooltip.childNodes[0];

      expect(tooltip.childElementCount).toBe(1);
      expect(tooltip).toHaveClass(`a-tooltip__content`);
      expect(tooltip).toHaveClass(`a-tooltip__content--position-right`);
      expect(tooltip).toHaveClass(`sample-class-tooltip`);
      expect(tooltip).toHaveStyle({
        backgroundColor: `rgb(250, 250, 250)`
      });
      expect(tooltip).toHaveTextContent(`Sample Content`);

      expect(triangle).toHaveClass(`a-tooltip__triangle`);
      expect(triangle).toHaveStyle({ borderRightColor: `#fafafa` });
    }
  });

  it(`Simulate Hover Tooltip Bottom`, () => {
    const { container } = render(
      <Tooltip
        content="Sample Content"
        position="bottom"
        background={STYLE_GUIDE_COLOR.danger500}
        className={{
          toggle: `sample-class-toggle`,
          tooltip: `sample-class-tooltip`
        }}
      >
        <h1>Hover This Heading</h1>
      </Tooltip>
    );

    expect(container.outerHTML).toMatchSnapshot();

    if (container.firstChild) {
      const {
        childNodes: firstChildNodes
      } = container.firstChild as HTMLElement;
      const toggle = firstChildNodes[0] as HTMLElement;

      expect((container.firstChild as HTMLElement).childElementCount).toBe(1);
      expect(toggle).toHaveClass(`sample-class-toggle`);
      expect(toggle).toHaveTextContent(`Hover This Heading`);
      expect((toggle.firstChild as HTMLElement).tagName).toBe(`H1`);

      fireEvent.mouseEnter(toggle);
      expect(container.outerHTML).toMatchSnapshot();

      const {
        childNodes: secondChildNodes
      } = container.firstChild as HTMLElement;
      expect((container.firstChild as HTMLElement).childElementCount).toBe(2);
      const tooltip = secondChildNodes[1] as HTMLElement;
      const triangle = tooltip.childNodes[0];

      expect(tooltip.childElementCount).toBe(1);
      expect(tooltip).toHaveClass(`a-tooltip__content`);
      expect(tooltip).toHaveClass(`a-tooltip__content--position-bottom`);
      expect(tooltip).toHaveClass(`sample-class-tooltip`);
      expect(tooltip).toHaveStyle({
        backgroundColor: `rgb(255, 79, 56)`
      });
      expect(tooltip).toHaveTextContent(`Sample Content`);

      expect(triangle).toHaveClass(`a-tooltip__triangle`);
      expect(triangle).toHaveStyle({ borderBottomColor: `#ff4f38` });
    }
  });

  it(`Simulate Hover Tooltip Not Visible`, () => {
    const { container } = render(
      <Tooltip
        content="Sample Content"
        position="right"
        visible={false}
        background={STYLE_GUIDE_COLOR.light100}
        className={{
          toggle: `sample-class-toggle`,
          tooltip: `sample-class-tooltip`
        }}
      >
        <h1>Hover This Heading</h1>
      </Tooltip>
    );

    expect(container.outerHTML).toMatchSnapshot();

    if (container.firstChild) {
      const {
        childNodes: firstChildNodes
      } = container.firstChild as HTMLElement;
      const toggle = firstChildNodes[0] as HTMLElement;

      expect((container.firstChild as HTMLElement).childElementCount).toBe(1);
      expect(toggle).toHaveClass(`sample-class-toggle`);
      expect(toggle).toHaveTextContent(`Hover This Heading`);
      expect((toggle.firstChild as HTMLElement).tagName).toBe(`H1`);

      fireEvent.mouseEnter(toggle);
      expect(container.outerHTML).toMatchSnapshot();

      expect((container.firstChild as HTMLElement).childElementCount).toBe(1);
    }
  });
});
