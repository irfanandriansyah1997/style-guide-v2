import type { Story } from '@storybook/react/types-6-0';
import { FC } from 'react';

import Button from '@/atomic/button';
import Text from '@/atomic/text';
import Tooltip from '@/atomic/tooltip';
import { ITooltipProps } from '@/atomic/tooltip/interface';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import Builder from '@/modules/storybook';

import { CUSTOM_TOOLTIP_COMPONENT } from './storybook-args';

Tooltip.displayName = `Tooltip`;

/**
 * Showcase Toggle Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.20
 */
const ShowcaseToggleComponent: FC = ({ children }) => (
  <Button.Default>{children}</Button.Default>
);

/**
 * Showcase Children Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.20
 */
const ShowcaseChildrenComponent: FC = ({ children }) => (
  <Text tag="p" color={STYLE_GUIDE_COLOR.light100}>
    {children}
  </Text>
);

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ITooltipProps> = ({ children, content, ...args }) => (
  <div style={{ margin: `40px 100px` }}>
    <Tooltip
      {...args}
      content={<ShowcaseChildrenComponent>{content}</ShowcaseChildrenComponent>}
    >
      <ShowcaseToggleComponent>{children}</ShowcaseToggleComponent>
    </Tooltip>
  </div>
);

export default new Builder()
  .setParentModuleName(`Tooltip Component`)
  .setModuleName(`Custom Tooltip`)
  .setType(`atomic`)
  .setComponent(Tooltip)
  .setMultipleArgs(CUSTOM_TOOLTIP_COMPONENT)
  .execute();

export const Showcase = Template.bind({});

Showcase.args = {
  ...Tooltip.defaultProps,
  background: STYLE_GUIDE_COLOR.dark700,
  children: `Toggle`,
  content: `Content Tooltip`,
  position: `left`
};
