import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_TOOLTIP_COMPONENT: IStorybookArgsItem[] = [
  {
    argsName: `children`,
    control: {
      type: `text`
    },
    description: `tooltip toggle component`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `ReactNode`
      }
    },
    type: {
      required: true
    }
  },
  {
    argsName: `content`,
    control: {
      type: `text`
    },
    description: `The text shown in the tooltip`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `ReactNode`
      }
    },
    type: {
      required: true
    }
  },
  {
    argsName: `background`,
    control: {
      type: `color`
    },
    description: `Set background color tooltip section`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `string`
      }
    }
  },
  {
    argsName: `visible`,
    control: {
      type: `boolean`
    },
    description: `Set enable / disable render toggle component`,
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
    argsName: `position`,
    control: {
      options: [`top`, `right`, `bottom`, `left`],
      type: `inline-radio`
    },
    description: `The position of the tooltip relative to the target, which can be one of \`top\`, \`right\`, \`bottom\`, \`left\``,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `top`
      },
      type: {
        summary: `ITooltipPosition`
      }
    }
  },
  {
    argsName: `className`,
    description: `Classname list for customize classname each html tags on tooltip component`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `ITooltipClassnameList`
      }
    }
  }
];
