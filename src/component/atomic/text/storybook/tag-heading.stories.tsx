import type { Story } from '@storybook/react/types-6-0';

import TextComponent from '@/component/atomic/text';
import { CUSTOM_ARGS_TEXT_COMPONENT } from '@/component/atomic/text/constant';
import {
  ITextHeadingType,
  ITextWithTagsProps
} from '@/component/atomic/text/interface';
import { STYLE_GUIDE_COLOR } from '@/utils/constant/color';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_FONT_WEIGHT,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/utils/constant/typography';
import Builder from '@/utils/modules/storybook';

export default new Builder()
  .setParentModuleName(`Text Component`)
  .setModuleName(`With Tag Heading`)
  .setType(`atomic`)
  .setComponent(TextComponent.H1)
  .setMultipleArgs(CUSTOM_ARGS_TEXT_COMPONENT)
  .execute();

TextComponent.H1.displayName = `TextComponent.H1`;
TextComponent.H2.displayName = `TextComponent.H2`;
TextComponent.H3.displayName = `TextComponent.H3`;
TextComponent.H4.displayName = `TextComponent.H4`;
TextComponent.H5.displayName = `TextComponent.H5`;
TextComponent.H6.displayName = `TextComponent.H6`;

/**
 * Templates H1 Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const TemplateH1: Story<ITextWithTagsProps<ITextHeadingType>> = (args) => (
  <TextComponent.H1 {...args} />
);

/**
 * Templates H2 Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const TemplateH2: Story<ITextWithTagsProps<ITextHeadingType>> = (args) => (
  <TextComponent.H2 {...args} />
);

/**
 * Templates H3 Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const TemplateH3: Story<ITextWithTagsProps<ITextHeadingType>> = (args) => (
  <TextComponent.H3 {...args} />
);

/**
 * Templates H4 Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const TemplateH4: Story<ITextWithTagsProps<ITextHeadingType>> = (args) => (
  <TextComponent.H4 {...args} />
);

/**
 * Templates H5 Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const TemplateH5: Story<ITextWithTagsProps<ITextHeadingType>> = (args) => (
  <TextComponent.H5 {...args} />
);

/**
 * Templates H6 Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const TemplateH6: Story<ITextWithTagsProps<ITextHeadingType>> = (args) => (
  <TextComponent.H6 {...args} />
);

export const TagHeading1 = TemplateH1.bind({});

TagHeading1.args = {
  children: `With Heading 1`,
  color: STYLE_GUIDE_COLOR.dark900,
  fontSize: STYLE_GUIDE_FONT_SIZE[`headline-1`],
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold,
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`headline-1`]
};

export const TagHeading2 = TemplateH2.bind({});

TagHeading2.args = {
  children: `With Heading 2`,
  color: STYLE_GUIDE_COLOR.dark800,
  fontSize: STYLE_GUIDE_FONT_SIZE[`headline-2`],
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold,
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`headline-2`]
};

export const TagHeading3 = TemplateH3.bind({});

TagHeading3.args = {
  children: `With Heading 3`,
  color: STYLE_GUIDE_COLOR.dark700,
  fontSize: STYLE_GUIDE_FONT_SIZE[`headline-3`],
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold,
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`headline-3`]
};

export const TagHeading4 = TemplateH4.bind({});

TagHeading4.args = {
  children: `With Heading 4`,
  color: STYLE_GUIDE_COLOR.dark600,
  fontSize: STYLE_GUIDE_FONT_SIZE[`headline-4`],
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold,
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`headline-4`]
};

export const TagHeading5 = TemplateH5.bind({});

TagHeading5.args = {
  children: `With Heading 5`,
  color: STYLE_GUIDE_COLOR.dark500,
  fontSize: STYLE_GUIDE_FONT_SIZE[`headline-5`],
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold,
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`headline-5`]
};

export const TagHeading6 = TemplateH6.bind({});

TagHeading6.args = {
  children: `With Heading 6`,
  color: STYLE_GUIDE_COLOR.dark400,
  fontSize: STYLE_GUIDE_FONT_SIZE[`headline-6`],
  fontWeight: STYLE_GUIDE_FONT_WEIGHT.bold,
  lineHeight: STYLE_GUIDE_LINE_HEIGHT[`headline-6`]
};
