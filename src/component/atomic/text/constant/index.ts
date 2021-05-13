import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_TEXT_COMPONENT: IStorybookArgsItem[] = [
  {
    argsName: `children`,
    control: {
      type: `text`
    },
    defaultValue: ``,
    description: `Content on text component`,
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
    argsName: `color`,
    control: {
      type: `color`
    },
    description: `What text color to use`,
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
    argsName: `fontFamily`,
    control: {
      type: `text`
    },
    defaultValue: `'Museo Sans', sans-serif`,
    description: `What typeface to use`,
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
    argsName: `fontSize`,
    control: {
      max: 64,
      min: 12,
      type: `range`
    },
    defaultValue: `-`,
    description: `CSS property sets the size of the font`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `number`
      }
    }
  },
  {
    argsName: `fontWeight`,
    control: {
      options: [100, 200, 300, 400, 500, 600, 700],
      type: `select`
    },
    defaultValue: 400,
    description: `CSS property sets the weight (or boldness) of the font`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `number`
      }
    }
  },
  {
    argsName: `lineHeight`,
    control: {
      max: 64,
      min: 12,
      type: `range`
    },
    defaultValue: `-`,
    description: `CSS property sets the height of a line box`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `number`
      }
    }
  },
  {
    argsName: `textAlign`,
    control: {
      options: [
        `-moz-initial`,
        `inherit`,
        `initial`,
        `revert`,
        `unset`,
        `center`,
        `end`,
        `justify`,
        `left`,
        `match-parent`,
        `right`,
        `start`
      ],
      type: `select`
    },
    description: `CSS property sets the horizontal alignment of a block element`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `Property.TextAlign`
      }
    }
  },
  {
    argsName: `textDecoration`,
    control: {
      options: [
        `auto`,
        `blink`,
        `dashed`,
        `dotted`,
        `double`,
        `from-font`,
        `grammar-error`,
        `line-through`,
        `none`,
        `overline`,
        `solid`,
        `spelling-error`,
        `underline`,
        `wavy`
      ],
      type: `select`
    },
    description: `CSS property sets the color of decorations added to text by \`text-decoration-line\``,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `Property.TextDecoration`
      }
    }
  }
];
