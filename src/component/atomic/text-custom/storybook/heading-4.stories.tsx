import type { Story } from '@storybook/react/types-6-0';

import { CUSTOM_ARGS_TEXT_COMPONENT } from '@/atomic/text/constant';
import TextCustom from '@/atomic/text-custom';
import { ILabelProps } from '@/atomic/text-custom/interface';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import { STYLE_GUIDE_FONT_WEIGHT } from '@/constant/typography';
import Builder from '@/modules/storybook';

TextCustom.Headline4.displayName = `TextCustom.Headline4`;

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ILabelProps> = (args) => (
  <TextCustom.Headline4 {...args} />
);

export default new Builder()
  .setModuleName(`Text Custom Component`)
  .setType(`atomic`)
  .setComponent(TextCustom.Headline4)
  .setMultipleArgs(
    CUSTOM_ARGS_TEXT_COMPONENT.filter(
      ({ argsName }) => argsName !== `fontSize` && argsName !== `lineHeight`
    )
  )
  .execute();

export const Headline4Styling = Template.bind({});

Headline4Styling.args = {
  children: `Sample Text Custom With Heading 4 Styling`,
  color: STYLE_GUIDE_COLOR.dark700,
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold
};
