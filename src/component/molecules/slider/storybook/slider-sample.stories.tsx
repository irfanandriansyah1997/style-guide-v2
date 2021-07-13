/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Builder from '@/modules/storybook';
import { ISliderProps } from '@/molecules/slider/interface';
import Slider from '@/molecules/slider/section/slider.component';

export default new Builder()
  .setModuleName(`Slider Component`)
  .setType(`molecules`)
  .setComponent(Slider)
  .setMultipleArgs([])
  .execute();

/**
 * Templates Storybook
 * @param {IMeterProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ISliderProps> = (props) => <Slider {...props} />;

export const SampleSlider = Template.bind({});

SampleSlider.args = {
  defaultValue: 10,
  marks: {
    10: {
      label: `10`
    },
    20: {
      label: `20`
    }
  }
};
