import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_LIST_COMPONENT: IStorybookArgsItem[] = [
  {
    argsName: `space`,
    control: {
      max: 30,
      min: 10,
      type: `range`
    },
    defaultValue: `-`,
    description: `Attribute for customize space between list item`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `10`
      },
      type: {
        summary: `number | undefined`
      }
    }
  },
  {
    argsName: `dividerColor`,
    control: {
      type: `color`
    },
    defaultValue: `-`,
    description: `Attribute for customize border color on list item`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `10`
      },
      type: {
        summary: `number | undefined`
      }
    }
  },
  {
    argsName: `outline`,
    control: {
      options: [`dash`, `solid`],
      type: `inline-radio`
    },
    description: `CSS property sets the line style for all four sides of an element's border.`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IListOutline | undefined`
      }
    }
  },
  {
    argsName: `orientation`,
    control: {
      options: [`vertical`, `horizontal`],
      type: `inline-radio`
    },
    description: `CSS property sets orientation list rendered, e.g: \`horizontal\` & \`vertical\``,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IListOrientation | undefined`
      }
    }
  },
  {
    argsName: `className`,
    control: false,
    description: `Classname list for customize classname each html tags on list component`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IListClassnameList | undefined`
      }
    }
  }
];
