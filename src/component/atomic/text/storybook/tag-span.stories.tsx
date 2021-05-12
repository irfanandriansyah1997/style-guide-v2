import type { Story } from '@storybook/react/types-6-0';

import TextComponent from '@/component/atomic/text';
import { CUSTOM_ARGS_TEXT_COMPONENT } from '@/component/atomic/text/constant';
import {
  ITextParagraphType,
  ITextWithTagsProps
} from '@/component/atomic/text/interface';
import { STYLE_GUIDE_COLOR } from '@/utils/constant/color';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_FONT_WEIGHT,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/utils/constant/typography';
import Builder from '@/utils/modules/storybook';

TextComponent.Span.displayName = `TextComponent.Span`;

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ITextWithTagsProps<ITextParagraphType>> = (args) => (
  <TextComponent.Span {...args} />
);

export default new Builder()
  .setParentModuleName(`Text Component`)
  .setModuleName(`With Tag Span`)
  .setType(`atomic`)
  .setComponent(TextComponent.Span)
  .setMultipleArgs(CUSTOM_ARGS_TEXT_COMPONENT)
  .execute();

export const Sample = Template.bind({});

Sample.args = {
  children: `With Tag Span`,
  color: STYLE_GUIDE_COLOR.info500,
  fontSize: STYLE_GUIDE_FONT_SIZE[`headline-3`],
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold,
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`headline-3`]
};
