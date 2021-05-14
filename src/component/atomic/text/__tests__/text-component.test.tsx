import { render, screen } from '@testing-library/react';

import Text from '@/atomic/text';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_FONT_WEIGHT,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/constant/typography';
import { doTestFixture } from '@/helper/unit-testing.helper';

import { FIXTURE_TEXT_COMPONENT } from './__mocks__/text.mock';

describe(`Test text component`, () => {
  it(`Render text component normally`, () => {
    render(
      <Text
        tag="p"
        lineHeight={STYLE_GUIDE_LINE_HEIGHT[`caption-1`]}
        fontSize={STYLE_GUIDE_FONT_SIZE[`caption-1`]}
        fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}
      >
        Hello
      </Text>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text`);
    expect(element.style.fontSize).toBe(`12px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(`16px`);
    expect(element.tagName).toBe(`P`);
  });

  it(`Render text component without line height`, () => {
    const { container } = render(
      <Text
        tag="p"
        className="test"
        fontSize={STYLE_GUIDE_FONT_SIZE[`caption-1`]}
        fontWeight={STYLE_GUIDE_FONT_WEIGHT.light}
      >
        Hello
      </Text>
    );
    const element = screen.getByText(`Hello`);

    expect(element.className).toBe(`a-text test`);
    expect(element.style.fontSize).toBe(`12px`);
    expect(element.style.fontWeight).toBe(`300`);
    expect(element.style.lineHeight).toBe(``);
    expect(element.tagName).toBe(`P`);
    expect(container.outerHTML).toMatchSnapshot();
  });

  it(`Testing With Mock`, () => {
    doTestFixture(
      FIXTURE_TEXT_COMPONENT,
      (
        input,
        {
          color,
          fontFamily,
          fontSize,
          fontWeight,
          lineHeight,
          tag,
          textAlign,
          textDecoration
        }
      ) => {
        const { container } = render(<Text {...input}>Hello</Text>);
        const element = container.children;

        if (element.length > 0) {
          expect((element[0] as HTMLElement).style.color).toBe(color);
          expect((element[0] as HTMLElement).style.fontFamily).toBe(fontFamily);
          expect((element[0] as HTMLElement).style.fontSize).toBe(fontSize);
          expect((element[0] as HTMLElement).style.fontWeight).toBe(fontWeight);
          expect((element[0] as HTMLElement).style.lineHeight).toBe(lineHeight);
          expect((element[0] as HTMLElement).tagName).toBe(tag);
          expect((element[0] as HTMLElement).style.textAlign).toBe(textAlign);
          expect((element[0] as HTMLElement).style.textDecoration).toBe(
            textDecoration
          );
          expect(container.outerHTML).toMatchSnapshot();
        }
      }
    );
  });
});
