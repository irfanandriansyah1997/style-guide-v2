import { FC } from 'react';

import Text from '@/component/atomic/text';
import { IParagraphProps } from '@/component/atomic/text-custom/interface';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/utils/constant/typography';

/**
 * Paragraph 1 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Paragraph1: FC<IParagraphProps> = (props) => (
  <Text.Paragraph
    fontSize={STYLE_GUIDE_FONT_SIZE[`paragraph-1`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`paragraph-1`]}
    {...props}
  />
);

/**
 * Paragraph 2 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Paragraph2: FC<IParagraphProps> = (props) => (
  <Text.Paragraph
    fontSize={STYLE_GUIDE_FONT_SIZE[`paragraph-2`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`paragraph-2`]}
    {...props}
  />
);
