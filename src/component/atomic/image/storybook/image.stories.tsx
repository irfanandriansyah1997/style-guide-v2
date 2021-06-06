/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Image from '@/atomic/image';
import { IImageProps } from '@/atomic/image/interface';
import Builder from '@/modules/storybook';

Image.displayName = `Image`;

export default new Builder()
  .setModuleName(`Basic Image`)
  .setParentModuleName(`Image Component`)
  .setType(`atomic`)
  .setComponent(Image)
  .setMultipleArgs([])
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
  shape: `circle`,
  src: `https://randomuser.me/api/portraits/women/90.jpg`
};
