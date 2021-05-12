import { FC } from 'react';

import TextComponent from '@/component/atomic/text';
import { IHeadlineProps } from '@/component/atomic/text-custom/interface';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/utils/constant/typography';

/**
 * Headline 1 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Headline1Component: FC<IHeadlineProps> = (props) => (
  <TextComponent.H1
    fontSize={STYLE_GUIDE_FONT_SIZE[`headline-1`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`headline-1`]}
    {...props}
  />
);

/**
 * Headline 2 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Headline2Component: FC<IHeadlineProps> = (props) => (
  <TextComponent.H2
    fontSize={STYLE_GUIDE_FONT_SIZE[`headline-2`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`headline-2`]}
    {...props}
  />
);

/**
 * Headline 3 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Headline3Component: FC<IHeadlineProps> = (props) => (
  <TextComponent.H3
    fontSize={STYLE_GUIDE_FONT_SIZE[`headline-3`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`headline-3`]}
    {...props}
  />
);

/**
 * Headline 4 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Headline4Component: FC<IHeadlineProps> = (props) => (
  <TextComponent.H4
    fontSize={STYLE_GUIDE_FONT_SIZE[`headline-4`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`headline-4`]}
    {...props}
  />
);

/**
 * Headline 5 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Headline5Component: FC<IHeadlineProps> = (props) => (
  <TextComponent.H5
    fontSize={STYLE_GUIDE_FONT_SIZE[`headline-5`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`headline-5`]}
    {...props}
  />
);

/**
 * Headline 6 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Headline6Component: FC<IHeadlineProps> = (props) => (
  <TextComponent.H6
    fontSize={STYLE_GUIDE_FONT_SIZE[`headline-6`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`headline-6`]}
    {...props}
  />
);
