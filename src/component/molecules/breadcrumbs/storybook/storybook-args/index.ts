import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_BREADCRUMBS_COMPONENT: IStorybookArgsItem[] = [
  {
    argsName: `className`,
    control: false,
    defaultValue: ``,
    description: `Insert class name if needed, this is the value of an element's class attribute`,
    table: {
      category: `Content`,
      type: {
        summary: `Partial<IBreadcrumbClassnameList> | undefined`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `children`,
    control: false,
    defaultValue: ``,
    description: `Set breadcrumb item`,
    table: {
      category: `Content`,
      type: {
        summary: `ReactNode`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `separator`,
    control: false,
    defaultValue: ``,
    description: `Separator element between each breadcrumb item, e.g slash, strip or etc`,
    table: {
      category: `Content`,
      type: {
        summary: `ReactNode`
      }
    },
    type: {
      required: true
    }
  },
  {
    argsName: `style`,
    control: false,
    defaultValue: ``,
    description: `Insert custom style if needed, customize styling on breadcrumb element`,
    table: {
      category: `Content`,
      type: {
        summary: `Partial<IBreadcrumbStyle> | undefined`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `on`,
    control: false,
    defaultValue: ``,
    description: `Event handler will be invoked this method every user interact breadcrumb component such as: clicked breadcrumb item`,
    table: {
      category: `Event`,
      type: {
        summary: `boolean`
      }
    },
    type: {
      required: false
    }
  }
];

export const CUSTOM_ARGS_BREADCRUMBS_STYLING_COMPONENT: IStorybookArgsItem[] = [
  ...CUSTOM_ARGS_BREADCRUMBS_COMPONENT,
  {
    argsName: `backgroundColor`,
    control: {
      type: `color`
    },
    description: `Background color breadcrumb wrapper`,
    table: {
      category: `Styling`,
      type: {
        summary: `Partial<IBreadcrumbClassnameList> | undefined`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `fontSize`,
    control: {
      max: 20,
      min: 12,
      type: `range`
    },
    description: `CSS property sets the size of the font`,
    table: {
      category: `Styling`,
      type: {
        summary: `number | undefined`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `fontWeight`,
    control: {
      options: [100, 200, 300, 400, 500, 600, 700],
      type: `select`
    },
    description: `CSS property sets the weight (or boldness) of the font`,
    table: {
      category: `Styling`,
      type: {
        summary: `number | undefined`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `heightContainer`,
    control: {
      max: 50,
      min: 20,
      type: `range`
    },
    description: `CSS property sets the height of breadcrumb container`,
    table: {
      category: `Styling`,
      type: {
        summary: `Partial<IBreadcrumbClassnameList> | undefined`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `paddingContainer`,
    control: {
      max: 20,
      min: 10,
      type: `range`
    },
    description: `Set padding left & right breadcrumb container`,
    table: {
      category: `Styling`,
      type: {
        summary: `number | undefined`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `spaceEachItem`,
    control: {
      max: 40,
      min: 20,
      type: `range`
    },
    description: `Set space each breadcrumb item, for now we use px for size reference`,
    table: {
      category: `Styling`,
      type: {
        summary: `number | undefined`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `textColor`,
    control: {
      type: `color`
    },
    description: `What text color to use`,
    table: {
      category: `Styling`,
      type: {
        summary: `string | undefined`
      }
    },
    type: {
      required: false
    }
  }
];
