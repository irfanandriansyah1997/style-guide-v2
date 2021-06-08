/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Tags from '@/atomic/tags';
import { ITagsProps } from '@/atomic/tags/interface';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';

import { CUSTOM_TAGS_COMPONENT } from './constant';

Tags.displayName = `Tags`;

export default new Builder()
  .setModuleName(`Tags Component`)
  .setType(`atomic`)
  .setComponent(Tags)
  .setMultipleArgs(CUSTOM_TAGS_COMPONENT)
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ITagsProps> = (args) => <Tags {...args} />;
const TemplateChildren = (
  <>
    <div
      style={{
        backgroundColor: STYLE_GUIDE_COLOR.warning500,
        borderRadius: `50%`,
        height: 8,
        marginRight: `8px`,
        width: 8
      }}
    />
    Tags
  </>
);
const TemplateChildrenRtl = (
  <>
    <div
      style={{
        backgroundColor: STYLE_GUIDE_COLOR.warning500,
        borderRadius: `50%`,
        height: 8,
        margin: `0 8px`,
        width: 8
      }}
    />
    Tags
  </>
);

export const NormalTags = Template.bind({});

NormalTags.args = {
  ...Tags.defaultProps,
  children: TemplateChildrenRtl,
  onClick: partialAction(`onClick`),
  theme: `light`
};

export const DarkTags = Template.bind({});

DarkTags.args = {
  ...Tags.defaultProps,
  children: TemplateChildren,
  onClick: partialAction(`onClick`),
  theme: `dark`
};

export const SmallTags = Template.bind({});

SmallTags.args = {
  ...Tags.defaultProps,
  children: TemplateChildren,
  onClick: partialAction(`onClick`),
  size: `small`
};

export const InvertedMode = Template.bind({});

InvertedMode.args = {
  ...Tags.defaultProps,
  children: TemplateChildren,
  inverted: true,
  onClick: partialAction(`onClick`),
  theme: `dark`
};

export const OutlineMode = Template.bind({});

OutlineMode.args = {
  ...Tags.defaultProps,
  children: TemplateChildren,
  onClick: partialAction(`onClick`),
  outline: true,
  theme: `dark`
};

export const RoundedTags = Template.bind({});

RoundedTags.args = {
  ...Tags.defaultProps,
  children: TemplateChildren,
  onClick: partialAction(`onClick`),
  rounded: true,
  theme: `dark`
};

export const ImplementRTLOnTags = Template.bind({});

ImplementRTLOnTags.args = {
  ...Tags.defaultProps,
  children: TemplateChildrenRtl,
  onClick: partialAction(`onClick`),
  rtl: true,
  theme: `dark`
};

export const WithCustomClassName = Template.bind({});

WithCustomClassName.args = {
  ...Tags.defaultProps,
  children: TemplateChildren,
  className: `sample-classname`,
  onClick: partialAction(`onClick`),
  rounded: true,
  theme: `dark`
};
