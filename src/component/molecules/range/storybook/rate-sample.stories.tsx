/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Builder from '@/modules/storybook';
import Range from '@/molecules/range/section/basic-range.component';

export default new Builder()
  .setModuleName(`Range Component`)
  .setType(`molecules`)
  .setComponent(Range)
  .setMultipleArgs([])
  .execute();

/**
 * Templates Storybook
 * @param {IMeterProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story = (props) => <Range {...props} />;

export const SampleRange = Template.bind({});

SampleRange.args = {};
