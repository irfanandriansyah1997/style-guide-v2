import type { Story } from '@storybook/react/types-6-0';

import Text from '@/atomic/text';
import { CUSTOM_ARGS_TEXT_COMPONENT } from '@/atomic/text/constant';
import {
  ITextParagraphType,
  ITextWithTagsProps
} from '@/atomic/text/interface';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_FONT_WEIGHT,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/constant/typography';
import Builder from '@/modules/storybook';

Text.Paragraph.displayName = `Text.Paragraph`;

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ITextWithTagsProps<ITextParagraphType>> = (args) => (
  <Text.Paragraph {...args} />
);

export default new Builder()
  .setParentModuleName(`Text Component`)
  .setModuleName(`With Tag Paragraph`)
  .setType(`atomic`)
  .setComponent(Text.Paragraph)
  .setMultipleArgs(CUSTOM_ARGS_TEXT_COMPONENT)
  .execute();

export const Sample = Template.bind({});

Sample.args = {
  children: `With Tag Paragpraph`,
  color: STYLE_GUIDE_COLOR.success500,
  fontSize: STYLE_GUIDE_FONT_SIZE[`headline-3`],
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold,
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`headline-3`]
};
