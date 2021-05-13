import { FC } from 'react';

import Text from '@/atomic/text';
import { ICaptionProps } from '@/atomic/text-custom/interface';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/constant/typography';

/**
 * Caption 1 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const TextCustomCaption1: FC<ICaptionProps> = (props) => (
  <Text.Span
    fontSize={STYLE_GUIDE_FONT_SIZE[`caption-1`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`caption-1`]}
    {...props}
  />
);

/**
 * Caption 2 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const TextCustomCaption2: FC<ICaptionProps> = (props) => (
  <Text.Span
    fontSize={STYLE_GUIDE_FONT_SIZE[`caption-2`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`caption-2`]}
    {...props}
  />
);
