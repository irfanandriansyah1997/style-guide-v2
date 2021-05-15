import { ITextProps } from '@/atomic/text/interface';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_FONT_WEIGHT,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/constant/typography';
import { IUnitTestingFixture } from '@/interface/unit-test';

test.skip(`Skip Testing Just Mock`, () => undefined);

interface IOutputTextFixture {
  color: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  tag: string;
  textAlign: string;
  textDecoration: string;
}

export const FIXTURE_TEXT_COMPONENT: IUnitTestingFixture<
  ITextProps,
  IOutputTextFixture
> = {
  input: [
    {
      color: STYLE_GUIDE_COLOR.danger100,
      fontFamily: `a`,
      fontSize: STYLE_GUIDE_FONT_SIZE[`caption-1`],
      fontWeight: STYLE_GUIDE_FONT_WEIGHT.black,
      lineHeight: STYLE_GUIDE_LINE_HEIGHT[`caption-1`],
      tag: `p`,
      textAlign: `center`,
      textDecoration: `underline`
    },
    {
      color: STYLE_GUIDE_COLOR.warning100,
      fontFamily: `b`,
      fontSize: STYLE_GUIDE_FONT_SIZE.label,
      fontWeight: STYLE_GUIDE_FONT_WEIGHT.light,
      lineHeight: STYLE_GUIDE_LINE_HEIGHT.label,
      tag: `span`,
      textAlign: undefined,
      textDecoration: undefined
    },
    {
      color: STYLE_GUIDE_COLOR.warning100,
      fontFamily: `b`,
      fontSize: undefined,
      fontWeight: undefined,
      lineHeight: STYLE_GUIDE_LINE_HEIGHT.label,
      tag: `h1`,
      textAlign: undefined,
      textDecoration: undefined
    }
  ],
  output: [
    {
      color: `rgb(255, 232, 214)`,
      fontFamily: `a`,
      fontSize: `${STYLE_GUIDE_FONT_SIZE[`caption-1`]}px`,
      fontWeight: `${STYLE_GUIDE_FONT_WEIGHT.black}`,
      lineHeight: `${STYLE_GUIDE_LINE_HEIGHT[`caption-1`]}px`,
      tag: `P`,
      textAlign: `center`,
      textDecoration: `underline`
    },
    {
      color: `rgb(255, 247, 209)`,
      fontFamily: `b`,
      fontSize: `${STYLE_GUIDE_FONT_SIZE.label}px`,
      fontWeight: `${STYLE_GUIDE_FONT_WEIGHT.light}`,
      lineHeight: `${STYLE_GUIDE_LINE_HEIGHT.label}px`,
      tag: `SPAN`,
      textAlign: ``,
      textDecoration: ``
    },
    {
      color: `rgb(255, 247, 209)`,
      fontFamily: `b`,
      fontSize: ``,
      fontWeight: ``,
      lineHeight: `${STYLE_GUIDE_LINE_HEIGHT.label}px`,
      tag: `H1`,
      textAlign: ``,
      textDecoration: ``
    }
  ]
};
