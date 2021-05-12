import { FC } from 'react';

import TextComponent from '@/component/atomic/text';
import { ICaptionProps } from '@/component/atomic/text-custom/interface';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/utils/constant/typography';

/**
 * Caption 1 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const TextCustomCaption1Component: FC<ICaptionProps> = (props) => (
  <TextComponent.Span
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
export const TextCustomCaption2Component: FC<ICaptionProps> = (props) => (
  <TextComponent.Span
    fontSize={STYLE_GUIDE_FONT_SIZE[`caption-2`]}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT[`caption-2`]}
    {...props}
  />
);
