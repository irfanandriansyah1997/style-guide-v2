import { render } from '@testing-library/react';

import Avatar from '@/atomic/avatar';
import { STYLE_GUIDE_COLOR } from '@/constant/color';

describe(`Testing Avatar Component`, () => {
  it(`Testing Avatar With Image`, () => {
    const { container } = render(
      <Avatar
        src="image.jpg"
        alt="images alt"
        size="big"
        className="sample-classname"
      />
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-avatar`);
      expect(container.firstChild).toHaveClass(`a-image`);
      expect(container.firstChild).toHaveClass(`a-image--shape-circle`);
      expect(container.firstChild).toHaveClass(`sample-classname`);
      expect(container.firstChild).toHaveAttribute(`alt`, `images alt`);
      expect(container.firstChild).toHaveAttribute(`src`, `image.jpg`);
      expect((container.firstChild as HTMLElement).style.objectFit).toBe(
        `initial`
      );
      expect((container.firstChild as HTMLElement).style.width).toBe(`44px`);
      expect((container.firstChild as HTMLElement).style.height).toBe(`44px`);
    }
  });

  it(`Testing Avatar With Icon`, () => {
    const { container } = render(
      <Avatar size="medium" className="sample-classname">
        <div
          style={{
            backgroundColor: STYLE_GUIDE_COLOR.danger500,
            height: 5,
            width: 5
          }}
        />
      </Avatar>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-avatar`);
      expect(container.firstChild).toHaveClass(`sample-classname`);
      expect((container.firstChild as HTMLElement).style.width).toBe(`10px`);
      expect((container.firstChild as HTMLElement).style.height).toBe(`10px`);
      expect((container.firstChild as HTMLElement).childElementCount).toBe(1);
    }
  });

  it(`Testing Avatar With Custom Size`, () => {
    const { container } = render(
      <Avatar
        src="image.jpg"
        alt="images alt"
        className="sample-classname"
        size={36}
      />
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-avatar`);
      expect(container.firstChild).toHaveClass(`a-image`);
      expect(container.firstChild).toHaveClass(`a-image--shape-circle`);
      expect(container.firstChild).toHaveClass(`sample-classname`);
      expect(container.firstChild).toHaveAttribute(`alt`, `images alt`);
      expect(container.firstChild).toHaveAttribute(`src`, `image.jpg`);
      expect((container.firstChild as HTMLElement).style.objectFit).toBe(
        `initial`
      );
      expect((container.firstChild as HTMLElement).style.width).toBe(`36px`);
      expect((container.firstChild as HTMLElement).style.height).toBe(`36px`);
    }
  });

  it(`Testing Avatar Without Icon & Image`, () => {
    const { container } = render(
      <Avatar alt="images alt" className="sample-classname" size={36} />
    );

    expect(container.firstChild).toBeNull();
  });
});
