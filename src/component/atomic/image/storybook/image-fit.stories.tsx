/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Image from '@/atomic/image';
import { IImageProps } from '@/atomic/image/interface';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_IMAGE_COMPONENT } from './storybook-args';

Image.displayName = `Image`;

export default new Builder()
  .setModuleName(`Object Fit Image`)
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
const Template: Story<
  Omit<IImageProps, 'height' | 'width'> & {
    height: number;
    width: number;
  }
> = (args) => <Image {...args} />;

export const ContainObjectFit = Template.bind({});

ContainObjectFit.args = {
  ...Image.defaultProps,
  alt: `Template Images`,
  height: 200,
  objectFit: `contain`,
  shape: `square`,
  src: `https://picture.rumah123.com/r123/320x186-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`,
  width: 300
};

export const CoverObjectFit = Template.bind({});

CoverObjectFit.args = {
  ...Image.defaultProps,
  alt: `Template Images`,
  height: 200,
  objectFit: `cover`,
  shape: `square`,
  src: `https://picture.rumah123.com/r123/320x186-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`,
  width: 300
};

export const FillObjectFit = Template.bind({});

FillObjectFit.args = {
  ...Image.defaultProps,
  alt: `Template Images`,
  height: 200,
  objectFit: `fill`,
  shape: `square`,
  src: `https://picture.rumah123.com/r123/320x186-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`,
  width: 300
};

export const InitialObjectFit = Template.bind({});

InitialObjectFit.args = {
  ...Image.defaultProps,
  alt: `Template Images`,
  height: 200,
  objectFit: `initial`,
  shape: `square`,
  src: `https://picture.rumah123.com/r123/320x186-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`,
  width: 300
};
