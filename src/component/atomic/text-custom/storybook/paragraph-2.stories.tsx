import type { Story } from '@storybook/react/types-6-0';

import { CUSTOM_ARGS_TEXT_COMPONENT } from '@/component/atomic/text/constant';
import TextCustom from '@/component/atomic/text-custom';
import { ICaptionProps } from '@/component/atomic/text-custom/interface';
import { STYLE_GUIDE_COLOR } from '@/utils/constant/color';
import { STYLE_GUIDE_FONT_WEIGHT } from '@/utils/constant/typography';
import Builder from '@/utils/modules/storybook';

TextCustom.Paragraph2.displayName = `TextCustom.Paragraph2`;

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ICaptionProps> = (args) => (
  <TextCustom.Paragraph2 {...args} />
);

export default new Builder()
  .setModuleName(`Text Custom Component`)
  .setType(`atomic`)
  .setComponent(TextCustom.Paragraph2)
  .setMultipleArgs(
    CUSTOM_ARGS_TEXT_COMPONENT.filter(
      ({ argsName }) => argsName !== `fontSize` && argsName !== `lineHeight`
    )
  )
  .execute();

export const Paragraph2Styling = Template.bind({});

Paragraph2Styling.args = {
  children: `Sample Text Custom With Paragraph 2 Styling`,
  color: STYLE_GUIDE_COLOR.dark700,
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold
};
