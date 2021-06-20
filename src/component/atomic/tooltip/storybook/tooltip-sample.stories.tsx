import type { Story } from '@storybook/react/types-6-0';
import { FC } from 'react';

import Button from '@/atomic/button';
import Text from '@/atomic/text';
import Tooltip from '@/atomic/tooltip';
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
const Template: Story = () => (
  <div style={{ margin: 40 }}>
    <Tooltip
      content={
        <ShowcaseChildrenComponent>
          Sample Tooltip Top
        </ShowcaseChildrenComponent>
      }
      position="top"
      background={STYLE_GUIDE_COLOR.dark700}
    >
      <ShowcaseToggleComponent>Tooltip Top</ShowcaseToggleComponent>
    </Tooltip>
    &nbsp;
    <Tooltip
      content={
        <ShowcaseChildrenComponent>
          Sample Tooltip Left
        </ShowcaseChildrenComponent>
      }
      position="left"
      background={STYLE_GUIDE_COLOR.dark700}
    >
      <ShowcaseToggleComponent>Tooltip Left</ShowcaseToggleComponent>
    </Tooltip>
    &nbsp;
    <Tooltip
      content={
        <ShowcaseChildrenComponent>
          Sample Tooltip Bottom
        </ShowcaseChildrenComponent>
      }
      position="bottom"
      background={STYLE_GUIDE_COLOR.dark700}
    >
      <ShowcaseToggleComponent>Tooltip Bottom</ShowcaseToggleComponent>
    </Tooltip>
    &nbsp;
    <Tooltip
      content={
        <ShowcaseChildrenComponent>
          Sample Tooltip Right
        </ShowcaseChildrenComponent>
      }
      position="right"
      background={STYLE_GUIDE_COLOR.dark700}
    >
      <ShowcaseToggleComponent>Tooltip Right</ShowcaseToggleComponent>
    </Tooltip>
  </div>
);

export default new Builder()
  .setModuleName(`Sample Tooltip Component`)
  .setParentModuleName(`Tooltip Component`)
  .setType(`atomic`)
  .setComponent(Tooltip)
  .setMultipleArgs(CUSTOM_TOOLTIP_COMPONENT)
  .execute();

export const Showcase = Template.bind({});

Showcase.args = {};
