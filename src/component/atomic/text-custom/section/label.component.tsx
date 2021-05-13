import { FC } from 'react';

import Text from '@/atomic/text';
import { ILabelProps } from '@/atomic/text-custom/interface';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/constant/typography';

/**
 * Label Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Label: FC<ILabelProps> = (props) => (
  <Text.Paragraph
    fontSize={STYLE_GUIDE_FONT_SIZE.label}
    lineHeight={STYLE_GUIDE_LINE_HEIGHT.label}
    {...props}
  />
);
