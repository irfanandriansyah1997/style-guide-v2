import type { Story } from '@storybook/react/types-6-0';

import Expand from '@/atomic/expand';
import { IExpandProps } from '@/atomic/expand/interface';
import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';

import { SampleContent, SampleToggle } from './storybook-template';

export default new Builder()
  .setModuleName(`Customize Styling`)
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
const Template: Story<IExpandProps> = (props) => (
  <Expand {...props}>
    <Expand.Selector className="sample-class-name-selector">
      <SampleToggle />
    </Expand.Selector>
    <Expand.Content className="sample-class-name-content">
      <SampleContent />
    </Expand.Content>
  </Expand>
);

export const WithCustomInitialHeight = Template.bind({});

WithCustomInitialHeight.args = {
  className: {
    content: `props-classname-content`,
    toggle: `props-classname-toggle`,
    wrapper: `props-classname-wrapper`
  },
  initialHeight: 48,
  on: partialAction(`on`)
};

export const WithSelectorOnBottom = Template.bind({});

WithSelectorOnBottom.args = {
  className: {
    content: `props-classname-content`,
    toggle: `props-classname-toggle`,
    wrapper: `props-classname-wrapper`
  },
  initialHeight: 0,
  on: partialAction(`on`),
  selectorPosition: `bottom`
};
