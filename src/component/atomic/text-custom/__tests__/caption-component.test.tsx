import { render, screen } from '@testing-library/react';

import Text from '@/atomic/text-custom';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import { STYLE_GUIDE_FONT_WEIGHT } from '@/constant/typography';

describe(`Test Caption component`, () => {
  it(`Render caption 1 component`, () => {
    render(
      <Text.Caption1 fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}>
        Hello
      </Text.Caption1>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text`);
    expect(element.style.fontSize).toBe(`12px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(`16px`);
    expect(element.tagName).toBe(`SPAN`);
  });

  it(`Render caption 2 component`, () => {
    render(
      <Text.Caption2
        fontWeight={STYLE_GUIDE_FONT_WEIGHT.black}
        color={STYLE_GUIDE_COLOR.dark100}
        className="caption-2"
      >
        Hello
      </Text.Caption2>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text caption-2`);
    expect(element.style.fontSize).toBe(`10px`);
    expect(element.style.color).toBe(`rgb(206, 211, 215)`);
    expect(element.style.fontWeight).toBe(`900`);
    expect(element.style.lineHeight).toBe(`16px`);
    expect(element.tagName).toBe(`SPAN`);
  });
});
