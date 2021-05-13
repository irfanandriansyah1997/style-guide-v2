import type { Story } from '@storybook/react/types-6-0';

import { CUSTOM_ARGS_TEXT_COMPONENT } from '@/component/atomic/text/constant';
import TextCustom from '@/component/atomic/text-custom';
import { ILabelProps } from '@/component/atomic/text-custom/interface';
import { STYLE_GUIDE_COLOR } from '@/utils/constant/color';
import { STYLE_GUIDE_FONT_WEIGHT } from '@/utils/constant/typography';
import Builder from '@/utils/modules/storybook';

TextCustom.Label.displayName = `TextCustom.Label`;

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ILabelProps> = (args) => <TextCustom.Label {...args} />;

export default new Builder()
  .setModuleName(`Text Custom Component`)
  .setType(`atomic`)
  .setComponent(TextCustom.Label)
  .setMultipleArgs(
    CUSTOM_ARGS_TEXT_COMPONENT.filter(
      ({ argsName }) => argsName !== `fontSize` && argsName !== `lineHeight`
    )
  )
  .execute();

export const LabelStyling = Template.bind({});

LabelStyling.args = {
  children: `Sample Text Custom With Label Styling`,
  color: STYLE_GUIDE_COLOR.dark700,
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold
};
