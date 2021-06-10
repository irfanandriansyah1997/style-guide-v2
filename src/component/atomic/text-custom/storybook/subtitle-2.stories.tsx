import type { Story } from '@storybook/react/types-6-0';

import { CUSTOM_ARGS_TEXT_COMPONENT } from '@/atomic/text/storybook/storybook-args';
import TextCustom from '@/atomic/text-custom';
import { ICaptionProps } from '@/atomic/text-custom/interface';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import { STYLE_GUIDE_FONT_WEIGHT } from '@/constant/typography';
import Builder from '@/modules/storybook';

TextCustom.Subtitle2.displayName = `TextCustom.Subtitle2`;

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ICaptionProps> = (args) => (
  <TextCustom.Subtitle2 {...args} />
);

export default new Builder()
  .setModuleName(`Text Custom Component`)
  .setType(`atomic`)
  .setComponent(TextCustom.Subtitle2)
  .setMultipleArgs(
    CUSTOM_ARGS_TEXT_COMPONENT.filter(
      ({ argsName }) => argsName !== `fontSize` && argsName !== `lineHeight`
    )
  )
  .execute();

export const Subtitle2Styling = Template.bind({});

Subtitle2Styling.args = {
  children: `Sample Text Custom With Subtitle 2 Styling`,
  color: STYLE_GUIDE_COLOR.dark700,
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold
};
