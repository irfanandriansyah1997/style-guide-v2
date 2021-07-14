/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import FAB from '@/atomic/fab';
import { IFabProps } from '@/atomic/fab/interface';
import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';

export default new Builder()
  .setModuleName(`Shape`)
  .setParentModuleName(`FAB Component`)
  .setType(`atomic`)
  .setComponent(FAB)
  .setMultipleArgs([])
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
  show: true,
  theme: `light`,
  type: `basic`
};

export const SmallShape = Template.bind({});

SmallShape.args = {
  ...BasicShape.args,
  type: `small`
};

export const ExtendedShape = Template.bind({});

ExtendedShape.args = {
  ...BasicShape.args,
  bottom: 15,
  right: 15,
  text: `Sample`,
  theme: `dark`,
  type: `extended`
};
