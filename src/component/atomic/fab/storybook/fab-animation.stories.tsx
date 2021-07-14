/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import FAB from '@/atomic/fab';
import { IFabProps } from '@/atomic/fab/interface';
import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';

export default new Builder()
  .setModuleName(`Animation`)
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

export const FadeIn = Template.bind({});

FadeIn.args = {
  animation: `fade-in`,
  icon: <div>★</div>,
  on: partialAction(`on`),
  position: `absolute`,
  show: true,
  theme: `dark`,
  type: `basic`
};

export const FadeInTop = Template.bind({});

FadeInTop.args = {
  ...FadeIn.args,
  animation: `fade-in-top`
};

export const FadeInBottom = Template.bind({});

FadeInBottom.args = {
  ...FadeIn.args,
  animation: `fade-in-bottom`
};

export const FadeInLeft = Template.bind({});

FadeInLeft.args = {
  ...FadeIn.args,
  animation: `fade-in-left`
};

export const FadeInRight = Template.bind({});

FadeInRight.args = {
  ...FadeIn.args,
  animation: `fade-in-right`
};
