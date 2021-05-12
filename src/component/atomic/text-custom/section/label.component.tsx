import { FC } from 'react';

import TextComponent from '@/component/atomic/text';
import { ILabelProps } from '@/component/atomic/text-custom/interface';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/utils/constant/typography';

/**
 * Label Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const LabelComponent: FC<ILabelProps> = (props) => (
  <TextComponent.Paragraph
    fontSize={STYLE_GUIDE_FONT_SIZE.label}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT.label}
    {...props}
  />
);
