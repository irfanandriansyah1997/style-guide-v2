/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Expand from '@/atomic/expand';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import Builder from '@/modules/storybook';
import Accordion from '@/molecules/accordion';

import { SampleContent, SampleToggle } from './storybook-template';

export default new Builder()
  .setParentModuleName(`Accordion Component`)
  .setModuleName(`Controlled & Uncontrolled Props`)
  .setType(`molecules`)
  .setComponent(Expand)
  .setMultipleArgs([])
  .execute();

/**
 * Templates Storybook
 * @param {IMeterProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story = () => (
  <Accordion
    expandIcon={({ expand }) => (
      <div
        style={{
          background: expand
            ? STYLE_GUIDE_COLOR.danger500
            : STYLE_GUIDE_COLOR.dark300,
          borderRadius: `50%`,
          height: 15,
          transition: `all 0.15s`,
          width: 15
        }}
      />
    )}
    theme="borderred"
    expandIconPosition="left"
  >
    <Accordion.Item header={<SampleToggle>Toggle 1</SampleToggle>} keys={1}>
      <SampleContent />
    </Accordion.Item>
    <Accordion.Item header={<SampleToggle>Toggle 2</SampleToggle>} keys={2}>
      <SampleContent />
    </Accordion.Item>
  </Accordion>
);

/**
 * Templates Storybook
 * @param {IMeterProps} args - args props
 * @returns {ReactNode}
 */
const Template2: Story = () => (
  <Accordion
    expandIcon={({ expand }) => (
      <div
        style={{
          background: expand
            ? STYLE_GUIDE_COLOR.danger500
            : STYLE_GUIDE_COLOR.dark300,
          borderRadius: `50%`,
          height: 15,
          transition: `all 0.15s`,
          width: 15
        }}
      />
    )}
    theme="borderred"
    accordion
    expandIconPosition="left"
  >
    <Accordion.Item
      header={({ expand }) => (
        <SampleToggle>Toggle 1 {expand ? `Openned` : `Hidden`}</SampleToggle>
      )}
      keys={1}
    >
      <SampleContent />
    </Accordion.Item>
    <Accordion.Item
      header={({ expand }) => (
        <SampleToggle>Toggle 2 {expand ? `Openned` : `Hidden`}</SampleToggle>
      )}
      keys={2}
    >
      <SampleContent />
    </Accordion.Item>
  </Accordion>
);

export const MultipleSelection = Template.bind({});

MultipleSelection.args = {};

export const SingleSelection = Template2.bind({});

SingleSelection.args = {};
