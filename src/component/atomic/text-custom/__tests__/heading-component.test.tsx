import { render, screen } from '@testing-library/react';

import Text from '@/atomic/text-custom';
import { STYLE_GUIDE_FONT_WEIGHT } from '@/constant/typography';

describe(`Test Heading component`, () => {
  it(`Render heading 1 component`, () => {
    render(
      <Text.Headline1 fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}>
        Hello
      </Text.Headline1>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text`);
    expect(element.style.fontSize).toBe(`40px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(`48px`);
    expect(element.tagName).toBe(`H1`);
  });

  it(`Render heading 2 component`, () => {
    render(
      <Text.Headline2 fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}>
        Hello
      </Text.Headline2>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text`);
    expect(element.style.fontSize).toBe(`32px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(`40px`);
    expect(element.tagName).toBe(`H2`);
  });

  it(`Render heading 3 component`, () => {
    render(
      <Text.Headline3 fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}>
        Hello
      </Text.Headline3>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text`);
    expect(element.style.fontSize).toBe(`30px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(`40px`);
    expect(element.tagName).toBe(`H3`);
  });

  it(`Render heading 4 component`, () => {
    render(
      <Text.Headline4 fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}>
        Hello
      </Text.Headline4>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text`);
    expect(element.style.fontSize).toBe(`24px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(`32px`);
    expect(element.tagName).toBe(`H4`);
  });

  it(`Render heading 5 component`, () => {
    render(
      <Text.Headline5 fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}>
        Hello
      </Text.Headline5>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text`);
    expect(element.style.fontSize).toBe(`20px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(`32px`);
    expect(element.tagName).toBe(`H5`);
  });

  it(`Render heading 6 component`, () => {
    render(
      <Text.Headline6 fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}>
        Hello
      </Text.Headline6>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text`);
    expect(element.style.fontSize).toBe(`18px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(`24px`);
    expect(element.tagName).toBe(`H6`);
  });
});
