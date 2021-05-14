import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_BUTTON_COMPONENT: IStorybookArgsItem[] = [
  {
    action: `clicked`,
    argsName: `onClick`
  },
  {
    argsName: `children`,
    control: false,
    description: `Button component text`,
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
    description: `Set outline style of button`,
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
    description: `Set rounded type of button`,
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
    description: `Set right to left button content`,
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
    description: `Set right to left button content`,
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
      options: [`big`, `default`, `small`],
      type: `inline-radio`
    },
    description: `Set button size, eg. \`big\` \`default\` \`small\``,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `default`
      },
      type: {
        summary: `IButtonSize`
      }
    }
  },
  {
    argsName: `size`,
    control: {
      options: [`big`, `default`, `small`],
      type: `inline-radio`
    },
    description: `Set button size, eg. \`big\` \`default\` \`small\``,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `default`
      },
      type: {
        summary: `IButtonSize`
      }
    }
  },
  {
    argsName: `theme`,
    control: {
      options: [`light`, `dark`],
      type: `inline-radio`
    },
    description: `Set button theme`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `light`
      },
      type: {
        summary: `IButtonThemeOption`
      }
    }
  },
  {
    argsName: `className`,
    description: `Classname list for customize classname each html tags on button component`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IButtonClassnameList`
      }
    }
  },
  {
    argsName: `icon`,
    control: false,
    description: `Set the icon component of button`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `ReactNode`
      }
    }
  }
];
