import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_GRID_COMPONENT: IStorybookArgsItem[] = [
  {
    argsName: `order`,
    control: false,
    description: `Sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending \`order\` value and then by their source code order`,
    table: {
      category: `Grid Item`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `number`
      }
    }
  },
  {
    argsName: `size`,
    control: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, `auto`],
      type: `inline-radio`
    },
    description: `Attribute for set width without refer media query`,
    table: {
      category: `Grid Item`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IGridSize`
      }
    },
    type: {
      required: true
    }
  },
  {
    argsName: `xs`,
    control: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, `auto`],
      type: `inline-radio`
    },
    description: `Attribute for set width with maximum width 576px`,
    table: {
      category: `Grid Item`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IGridSize`
      }
    }
  },
  {
    argsName: `sm`,
    control: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, `auto`],
      type: `inline-radio`
    },
    description: `Attribute for set width with minimum width 576px`,
    table: {
      category: `Grid Item`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IGridSize`
      }
    }
  },
  {
    argsName: `md`,
    control: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, `auto`],
      type: `inline-radio`
    },
    description: `Attribute for set width with minimum width 768px`,
    table: {
      category: `Grid Item`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IGridSize`
      }
    }
  },
  {
    argsName: `lg`,
    control: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, `auto`],
      type: `inline-radio`
    },
    description: `Attribute for set width with minimum width 992px`,
    table: {
      category: `Grid Item`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IGridSize`
      }
    }
  },
  {
    argsName: `xl`,
    control: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, `auto`],
      type: `inline-radio`
    },
    description: `Attribute for set width with minimum width 1200px`,
    table: {
      category: `Grid Item`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IGridSize`
      }
    }
  },
  {
    argsName: `aligntItems`,
    description: `The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis.`,
    table: {
      category: `Grid Row`,
      defaultValue: {
        summary: `center`
      },
      type: {
        summary: `Property.AlignItems`
      }
    }
  },
  {
    argsName: `justifyContent`,
    description: `The CSS justifyContent property defines for all items of the box, giving them all a default way of justifying each box along the appropriate axis.`,
    table: {
      category: `Grid Row`,
      defaultValue: {
        summary: `center`
      },
      type: {
        summary: `Property.JustifyContent`
      }
    }
  },
  {
    argsName: `spaceEachItem`,
    control: {
      max: 30,
      min: 0,
      type: `range`
    },
    description: `Attribute for customize space each grid item`,
    table: {
      category: `Grid Row`,
      defaultValue: {
        summary: `10`
      },
      type: {
        summary: `number | Partial<IGridSpaceItem>`
      }
    }
  }
];
