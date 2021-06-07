import { IStorybookArgsItem } from '@/modules/storybook/interface';

const BASIC_ARGS_AVATAR_COMPONENT: IStorybookArgsItem[] = [
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
  }
];

export const CUSTOM_ARGS_AVATAR_ENUM_SIZE_COMPONENT = [
  ...BASIC_ARGS_AVATAR_COMPONENT,
  {
    argsName: `size`,
    control: {
      options: [`big`, `medium`, `small`],
      type: `select`
    },
    defaultValue: `-`,
    description: `Attribute for customize width & height image`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `number | IImageSizeType`
      }
    }
  }
];

export const CUSTOM_ARGS_AVATAR_NUMBER_SIZE_COMPONENT = [
  ...BASIC_ARGS_AVATAR_COMPONENT,
  {
    argsName: `size`,
    control: {
      max: 300,
      min: 100,
      type: `range`
    },
    defaultValue: `-`,
    description: `Attribute for customize width & height image`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `number | IImageSizeType`
      }
    }
  }
];
