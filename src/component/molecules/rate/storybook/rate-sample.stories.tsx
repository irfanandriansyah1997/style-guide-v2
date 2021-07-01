/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Builder from '@/modules/storybook';
import Rate, { RateProps } from '@/molecules/rate';

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
const Template: Story<RateProps> = (props) => <Rate {...props} />;

export const SampleRate = Template.bind({});

SampleRate.args = {
  allowHalf: true,
  character: `$`,
  defaultValue: 2.5,
  style: { fontSize: 50, marginTop: 24 }
};
