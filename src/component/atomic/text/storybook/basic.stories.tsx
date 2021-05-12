import type { Story } from '@storybook/react/types-6-0';

import TextComponent from '@/component/atomic/text';
import { CUSTOM_ARGS_TEXT_COMPONENT } from '@/component/atomic/text/constant';
import { ITextProps } from '@/component/atomic/text/interface';
import { STYLE_GUIDE_COLOR } from '@/utils/constant/color';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_FONT_WEIGHT,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/utils/constant/typography';
import Builder from '@/utils/modules/storybook';

export default new Builder()
  .setParentModuleName(`Text Component`)
  .setModuleName(`Basic Usage`)
  .setType(`atomic`)
  .setComponent(TextComponent)
  .setMultipleArgs(CUSTOM_ARGS_TEXT_COMPONENT)
  .setArgs({
    argsName: `tag`,
    control: {
      options: [`p`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `span`],
      type: `select`
    },
    defaultValue: ``,
    description: `HTML tags to be displayed`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `ITextType`
      }
    },
    type: {
      required: true
    }
  })
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ITextProps> = (args) => <TextComponent {...args} />;

export const TextWithTagHeading = Template.bind({});

TextWithTagHeading.args = {
  children: `Text`,
  color: STYLE_GUIDE_COLOR.success500,
  fontSize: STYLE_GUIDE_FONT_SIZE[`headline-3`],
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold,
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`headline-3`],
  tag: `h1`
};

export const TextWithTagParagraph = Template.bind({});

TextWithTagParagraph.args = {
  children: `Text`,
  color: STYLE_GUIDE_COLOR.info700,
  fontSize: STYLE_GUIDE_FONT_SIZE[`paragraph-1`],
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold,
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`paragraph-1`],
  tag: `p`
};

export const TextWithTagSpan = Template.bind({});

TextWithTagSpan.args = {
  children: `Text`,
  color: STYLE_GUIDE_COLOR.danger500,
  fontSize: STYLE_GUIDE_FONT_SIZE[`caption-1`],
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`caption-1`],
  tag: `span`
};
