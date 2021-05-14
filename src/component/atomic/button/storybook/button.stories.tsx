/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Button from '@/atomic/button';
import { IButtonTagProps } from '@/atomic/button/interface';
import { CUSTOM_ARGS_BUTTON_COMPONENT } from '@/component/atomic/button/constant';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import Builder from '@/modules/storybook';

Button.Default.displayName = `Button.Default`;

export default new Builder()
  .setModuleName(`Tag Button`)
  .setParentModuleName(`Button Component`)
  .setType(`atomic`)
  .setMultipleArgs(CUSTOM_ARGS_BUTTON_COMPONENT)
  .setComponent(Button.Default)
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IButtonTagProps> = (args) => <Button.Default {...args} />;

export const NormalButton = Template.bind({});

NormalButton.args = {
  ...Button.Default.defaultProps,
  children: `Button Text`,
  theme: `light`,
  type: `button`
};

export const ButtonDark = Template.bind({});

ButtonDark.args = {
  ...Button.Default.defaultProps,
  children: `Button Text`,
  theme: `dark`,
  type: `button`
};

export const LargeButton = Template.bind({});

LargeButton.args = {
  ...Button.Default.defaultProps,
  children: `Button Text`,
  size: `big`,
  type: `button`
};

export const SmallButton = Template.bind({});

SmallButton.args = {
  ...Button.Default.defaultProps,
  children: `Button Text`,
  size: `small`,
  type: `button`
};

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.args = {
  ...Button.Default.defaultProps,
  children: `Button Text`,
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
  type: `button`
};

export const ImplementRTLOnButton = Template.bind({});

ImplementRTLOnButton.args = {
  ...Button.Default.defaultProps,
  children: `Button Text`,
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
  type: `button`
};

export const OutlineButton = Template.bind({});

OutlineButton.args = {
  ...Button.Default.defaultProps,
  children: `Button Text`,
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
  type: `button`
};

export const OutlineAndRoundedButton = Template.bind({});

OutlineAndRoundedButton.args = {
  ...Button.Default.defaultProps,
  children: `Button Text`,
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
  type: `button`
};

export const WithCustomClassName = Template.bind({});

WithCustomClassName.args = {
  ...Button.Default.defaultProps,
  children: `Button Text`,
  className: {
    content: `a-r123-button__content`,
    icon: `a-r123-button__icon`,
    text: `a-r123-button__text`,
    wrapper: `a-r123-button`
  },
  rtl: true,
  theme: `dark`,
  type: `button`
};
