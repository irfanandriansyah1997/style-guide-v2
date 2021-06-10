import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_IMAGE_COMPONENT: IStorybookArgsItem[] = [
  {
    argsName: `alt`,
    description: `Attribute for define alternative text on images tag`,
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
    argsName: `src`,
    description: `Attribute specifies the path (URL) to the image`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `-`
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
    argsName: `className`,
    control: {
      type: `text`
    },
    description: `Attribute for customize classname on img tags`,
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
    argsName: `height`,
    control: {
      max: 400,
      min: 0,
      type: `range`
    },
    defaultValue: `-`,
    description: `Attribute for customize height image`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `number | string`
      }
    }
  },
  {
    argsName: `width`,
    control: {
      max: 400,
      min: 0,
      type: `range`
    },
    description: `Attribute for customize width image`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `number | string`
      }
    }
  },
  {
    argsName: `objectFit`,
    control: {
      options: [
        `-moz-initial`,
        `inherit`,
        `initial`,
        `revert`,
        `unset`,
        `contain`,
        `cover`,
        `fill`,
        `none`,
        `scale-down`
      ],
      type: `select`
    },
    description: `CSS property sets how the content should be resized to fits its container`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `initial`
      },
      type: {
        summary: `Property.ObjectFit`
      }
    }
  },
  {
    argsName: `shape`,
    control: {
      options: [
        `circle`,
        `square`,
        `rounded`,
        `rounded-bottom`,
        `rounded-left`,
        `rounded-top`,
        `rounded-right`
      ],
      type: `select`
    },
    description: `Attribute for define image shape, such as circle, rounded etc`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `initial`
      },
      type: {
        summary: `Property.ObjectFit`
      }
    }
  }
];

export const CUSTOM_ARGS_IMAGE_RESPONSIVE_COMPONENT = [
  ...CUSTOM_ARGS_IMAGE_COMPONENT.filter((item) => item.argsName !== `src`),
  {
    argsName: `sizes`,
    control: {
      type: `text`
    },
    defaultValue: `-`,
    description: `Attribute for tell the browser to assume the image fills the entire browser width`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `string`
      }
    }
  }
];
