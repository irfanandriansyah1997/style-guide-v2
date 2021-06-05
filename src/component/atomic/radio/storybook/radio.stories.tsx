/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Radio from '@/atomic/radio';
import { IRadioProps } from '@/atomic/selection/interface';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_RADIO_COMPONENT } from './constant';

Radio.displayName = `Radio`;

export default new Builder()
  .setModuleName(`Radio Component`)
  .setType(`atomic`)
  .setComponent(Radio)
  .setMultipleArgs(CUSTOM_ARGS_RADIO_COMPONENT)
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IRadioProps> = (args) => <Radio {...args} />;

export const RadioButtonSelect = Template.bind({});

RadioButtonSelect.args = {
  ...Radio.defaultProps,
  active: true,
  children: `Label Radio Button`,
  labelTag: `h1`,
  value: `1`
};

export const RadioButtonUnselect = Template.bind({});

RadioButtonUnselect.args = {
  ...Radio.defaultProps,
  active: false,
  children: `Label Radio Button`,
  labelTag: `h1`,
  value: `1`
};

export const RadioButtonWithCustomClassName = Template.bind({});

RadioButtonWithCustomClassName.args = {
  ...Radio.defaultProps,
  active: true,
  children: `Label Radio Button`,
  className: {
    label: `custom-label`,
    selector: `custom-selector`,
    wrapper: `custom-wrapper`
  },
  labelTag: `h1`,
  value: `1`
};

export const RadioButtonWithoutLabel = Template.bind({});

RadioButtonWithoutLabel.args = {
  ...Radio.defaultProps,
  active: false,
  value: `1`
};
