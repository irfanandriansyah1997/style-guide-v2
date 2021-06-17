/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import List from '@/atomic/list';
import { IListClassnameList, IListProps } from '@/atomic/list/interface';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import Builder from '@/modules/storybook';

import { CUSTOM_ARGS_LIST_COMPONENT } from './storybook-args';

List.displayName = `List`;
List.Item.displayName = `List.Item`;

export default new Builder()
  .setParentModuleName(`List Component`)
  .setModuleName(`Custom Classname`)
  .setType(`atomic`)
  .setComponent(List)
  .setSubComponent({
    ListItem: List.Item
  })
  .setMultipleArgs(CUSTOM_ARGS_LIST_COMPONENT)
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<Omit<IListProps, 'className'> & IListClassnameList> = ({
  item,
  wrapper,
  ...res
}) => (
  <List.Memoized
    {...res}
    className={{
      item,
      wrapper
    }}
  >
    <List.Item className="first">List Number 1</List.Item>
    <List.Item>List Number 2</List.Item>
    <List.Item className="mid">List Number 3</List.Item>
    <List.Item>List Number 4</List.Item>
    <List.Item className="last">List Number 5</List.Item>
  </List.Memoized>
);

export const Showcase = Template.bind({});

Showcase.args = {
  ...List.defaultProps,
  dividerColor: STYLE_GUIDE_COLOR.dark400,
  item: `sample-classname-item`,
  orientation: `horizontal`,
  outline: `dash`,
  space: 20,
  wrapper: `sample-classname-wrapper`
};
