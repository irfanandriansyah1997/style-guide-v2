/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';
import Breadcrumb from '@/molecules/breadcrumbs';
import { IBreadcrumbProps } from '@/molecules/breadcrumbs/interface';

import { CUSTOM_ARGS_BREADCRUMBS_COMPONENT } from './storybook-args';

Breadcrumb.displayName = `Breadcrumb`;
Breadcrumb.Item.displayName = `Breadcrumb.Item`;

export default new Builder()
  .setParentModuleName(`Breadcrumb Component`)
  .setModuleName(`Breadcrumb Custom Classname`)
  .setType(`molecules`)
  .setComponent(Breadcrumb)
  .setMultipleArgs(CUSTOM_ARGS_BREADCRUMBS_COMPONENT)
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<
  Omit<IBreadcrumbProps, 'className'> & {
    itemClassName: string;
    separatorClassName: string;
    wrapperClassName: string;
  }
> = ({ itemClassName, separatorClassName, wrapperClassName, ...res }) => (
  <Breadcrumb
    {...res}
    className={{
      item: itemClassName,
      separator: separatorClassName,
      wrapper: wrapperClassName
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
  itemClassName: `sample-item`,
  on: partialAction(`on`),
  separator: <div style={{ color: `#ccc` }}>/</div>,
  separatorClassName: `sample-separator`,
  style: {
    backgroundColor: `#236d9d`,
    fontSize: 12,
    fontWeight: 400,
    heightContainer: 30,
    paddingContainer: 10,
    spaceEachItem: 20,
    textColor: `#ccc`
  },
  wrapperClassName: `sample-wrapper`
};
