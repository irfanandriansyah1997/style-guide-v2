import type { Story } from '@storybook/react/types-6-0';

import { Button } from '@/component/atomic/button';
import { IButtonProps } from '@/component/atomic/button/interface';
import Builder from '@/utils/modules/storybook';

export default new Builder()
  .setModuleName(`Button`)
  .setType(`atomic`)
  .setComponent(Button)
  .setArgs({
    argsName: `backgroundColor`,
    control: `color`,
    table: {
      category: `Colors`,
      subcategory: `Button colors`
    }
  })
  .setArgs({
    argsName: `label`,
    table: {
      category: `Text`,
      subcategory: `Button contents`
    }
  })
  .setMultipleArgs([
    {
      argsName: `onClick`,
      table: {
        category: `Events`,
        subcategory: `Button Events`
      }
    },
    {
      argsName: `primary`,
      table: {
        category: `Colors`,
        subcategory: `Button style`
      }
    },
    {
      argsName: `size`,
      table: {
        category: `Sizes`
      }
    }
  ])
  .execute();

/**
 * Templates Storybook
 * @param {IButtonProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  label: `Button`,
  size: `large`
};

export const Primary = Template.bind({});
Primary.args = {
  label: `Button Primary`,
  primary: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: `Button`
};

export const Small = Template.bind({});
Small.args = {
  label: `Button`,
  size: `small`
};
