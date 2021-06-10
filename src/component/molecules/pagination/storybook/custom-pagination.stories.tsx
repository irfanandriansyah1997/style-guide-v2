/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import { STYLE_GUIDE_COLOR } from '@/constant/color';
import { partialAction } from '@/helper/storybook.helper';
import Builder from '@/modules/storybook';
import Pagination from '@/molecules/pagination';
import { IPaginationProps } from '@/molecules/pagination/interface';

import { CUSTOM_ARGS_PAGINATION_COMPONENT } from './storybook-args';

Pagination.displayName = `Pagination`;
Pagination.Item.displayName = `Pagination`;

export default new Builder()
  .setParentModuleName(`Pagination Component`)
  .setModuleName(`Custom Pagination Item`)
  .setType(`molecules`)
  .setComponent(Pagination)
  .setMultipleArgs(CUSTOM_ARGS_PAGINATION_COMPONENT)
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IPaginationProps> = (args) => (
  <Pagination {...args}>
    <Pagination.Item type="previous-label">Previous</Pagination.Item>
    <Pagination.Item type="next-label">Next</Pagination.Item>
    <Pagination.Item type="break-label">
      <div className="flex">
        <div
          style={{
            backgroundColor: STYLE_GUIDE_COLOR.dark500,
            borderRadius: `50%`,
            height: 8,
            width: 8
          }}
        />
        <div
          style={{
            backgroundColor: STYLE_GUIDE_COLOR.dark500,
            borderRadius: `50%`,
            height: 8,
            margin: `0 8px`,
            width: 8
          }}
        />
        <div
          style={{
            backgroundColor: STYLE_GUIDE_COLOR.dark500,
            borderRadius: `50%`,
            height: 8,
            width: 8
          }}
        />
      </div>
    </Pagination.Item>
  </Pagination>
);

export const DefaultPagination = Template.bind({});

DefaultPagination.args = {
  ...Pagination.defaultProps,
  disableInitialCallback: false,
  marginDisplayed: 2,
  on: partialAction(`on`),
  page: 2,
  pageRange: 2,
  totalPage: 100
};
