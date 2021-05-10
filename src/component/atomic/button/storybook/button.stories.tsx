import type { Story } from '@storybook/react/types-6-0';

import { Button } from '@/component/atomic/button';
import { IButtonProps } from '@/component/atomic/button/interface';

export default {
  argTypes: {
    backgroundColor: {
      control: `color`,
      table: {
        category: `Colors`,
        subcategory: `Button colors`
      }
    },
    label: {
      table: {
        category: `Text`,
        subcategory: `Button contents`
      }
    },
    onClick: {
      table: {
        category: `Events`,
        subcategory: `Button Events`
      }
    },

    primary: {
      table: {
        category: `Colors`,
        subcategory: `Button style`
      }
    },

    size: {
      table: {
        category: `Sizes`
      }
    }
  },
  component: Button,
  title: `Atomic/Button`
};

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
