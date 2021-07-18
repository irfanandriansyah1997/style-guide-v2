/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';

import Expand from '@/atomic/expand';
import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';

import { SampleContent, SampleToggle } from './storybook-template';

export default new Builder()
  .setModuleName(`Controlled & Uncontrolled Props`)
  .setParentModuleName(`Expand Component`)
  .setType(`atomic`)
  .setComponent(Expand)
  .setMultipleArgs([])
  .execute();

/**
 * Templates Storybook
 * @param {IMeterProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story = () => {
  const [show, setShow] = useState(false);

  return (
    <Expand
      on={({ event, payload }) => {
        partialAction(`on`)({ event, payload });

        switch (event) {
          case `on-toggle`:
            setShow(payload as boolean);
            break;

          default:
            break;
        }
      }}
      initialHeight={0}
      selectorPosition="top"
      openned={show}
    >
      <Expand.Selector>
        <SampleToggle />
      </Expand.Selector>
      <Expand.Content>
        <SampleContent />
      </Expand.Content>
    </Expand>
  );
};

/**
 * Templates Storybook
 * @param {IMeterProps} args - args props
 * @returns {ReactNode}
 */
const Template2: Story = () => (
  <Expand on={partialAction(`on`)} initialHeight={0} selectorPosition="top">
    <Expand.Selector className="sample-class-name-selector">
      <SampleToggle />
    </Expand.Selector>
    <Expand.Content className="sample-class-name-content">
      <SampleContent />
    </Expand.Content>
  </Expand>
);

export const SampleDynamicExpand = Template.bind({});

SampleDynamicExpand.args = {};

export const UncontrolledExpand = Template2.bind({});

UncontrolledExpand.args = {};
