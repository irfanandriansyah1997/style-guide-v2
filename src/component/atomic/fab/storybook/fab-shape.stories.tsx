/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import FAB from '@/atomic/fab';
import { IFabProps } from '@/atomic/fab/interface';
import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_FAB_COMPONENT } from './storybook-args';

export default new Builder()
  .setModuleName(`Shape`)
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

export const BasicShape = Template.bind({});

BasicShape.args = {
  animation: `fade-in`,
  icon: <div>★</div>,
  on: partialAction(`on`),
  position: `absolute`,
  shape: `basic`,
  show: true,
  theme: `light`
};

export const SmallShape = Template.bind({});

SmallShape.args = {
  ...BasicShape.args,
  shape: `small`
};

export const ExtendedShape = Template.bind({});

ExtendedShape.args = {
  ...BasicShape.args,
  bottom: 15,
  right: 15,
  shape: `extended`,
  text: `Sample`,
  theme: `dark`
};
