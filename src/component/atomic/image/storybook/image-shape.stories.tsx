/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Image from '@/atomic/image';
import { IImageProps } from '@/atomic/image/interface';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_IMAGE_COMPONENT } from './constant';

Image.displayName = `Image`;

export default new Builder()
  .setModuleName(`Shape Image`)
  .setParentModuleName(`Image Component`)
  .setType(`atomic`)
  .setComponent(Image)
  .setSubComponent({})
  .setMultipleArgs(CUSTOM_ARGS_IMAGE_COMPONENT)
  .execute();

/**
 * Templates Storybook
 * @param {IImageProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IImageProps> = (args) => <Image {...args} />;

export const DefaultImage = Template.bind({});

DefaultImage.args = {
  ...Image.defaultProps,
  alt: `Women Image`,
  height: 100,
  src: `https://randomuser.me/api/portraits/women/90.jpg`,
  width: 100
};

export const RoundedImage = Template.bind({});

RoundedImage.args = {
  ...Image.defaultProps,
  alt: `Women Image`,
  height: 100,
  shape: `rounded`,
  src: `https://randomuser.me/api/portraits/women/90.jpg`,
  width: 100
};

export const RoundedTopImage = Template.bind({});

RoundedTopImage.args = {
  ...Image.defaultProps,
  alt: `Women Image`,
  height: 100,
  shape: `rounded-top`,
  src: `https://randomuser.me/api/portraits/women/90.jpg`,
  width: 100
};

export const RoundedLeftImage = Template.bind({});

RoundedLeftImage.args = {
  ...Image.defaultProps,
  alt: `Women Image`,
  height: 100,
  shape: `rounded-left`,
  src: `https://randomuser.me/api/portraits/women/90.jpg`,
  width: 100
};

export const RoundedRightImage = Template.bind({});

RoundedRightImage.args = {
  ...Image.defaultProps,
  alt: `Women Image`,
  height: 100,
  shape: `rounded-right`,
  src: `https://randomuser.me/api/portraits/women/90.jpg`,
  width: 100
};

export const RoundedBottomImage = Template.bind({});

RoundedBottomImage.args = {
  ...Image.defaultProps,
  alt: `Women Image`,
  height: 100,
  shape: `rounded-bottom`,
  src: `https://randomuser.me/api/portraits/women/90.jpg`,
  width: 100
};

export const CircleImage = Template.bind({});

CircleImage.args = {
  ...Image.defaultProps,
  alt: `Women Image`,
  height: 100,
  shape: `circle`,
  src: `https://randomuser.me/api/portraits/women/90.jpg`,
  width: 100
};
