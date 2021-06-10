/* eslint-disable import/no-extraneous-dependencies */
import { Story } from '@storybook/react/types-6-0';

import Image from '@/atomic/image';
import { IImageResponsiveTemplate } from '@/atomic/image/interface';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_IMAGE_RESPONSIVE_COMPONENT } from './storybook-args';

Image.Responsive.displayName = `Image.Responsive`;

Image.Preset.displayName = `Image.Preset`;

export default new Builder()
  .setModuleName(`Responsive Image`)
  .setParentModuleName(`Image Component`)
  .setType(`atomic`)
  .setComponent(Image.Responsive)
  .setSubComponent({
    ImagePreset: Image.Preset
  })
  .setMultipleArgs(CUSTOM_ARGS_IMAGE_RESPONSIVE_COMPONENT)
  .execute();

/**
 * Template Responsive
 */
const TemplateResponsive: Story<IImageResponsiveTemplate> = ({
  imageDesktop,
  imageMobile,
  imageTableHorizontal,
  imageTablet,
  ...args
}) => (
  <Image.Responsive {...args}>
    <Image.Preset sizes={380} src={imageMobile} />
    <Image.Preset sizes={768} src={imageTablet} />
    <Image.Preset sizes={1024} src={imageTableHorizontal} />
    <Image.Preset sizes={1360} src={imageDesktop} />
  </Image.Responsive>
);

export const DefaultImage = TemplateResponsive.bind({});

DefaultImage.args = {
  ...Image.Responsive.defaultProps,
  alt: `Template Images`,
  imageDesktop: `https://picture.rumah123.com/r123/1600x800-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`,
  imageMobile: `https://picture.rumah123.com/r123/320x186-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`,
  imageTableHorizontal: `https://picture.rumah123.com/r123/1200x705-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`,
  imageTablet: `https://picture.rumah123.com/r123/768x451-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`,
  shape: `rounded`,
  sizes: `50vw`
};
