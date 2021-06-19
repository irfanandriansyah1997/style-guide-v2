import { render } from '@testing-library/react';

import Meter from '@/atomic/meter';

describe(`Testing Meter Component`, () => {
  it(`Testing Render Meter`, () => {
    const { container } = render(
      <Meter
        value={10}
        className={{ wrapper: `sample-class-name` }}
        height={15}
      />
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      const content = childNodes[0] as HTMLElement;

      expect(childElementCount).toBe(1);
      expect(container.firstChild as HTMLElement).toHaveClass(
        `sample-class-name`
      );
      expect(container.firstChild as HTMLElement).toHaveStyle({
        backgroundColor: `#f5f5f5`
      });
      expect(container.firstChild as HTMLElement).toHaveStyle({
        borderRadius: `10px`
      });
      expect(container.firstChild as HTMLElement).toHaveStyle({
        height: `15px`
      });

      expect(content).toHaveClass(`a-meter__value`);
      expect(content).toHaveStyle({
        backgroundColor: `#399ff9`
      });
      expect(content).toHaveStyle({
        borderRadius: `10px`
      });
      expect(content).toHaveStyle({
        height: `15px`
      });
      expect(content).toHaveStyle({
        width: `10%`
      });
    }
  });

  it(`Testing Render Meter with Square Shape`, () => {
    const { container } = render(
      <Meter
        value={25}
        borderRadius="square"
        className={{ wrapper: `sample-class-name` }}
        height={15}
      />
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      const content = childNodes[0] as HTMLElement;

      expect(childElementCount).toBe(1);
      expect(container.firstChild as HTMLElement).toHaveClass(
        `sample-class-name`
      );
      expect(container.firstChild as HTMLElement).toHaveStyle({
        backgroundColor: `#f5f5f5`
      });
      expect(container.firstChild as HTMLElement).toHaveStyle({
        borderRadius: `0`
      });
      expect(container.firstChild as HTMLElement).toHaveStyle({
        height: `15px`
      });

      expect(content).toHaveClass(`a-meter__value`);
      expect(content).toHaveStyle({
        backgroundColor: `#399ff9`
      });
      expect(content).toHaveStyle({
        borderRadius: `0`
      });
      expect(content).toHaveStyle({
        height: `15px`
      });
      expect(content).toHaveStyle({
        width: `25%`
      });
    }
  });

  it(`Testing Render Meter with Custom Rounded Ratio`, () => {
    const { container } = render(
      <Meter
        value={25}
        borderRadius={5}
        className={{ wrapper: `sample-class-name` }}
        height={15}
      />
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      const content = childNodes[0] as HTMLElement;

      expect(childElementCount).toBe(1);
      expect(container.firstChild as HTMLElement).toHaveClass(
        `sample-class-name`
      );
      expect(container.firstChild as HTMLElement).toHaveStyle({
        backgroundColor: `#f5f5f5`
      });
      expect(container.firstChild as HTMLElement).toHaveStyle({
        borderRadius: `5px`
      });
      expect(container.firstChild as HTMLElement).toHaveStyle({
        height: `15px`
      });

      expect(content).toHaveClass(`a-meter__value`);
      expect(content).toHaveStyle({
        backgroundColor: `#399ff9`
      });
      expect(content).toHaveStyle({
        borderRadius: `5px`
      });
      expect(content).toHaveStyle({
        height: `15px`
      });
      expect(content).toHaveStyle({
        width: `25%`
      });
    }
  });
});
