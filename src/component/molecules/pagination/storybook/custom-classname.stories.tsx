/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';
import Pagination from '@/molecules/pagination';
import { IPaginationProps } from '@/molecules/pagination/interface';

import { CUSTOM_ARGS_PAGINATION_COMPONENT } from './storybook-args';

Pagination.displayName = `Pagination`;
Pagination.Item.displayName = `Pagination`;

export default new Builder()
  .setParentModuleName(`Pagination Component`)
  .setModuleName(`Custom Classname`)
  .setType(`molecules`)
  .setComponent(Pagination)
  .setMultipleArgs(CUSTOM_ARGS_PAGINATION_COMPONENT)
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<
  IPaginationProps & {
    breakLabel: string;
    nextLabel: string;
    prevLabel: string;
  }
> = ({ breakLabel, nextLabel, prevLabel, ...res }) => (
  <Pagination {...res}>
    <Pagination.Item type="previous-label">{prevLabel}</Pagination.Item>
    <Pagination.Item type="next-label">{nextLabel}</Pagination.Item>
    <Pagination.Item type="break-label">{breakLabel}</Pagination.Item>
  </Pagination>
);

export const DefaultPagination = Template.bind({});

DefaultPagination.args = {
  ...Pagination.defaultProps,
  breakLabel: `...`,
  className: {
    active: `custom-classname-active`,
    activeLink: `custom-classname-activeLink`,
    break: `custom-classname-break`,
    breakLink: `custom-classname-breakLink`,
    container: `custom-classname-container`,
    disabled: `custom-classname-disabled`,
    next: `custom-classname-next`,
    nextLink: `custom-classname-nextLink`,
    page: `custom-classname-page`,
    pageLink: `custom-classname-pageLink`,
    previous: `custom-classname-previous`,
    previousLink: `custom-classname-previousLink`
  },
  disableInitialCallback: true,
  marginDisplayed: 2,
  nextLabel: `Next`,
  on: partialAction(`on`),
  page: 2,
  pageRange: 2,
  prevLabel: `Prev`,
  totalPage: 100
};
