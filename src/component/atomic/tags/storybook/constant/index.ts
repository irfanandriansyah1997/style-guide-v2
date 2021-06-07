import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_TAGS_COMPONENT: IStorybookArgsItem[] = [
  {
    action: `clicked`,
    argsName: `onClick`
  },
  {
    argsName: `children`,
    control: false,
    description: `tags component text`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `ReactNode`
      }
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
    argsName: `inverted`,
    description: `Set inverted on background color of tags`,
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
    argsName: `rounded`,
    description: `Set rounded type of tags`,
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
    argsName: `rtl`,
    description: `Set right to left tags content`,
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
    argsName: `rtl`,
    description: `Set right to left tags content`,
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
    argsName: `size`,
    control: {
      options: [`default`, `small`],
      type: `inline-radio`
    },
    description: `Set tags size, eg. \`default\` \`small\``,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `default`
      },
      type: {
        summary: `ITagsSize`
      }
    }
  },
  {
    argsName: `theme`,
    control: {
      options: [`light`, `dark`],
      type: `inline-radio`
    },
    description: `Set tags theme`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `light`
      },
      type: {
        summary: `ITagsThemeOption`
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
        summary: `ITagsClassnameList`
      }
    }
  }
];
