import { render, screen } from '@testing-library/react';

import Text from '@/atomic/text-custom';
import { STYLE_GUIDE_FONT_WEIGHT } from '@/constant/typography';

describe(`Test Label component`, () => {
  it(`Render label component`, () => {
    render(
      <Text.Label fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}>Hello</Text.Label>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text`);
    expect(element.style.fontSize).toBe(`12px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(`16px`);
    expect(element.tagName).toBe(`P`);
  });
});
