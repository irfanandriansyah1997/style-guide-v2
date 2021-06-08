import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_RADIO_COMPONENT: IStorybookArgsItem[] = [
  {
    action: `clicked`,
    argsName: `on`,
    description: `This method will be invoked when user interact radio component`,
    table: {
      category: `Event`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `(param: IEventOnChangeSelection) => void`
      }
    }
  },
  {
    argsName: `children`,
    description: `Label radio component`,
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
    argsName: `active`,
    control: `boolean`,
    description: `the purpose this props for check this component is active or otherwise`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `false`
      },
      type: {
        summary: `boolean | undefined`
      }
    }
  },
  {
    argsName: `className`,
    description: `Classname list for customize classname each html tags on radio component`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `IToggleClassnameList`
      }
    }
  },
  {
    argsName: `value`,
    control: false,
    description: `Value contains on radio componentValue radio component`,
    table: {
      category: `Content`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `IDefaultText`
      }
    }
  },
  {
    argsName: `labelTag`,
    control: {
      options: [`p`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `span`],
      type: `select`
    },
    description: `Element tag will be rendered on label component`,
    table: {
      category: `Styling`,
      defaultValue: {
        summary: `-`
      },
      type: {
        summary: `ITextType`
      }
    }
  }
];
