import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_CHIPS_COMPONENT: IStorybookArgsItem[] = [
  {
    action: `clicked`,
    argsName: `on`,
    description: `This method will be invoked when user try to interact chips component`,
    table: {
      category: `Event`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `MouseEventHandler<HTMLButtonElement>`
      }
    }
  },
  {
    argsName: `label`,
    control: {
      type: `text`
    },
    description: `chips label text`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `string`
      }
    },
    type: {
      required: true
    }
  },
  {
    argsName: `outline`,
    description: `Set outline style of tags`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `false`
      },
      type: {
        summary: `boolean`
      }
    }
  },
  {
    argsName: `className`,
    description: `Classname list for customize classname each html tags on tags component`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IChipsClassnameList`
      }
    }
  }
];
