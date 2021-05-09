import type { Story } from '@storybook/react/types-6-0';

import { Button } from '@/button';
import { IButtonProps } from '@/button/interface';

export default {
  argTypes: {
    // assigns the argTypes to the Colors category
    backgroundColor: {
      control: `color`,
      table: {
        category: `Colors`,
        // assigns the argTypes to a specific subcategory
        subcategory: `Button colors`
      }
    },
    label: {
      table: {
        category: `Text`,
        subcategory: `Button contents`
      }
    },
    // assigns the argType to the Events category
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
    // assigns the argType to the Sizes category
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
