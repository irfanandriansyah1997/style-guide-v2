/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Button from '@/atomic/button';
import { IAnchorTagProps } from '@/atomic/button/interface';
import { CUSTOM_ARGS_BUTTON_COMPONENT } from '@/atomic/button/storybook/storybook-args';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import Builder from '@/modules/storybook';

Button.Anchor.displayName = `Button.Anchor`;

export default new Builder()
  .setModuleName(`Tag Anchor`)
  .setParentModuleName(`Button Component`)
  .setType(`atomic`)
  .setComponent(Button.Anchor)
  .setMultipleArgs(CUSTOM_ARGS_BUTTON_COMPONENT)
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IAnchorTagProps> = (args) => <Button.Anchor {...args} />;

export const NormalButton = Template.bind({});

NormalButton.args = {
  ...Button.Anchor.defaultProps,
  children: `Anchor Text`,
  href: `https://www.google.com/`,
  target: `_blank`,
  theme: `light`
};

export const ButtonDark = Template.bind({});

ButtonDark.args = {
  ...Button.Anchor.defaultProps,
  children: `Anchor Text`,
  href: `https://www.google.com/`,
  target: `_blank`,
  theme: `dark`
};

export const LargeButton = Template.bind({});

LargeButton.args = {
  ...Button.Anchor.defaultProps,
  children: `Anchor Text`,
  href: `https://www.google.com/`,
  size: `big`,
  target: `_blank`
};

export const SmallButton = Template.bind({});

SmallButton.args = {
  ...Button.Anchor.defaultProps,
  children: `Anchor Text`,
  size: `small`
};

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.args = {
  ...Button.Anchor.defaultProps,
  children: `Anchor Text`,
  href: `https://www.google.com/`,
  icon: (
    <div
      style={{
        backgroundColor: STYLE_GUIDE_COLOR.warning500,
        borderRadius: `50%`,
        height: 18,
        width: 18
      }}
    />
  ),
  target: `_blank`
};

export const ImplementRTLOnButton = Template.bind({});

ImplementRTLOnButton.args = {
  ...Button.Anchor.defaultProps,
  children: `Anchor Text`,
  href: `https://www.google.com/`,
  icon: (
    <div
      style={{
        backgroundColor: STYLE_GUIDE_COLOR.warning500,
        borderRadius: `50%`,
        height: 18,
        width: 18
      }}
    />
  ),
  rtl: true,
  target: `_blank`
};

export const OutlineButton = Template.bind({});

OutlineButton.args = {
  ...Button.Anchor.defaultProps,
  children: `Anchor Text`,
  href: `https://www.google.com/`,
  icon: (
    <div
      style={{
        backgroundColor: STYLE_GUIDE_COLOR.warning500,
        borderRadius: `50%`,
        height: 18,
        width: 18
      }}
    />
  ),
  outline: true,
  rtl: true,
  target: `_blank`
};

export const OutlineAndRoundedButton = Template.bind({});

OutlineAndRoundedButton.args = {
  ...Button.Anchor.defaultProps,
  children: `Anchor Text`,
  href: `https://www.google.com/`,
  icon: (
    <div
      style={{
        backgroundColor: STYLE_GUIDE_COLOR.warning500,
        borderRadius: `50%`,
        height: 18,
        width: 18
      }}
    />
  ),
  outline: true,
  rounded: true,
  rtl: true,
  size: `big`,
  target: `_blank`
};

export const WithCustomClassName = Template.bind({});

WithCustomClassName.args = {
  ...Button.Anchor.defaultProps,
  children: `Anchor Text`,
  className: {
    content: `a-r123-button__content`,
    icon: `a-r123-button__icon`,
    text: `a-r123-button__text`,
    wrapper: `a-r123-button`
  },
  href: `https://www.google.com/`,
  rtl: true,
  target: `_blank`,
  theme: `dark`
};
