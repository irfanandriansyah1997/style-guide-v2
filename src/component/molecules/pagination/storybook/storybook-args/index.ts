import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_PAGINATION_COMPONENT: IStorybookArgsItem[] = [
  {
    argsName: `className`,
    control: false,
    defaultValue: ``,
    description: `Insert class name if needed, this is the value of an element's class attribute`,
    table: {
      category: `Content`,
      type: {
        summary: `Partial<IPaginationClassnameList> | undefined`
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
    description: `Set pagination item such as prev. label, next label and break label`,
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
    argsName: `disableInitialCallback`,
    control: {
      type: `boolean`
    },
    defaultValue: ``,
    description: `Set invoke props on callback when initial page. Default: false`,
    table: {
      category: `Event`,
      type: {
        summary: `boolean`
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
    description: `Event handler will be invoked this method every user interact pagination component such as: clicked pagination item`,
    table: {
      category: `Event`,
      type: {
        summary: `boolean`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `marginDisplayed`,
    control: {
      type: `number`
    },
    defaultValue: ``,
    description: `The number of pages to display for margins`,
    table: {
      category: `Content`,
      type: {
        summary: `number`
      }
    },
    type: {
      required: false
    }
  },
  {
    argsName: `page`,
    control: {
      type: `number`
    },
    defaultValue: ``,
    description: `number of page`,
    table: {
      category: `Content`,
      type: {
        summary: `number`
      }
    },
    type: {
      required: true
    }
  },
  {
    argsName: `pageRange`,
    control: {
      type: `number`
    },
    defaultValue: ``,
    description: `the range of pages displayed`,
    table: {
      category: `Content`,
      type: {
        summary: `number`
      }
    },
    type: {
      required: true
    }
  },
  {
    argsName: `pageRange`,
    control: {
      type: `number`
    },
    defaultValue: ``,
    description: `the range of pages displayed`,
    table: {
      category: `Content`,
      type: {
        summary: `number`
      }
    },
    type: {
      required: true
    }
  },
  {
    argsName: `totalPage`,
    control: {
      type: `number`
    },
    defaultValue: ``,
    description: `Count of the page`,
    table: {
      category: `Content`,
      type: {
        summary: `number`
      }
    },
    type: {
      required: true
    }
  }
];
