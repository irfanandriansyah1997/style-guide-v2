/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Meter from '@/atomic/meter';
import { IMeterProps } from '@/atomic/meter/interface';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_METER_COMPONENT_CUSTOM_ROUNDED } from './storybook-args';

Meter.displayName = `Meter`;

export default new Builder()
  .setParentModuleName(`Meter Component`)
  .setModuleName(`Custom Rounded`)
  .setType(`atomic`)
  .setComponent(Meter)
  .setMultipleArgs(CUSTOM_ARGS_METER_COMPONENT_CUSTOM_ROUNDED)
  .execute();

/**
 * Templates Storybook
 * @param {IMeterProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IMeterProps> = ({ ...res }) => <Meter {...res} />;

export const CustomBorderRadius = Template.bind({});

CustomBorderRadius.args = {
  bgColor: STYLE_GUIDE_COLOR.light400,
  borderRadius: `rounded`,
  color: STYLE_GUIDE_COLOR.danger500,
  height: 20,
  value: 30
};
