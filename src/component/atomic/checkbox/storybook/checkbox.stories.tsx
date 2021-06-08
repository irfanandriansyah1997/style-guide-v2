/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Checkbox from '@/atomic/checkbox';
import { ICheckboxProps } from '@/atomic/selection/interface';
import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_CHECKBOX_COMPONENT } from './constant';

Checkbox.displayName = `Checkbox`;

export default new Builder()
  .setModuleName(`Checkbox Component`)
  .setType(`atomic`)
  .setComponent(Checkbox)
  .setMultipleArgs(CUSTOM_ARGS_CHECKBOX_COMPONENT)
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ICheckboxProps> = (args) => <Checkbox {...args} />;

export const CheckboxSelect = Template.bind({});

CheckboxSelect.args = {
  ...Checkbox.defaultProps,
  active: true,
  children: `Label Checkbox Button`,
  labelTag: `h1`,
  on: partialAction(`on`),
  value: `1`
};

export const CheckboxUnselect = Template.bind({});

CheckboxUnselect.args = {
  ...Checkbox.defaultProps,
  active: false,
  children: `Label Checkbox Button`,
  labelTag: `h1`,
  on: partialAction(`on`),
  value: `1`
};

export const CheckboxWithCustomClassName = Template.bind({});

CheckboxWithCustomClassName.args = {
  ...Checkbox.defaultProps,
  active: true,
  children: `Label Checkbox Button`,
  className: {
    label: `custom-label`,
    selector: `custom-selector`,
    wrapper: `custom-wrapper`
  },
  labelTag: `h1`,
  on: partialAction(`on`),
  value: `1`
};

export const CheckboxWithoutLabel = Template.bind({});

CheckboxWithoutLabel.args = {
  ...Checkbox.defaultProps,
  active: false,
  on: partialAction(`on`),
  value: `1`
};
