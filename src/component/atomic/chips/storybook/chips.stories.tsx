/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Chips from '@/atomic/chips';
import { IChipsProps } from '@/atomic/chips/interface';
import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_CHIPS_COMPONENT } from './constant';

Chips.displayName = `Chips`;

export default new Builder()
  .setModuleName(`Chips Component`)
  .setType(`atomic`)
  .setComponent(Chips)
  .setSubComponent({})
  .setMultipleArgs(CUSTOM_ARGS_CHIPS_COMPONENT)
  .execute();

/**
 * Templates Chips Storybook
 * @param {IChipsProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IChipsProps> = (args) => <Chips {...args} />;

export const DefaultChips = Template.bind({});

DefaultChips.args = {
  ...Chips.defaultProps,
  label: `Chips`,
  onCloseChips: partialAction(`onCloseChips`)
};

export const OutlineChips = Template.bind({});

OutlineChips.args = {
  ...Chips.defaultProps,
  label: `Chips`,
  onCloseChips: partialAction(`onCloseChips`),
  outline: true
};

export const WithCustomClassName = Template.bind({});

WithCustomClassName.args = {
  ...Chips.defaultProps,
  className: {
    close: `sample-classname-icon`,
    content: `sample-classname-content`,
    wrapper: `sample-classname-wrapper`
  },
  label: `Chips`,
  onCloseChips: partialAction(`onCloseChips`),
  outline: true
};
