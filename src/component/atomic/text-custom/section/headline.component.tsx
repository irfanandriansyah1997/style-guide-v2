import { FC } from 'react';

import Text from '@/atomic/text';
import { IHeadlineProps } from '@/atomic/text-custom/interface';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/constant/typography';

/**
 * Headline 1 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Headline1: FC<IHeadlineProps> = (props) => (
  <Text.H1
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
export const Headline2: FC<IHeadlineProps> = (props) => (
  <Text.H2
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
export const Headline3: FC<IHeadlineProps> = (props) => (
  <Text.H3
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
export const Headline4: FC<IHeadlineProps> = (props) => (
  <Text.H4
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
export const Headline5: FC<IHeadlineProps> = (props) => (
  <Text.H5
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
export const Headline6: FC<IHeadlineProps> = (props) => (
  <Text.H6
    fontSize={STYLE_GUIDE_FONT_SIZE[`headline-6`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`headline-6`]}
    {...props}
  />
);
