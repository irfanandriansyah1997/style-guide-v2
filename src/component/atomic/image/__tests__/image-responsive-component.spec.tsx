import { render } from '@testing-library/react';

import Image from '@/atomic/image';

describe(`Testing Image Responsive Component`, () => {
  it(`Testing With Image Preset Not Null`, () => {
    const { container } = render(
      <Image.Responsive
        shape="circle"
        alt="sample-alt"
        className="sample"
        sizes="50vw"
      >
        <Image.Preset src="image-320.jpg" sizes={320} />
        <Image.Preset src="image-480.jpg" sizes={480} />
        <Image.Preset src="image-720.jpg" sizes={720} />
        <Image.Preset src="image-1080.jpg" sizes={1080} />
        <Image.Preset src="image-1280.jpg" sizes={1280} />
      </Image.Responsive>
    );

    if (container.firstChild) {
      expect(container.firstChild).toHaveClass(`a-image`);
      expect(container.firstChild).toHaveClass(`a-image--shape-circle`);
      expect(container.firstChild).toHaveClass(`sample`);
      expect(container.firstChild).toHaveAttribute(`alt`, `sample-alt`);
      expect(container.firstChild).toHaveAttribute(`sizes`, `50vw`);
      expect(container.firstChild).toHaveAttribute(`src`, `image-320.jpg`);
      expect(container.firstChild).toHaveAttribute(
        `srcSet`,
        `image-320.jpg 320w,image-480.jpg 480w,image-720.jpg 720w,image-1080.jpg 1080w,image-1280.jpg 1280w`
      );
      expect((container.firstChild as HTMLElement).style.objectFit).toBe(
        `initial`
      );
    }
  });

  it(`Testing Without Image Preset`, () => {
    const { container } = render(
      <Image.Responsive
        shape="circle"
        alt="sample-alt"
        className="sample"
        sizes="50vw"
      >
        testing
      </Image.Responsive>
    );

    expect(container.firstChild).toBeNull();
  });
});
