import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_FAB_COMPONENT: IStorybookArgsItem[] = [
  {
    action: `clicked`,
    argsName: `on`,
    description: `This method will be invoked when user try to interact fab component`,
    table: {
      category: `Event`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IEventOnClickButton`
      }
    }
  },
  {
    argsName: `icon`,
    control: {
      type: `ReactNode`
    },
    description: `fab icon`,
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
    argsName: `text`,
    description: `Set text on FAB component if you choose type as extended mode`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `string`
      }
    }
  },
  {
    argsName: `className`,
    description: `custom classname on fab wrapper component`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `string`
      }
    }
  },
  {
    argsName: `animation`,
    control: {
      options: [
        `fade-in`,
        `fade-in-top`,
        `fade-in-bottom`,
        `fade-in-left`,
        `fade-in-right`
      ],
      type: `select`
    },
    description: `The animation props are useful for set animation effect when we set show / hidden current component`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `fade-in`
      },
      type: {
        summary: `IFabAnimation | undefined`
      }
    }
  },
  {
    argsName: `bottom`,
    control: {
      max: 100,
      min: 0,
      type: `range`
    },
    description: `The bottom props is useful for set bottom position components displayed`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `string | number`
      }
    }
  },
  {
    argsName: `left`,
    control: {
      max: 100,
      min: 0,
      type: `range`
    },
    description: `The left props is useful for set left position components displayed`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `string | number`
      }
    }
  },
  {
    argsName: `position`,
    control: {
      options: [`absolute`, `fixed`],
      type: `select`
    },
    description: `The position props will be useful for set position attribute on style, for now, we can use \`absolute\` or \`fixed\``,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `absolute`
      },
      type: {
        summary: `IFabPosition | undefined`
      }
    }
  },
  {
    argsName: `right`,
    control: {
      max: 100,
      min: 0,
      type: `range`
    },
    description: `The right props is useful for set right position components displayed`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `string | number`
      }
    }
  },
  {
    argsName: `rtl`,
    control: {
      type: `boolean`
    },
    description: `The RTL props work for set text direction, if you want text will be on the right icon section you can set True otherwise you can set False for the value`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `false`
      },
      type: {
        summary: `boolean | undefined`
      }
    }
  },
  {
    argsName: `shape`,
    control: {
      options: [`basic`, `small`, `extended`],
      type: `select`
    },
    description: `The shape props used to change the shape of the fab component, you can choose \`basic\` if you want default styling and then, if you want fab component with the \`small\` size you can choose small, and the for last if you want to customize component with the text you can choose \`extended\` for the value`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `basic`
      },
      type: {
        summary: `IFabType`
      }
    }
  },
  {
    argsName: `show`,
    control: {
      type: `boolean`
    },
    description: `The show props work for set toggle show or hidden fab component`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `true`
      },
      type: {
        summary: `boolean | undefined`
      }
    }
  },
  {
    argsName: `theme`,
    control: {
      options: [`dark`, `light`],
      type: `select`
    },
    description: `The theme props are useful for set theming of FAB component color, For now, you just only choose between light or dark for the value`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `true`
      },
      type: {
        summary: `IButtonThemeOption`
      }
    }
  },
  {
    argsName: `top`,
    control: {
      max: 100,
      min: 0,
      type: `range`
    },
    description: `The top props is useful for set top position components displayed`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `string | number`
      }
    }
  }
];
