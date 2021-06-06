/* eslint-disable import/no-extraneous-dependencies */
import { Story } from '@storybook/react/types-6-0';

import Image from '@/atomic/image';
import { IImageResponsiveTemplate } from '@/atomic/image/interface';
import Builder from '@/modules/storybook';

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
  .setMultipleArgs([])
  .execute();

/**
 * Template
 */
const TemplateResponsive: Story<IImageResponsiveTemplate> = ({
  template,
  ...args
}) => (
  <Image.Responsive {...args}>
    {template.map((item) => (
      <Image.Preset key={item.src} {...item} />
    ))}
  </Image.Responsive>
);

export const DefaultImage = TemplateResponsive.bind({});

DefaultImage.args = {
  ...Image.Responsive.defaultProps,
  alt: `Women Image`,
  shape: `rounded`,
  sizes: `50vw`,
  template: [
    {
      sizes: 768,
      src: `https://picture.rumah123.com/r123/768x451-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`
    },
    {
      sizes: 380,
      src: `https://picture.rumah123.com/r123/320x186-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`
    },
    {
      sizes: 1024,
      src: `https://picture.rumah123.com/r123/1200x705-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`
    },
    {
      sizes: 640,
      src: `https://picture.rumah123.com/r123/500x294-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`
    }
  ]
};
