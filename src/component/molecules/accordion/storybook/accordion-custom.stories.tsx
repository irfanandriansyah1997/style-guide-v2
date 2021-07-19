/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Expand from '@/atomic/expand';
import Builder from '@/modules/storybook';
import Accordion from '@/molecules/accordion';

import { IAccordionProps } from '../interface';
import { SampleContent, SampleToggle } from './storybook-template';

export default new Builder()
  .setParentModuleName(`Accordion Component`)
  .setModuleName(`Custom Styling`)
  .setType(`molecules`)
  .setComponent(Expand)
  .setMultipleArgs([])
  .execute();

/**
 * Templates Storybook
 * @param {IMeterProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IAccordionProps> = (props) => (
  <Accordion {...props}>
    <Accordion.Item header={<SampleToggle>Toggle 1</SampleToggle>} keys={1}>
      <SampleContent />
    </Accordion.Item>
    <Accordion.Item header={<SampleToggle>Toggle 2</SampleToggle>} keys={2}>
      <SampleContent />
    </Accordion.Item>
  </Accordion>
);

export const SetIconRight = Template.bind({});

SetIconRight.args = {
  accordion: true,
  expandIconPosition: `right`,
  theme: `borderred`
};

export const SetIconLeft = Template.bind({});

SetIconLeft.args = {
  accordion: true,
  expandIconPosition: `left`,
  theme: `borderred`
};

export const WithBorderedStyle = Template.bind({});

WithBorderedStyle.args = {
  expandIconPosition: `left`,
  theme: `borderred`
};

export const WithGhosttyle = Template.bind({});

WithGhosttyle.args = {
  expandIconPosition: `left`,
  theme: `ghost`
};
