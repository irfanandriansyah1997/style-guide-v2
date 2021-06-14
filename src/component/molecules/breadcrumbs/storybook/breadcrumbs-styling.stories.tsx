/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';
import Breadcrumb from '@/molecules/breadcrumbs';
import {
  IBreadcrumbProps,
  IBreadcrumbStyle
} from '@/molecules/breadcrumbs/interface';

import { CUSTOM_ARGS_BREADCRUMBS_STYLING_COMPONENT } from './storybook-args';

Breadcrumb.displayName = `Breadcrumb`;
Breadcrumb.Item.displayName = `Breadcrumb.Item`;

export default new Builder()
  .setParentModuleName(`Breadcrumb Component`)
  .setModuleName(`Breadcrumb Custom Styling`)
  .setType(`molecules`)
  .setComponent(Breadcrumb)
  .setMultipleArgs(CUSTOM_ARGS_BREADCRUMBS_STYLING_COMPONENT)
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<Omit<IBreadcrumbProps, 'style'> & IBreadcrumbStyle> = ({
  backgroundColor,
  fontSize,
  fontWeight,
  heightContainer,
  paddingContainer,
  spaceEachItem,
  textColor,
  ...res
}) => (
  <Breadcrumb
    {...res}
    style={{
      backgroundColor,
      fontSize,
      fontWeight,
      heightContainer,
      paddingContainer,
      spaceEachItem,
      textColor
    }}
  >
    <Breadcrumb.Item link="https://www.rumah123.com/" label="Beranda" />
    <Breadcrumb.Item
      link="https://www.rumah123.com/jual/residensial/"
      label="Dijual"
    />
    <Breadcrumb.Item
      link="https://www.rumah123.com/jual/jakarta-selatan/residensial/"
      label="Jakarta Selatan"
    />
    <Breadcrumb.Item
      link="https://www.rumah123.com/jual/jakarta-selatan/kebagusan/residensial/"
      label="Kebagusan"
    />
    <Breadcrumb.Item
      link="https://www.rumah123.com/jual/jakarta-selatan/kebagusan/apartemen/"
      label="Apartemen"
    />
    <Breadcrumb.Item label="aps1621487" />
  </Breadcrumb>
);

export const Showcase = Template.bind({});

Showcase.args = {
  ...Breadcrumb.defaultProps,
  backgroundColor: `#236d9d`,
  fontSize: 12,
  fontWeight: 400,
  heightContainer: 30,
  on: partialAction(`on`),
  paddingContainer: 10,
  separator: `/`,
  spaceEachItem: 20,
  textColor: `#ccc`
};
