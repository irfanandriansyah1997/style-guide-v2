import { FC } from 'react';

import Text from '@/component/atomic/text';
import { ISubtitleProps } from '@/component/atomic/text-custom/interface';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/utils/constant/typography';

/**
 * Subtitle 1 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Subtitle1: FC<ISubtitleProps> = (props) => (
  <Text.Paragraph
    fontSize={STYLE_GUIDE_FONT_SIZE[`subtitle-1`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`subtitle-1`]}
    {...props}
  />
);

/**
 * Subtitle 2 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Subtitle2: FC<ISubtitleProps> = (props) => (
  <Text.Paragraph
    fontSize={STYLE_GUIDE_FONT_SIZE[`subtitle-2`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`subtitle-2`]}
    {...props}
  />
);
