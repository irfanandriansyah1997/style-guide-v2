/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import FAB from '@/atomic/fab';
import { IFabProps } from '@/atomic/fab/interface';
import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_FAB_COMPONENT } from './storybook-args';

export default new Builder()
  .setModuleName(`Theme`)
  .setParentModuleName(`FAB Component`)
  .setType(`atomic`)
  .setComponent(FAB)
  .setMultipleArgs([...CUSTOM_ARGS_FAB_COMPONENT])
  .execute();

/**
 * Templates Storybook
 * @param {IFabProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IFabProps> = (props) => (
  <div className="relative" style={{ height: 100 }}>
    <FAB {...props} />
  </div>
);

export const DarkTheme = Template.bind({});

DarkTheme.args = {
  animation: `fade-in`,
  icon: <div>★</div>,
  on: partialAction(`on`),
  position: `absolute`,
  shape: `basic`,
  show: true,
  theme: `dark`
};

export const LightTheme = Template.bind({});

LightTheme.args = {
  ...DarkTheme.args,
  theme: `light`
};
