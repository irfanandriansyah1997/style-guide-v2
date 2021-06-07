/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Avatar from '@/atomic/avatar';
import { IAvatarProps } from '@/atomic/avatar/interface';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_AVATAR_NUMBER_SIZE_COMPONENT } from './constant';

Avatar.displayName = `Image`;

export default new Builder()
  .setModuleName(`Avatar Customize Size`)
  .setParentModuleName(`Avatar Component`)
  .setType(`atomic`)
  .setComponent(Avatar)
  .setSubComponent({})
  .setMultipleArgs(CUSTOM_ARGS_AVATAR_NUMBER_SIZE_COMPONENT)
  .execute();

/**
 * Templates Avatar Storybook
 * @param {IImageProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IAvatarProps> = (args) => <Avatar {...args} />;

export const CustomizeSizeAvatar = Template.bind({});

CustomizeSizeAvatar.args = {
  ...Avatar.defaultProps,
  alt: `Template Images`,
  size: 100,
  src: `https://picture.rumah123.com/r123/320x186-fit/house/ho36/3601946/original/hos3601946-rumah-di-jual-di-balongan-indramayu-1621399273.jpg`
};
