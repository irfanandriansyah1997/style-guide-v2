import { render, screen } from '@testing-library/react';

import Text from '@/atomic/text-custom';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import { STYLE_GUIDE_FONT_WEIGHT } from '@/constant/typography';

describe(`Test Paragraph component`, () => {
  it(`Render paragraph 1 component`, () => {
    render(
      <Text.Paragraph1 fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}>
        Hello
      </Text.Paragraph1>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text`);
    expect(element.style.fontSize).toBe(`16px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(`20px`);
    expect(element.tagName).toBe(`P`);
  });

  it(`Render paragraph 2 component`, () => {
    render(
      <Text.Paragraph2
        fontWeight={STYLE_GUIDE_FONT_WEIGHT.black}
        color={STYLE_GUIDE_COLOR.dark100}
        className="caption-2"
      >
        Hello
      </Text.Paragraph2>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text caption-2`);
    expect(element.style.fontSize).toBe(`14px`);
    expect(element.style.color).toBe(`rgb(206, 211, 215)`);
    expect(element.style.fontWeight).toBe(`900`);
    expect(element.style.lineHeight).toBe(`18px`);
    expect(element.tagName).toBe(`P`);
  });
});
