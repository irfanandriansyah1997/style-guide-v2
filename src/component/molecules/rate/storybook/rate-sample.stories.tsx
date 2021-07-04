/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';
import Rate from '@/molecules/rate';
import { IRateProps } from '@/molecules/rate/interface';

export default new Builder()
  .setModuleName(`Rate Component`)
  .setType(`molecules`)
  .setComponent(Rate)
  .setMultipleArgs([])
  .execute();

/**
 * Templates Storybook
 * @param {IMeterProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IRateProps> = (props) => <Rate {...props} />;

export const SampleRate = Template.bind({});

SampleRate.args = {
  allowHalf: true,
  count: 10,
  defaultValue: 7,
  on: partialAction(`on`)
};
