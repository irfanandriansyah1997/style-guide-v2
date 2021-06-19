import { IStorybookArgsItem } from '@/modules/storybook/interface';

const CUSTOM_ARGS_METER_COMPONENT: IStorybookArgsItem[] = [
  {
    argsName: `value`,
    control: {
      max: 100,
      min: 0,
      type: `range`
    },
    defaultValue: `-`,
    description: `Attribute for set content width, for range value we can set 0 between 100`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `number`
      }
    },
    type: {
      required: true
    }
  },
  {
    argsName: `height`,
    control: {
      max: 30,
      min: 10,
      type: `range`
    },
    defaultValue: `-`,
    description: `Attribute for set height meter component`,
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
    argsName: `color`,
    control: {
      type: `color`
    },
    defaultValue: `-`,
    description: `Attribute for customize background color on indicator meter section`,
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
    argsName: `bgColor`,
    control: {
      type: `color`
    },
    defaultValue: `-`,
    description: `Attribute for customize background color on container meter section`,
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
    argsName: `className`,
    control: false,
    description: `Classname list for customize classname each html tags on meter component`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IMeterClassnameList | undefined`
      }
    }
  }
];

export const CUSTOM_ARGS_METER_COMPONENT_CUSTOM_ROUNDED = [
  ...CUSTOM_ARGS_METER_COMPONENT,
  {
    argsName: `borderRadius`,
    control: {
      options: [`rounded`, `square`],
      type: `inline-radio`
    },
    defaultValue: `-`,
    description: `Attribute for set rounds the corners of an element's outer border edge`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `IMeterShape`
      }
    },
    type: {
      required: true
    }
  }
];

export const CUSTOM_ARGS_METER_COMPONENT_ROUNDED = [
  ...CUSTOM_ARGS_METER_COMPONENT,
  {
    argsName: `borderRadius`,
    control: {
      max: 100,
      min: 0,
      type: `range`
    },
    defaultValue: `-`,
    description: `Attribute for set rounds the corners of an element's outer border edge`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `IMeterShape`
      }
    },
    type: {
      required: true
    }
  }
];
