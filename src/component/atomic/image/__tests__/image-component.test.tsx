import { render } from '@testing-library/react';

import Image from '@/atomic/image';

describe(`Testing Image Component`, () => {
  it(`Testing Default Image`, () => {
    const { container } = render(
      <Image
        shape="circle"
        alt="sample-alt"
        className="sample"
        src="image.jpg"
      />
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-image`);
      expect(container.firstChild).toHaveClass(`a-image--shape-circle`);
      expect(container.firstChild).toHaveClass(`sample`);
      expect(container.firstChild).toHaveAttribute(`alt`, `sample-alt`);
      expect(container.firstChild).toHaveAttribute(`src`, `image.jpg`);
      expect((container.firstChild as HTMLElement).style.objectFit).toBe(
        `initial`
      );
    }
  });

  it(`Testing Set Object fit & Size Image`, () => {
    const { container } = render(
      <Image
        shape="circle"
        alt="sample-alt"
        className="sample"
        src="image.jpg"
        objectFit="cover"
        height="100px"
        width="100px"
      />
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-image`);
      expect(container.firstChild).toHaveClass(`a-image--shape-circle`);
      expect(container.firstChild).toHaveClass(`sample`);
      expect(container.firstChild).toHaveAttribute(`alt`, `sample-alt`);
      expect(container.firstChild).toHaveAttribute(`src`, `image.jpg`);
      expect((container.firstChild as HTMLElement).style.objectFit).toBe(
        `cover`
      );
      expect((container.firstChild as HTMLElement).style.width).toBe(`100px`);
      expect((container.firstChild as HTMLElement).style.height).toBe(`100px`);
    }
  });
});
