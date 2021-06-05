import { IStorybookArgsItem } from '@/modules/storybook/interface';

export const CUSTOM_ARGS_CHECKBOX_COMPONENT: IStorybookArgsItem[] = [
  {
    action: `clicked`,
    argsName: `onChangeSelection`,
    description: `This method will be invoked when user try to click checkbox component`,
    table: {
      category: `Event`,
      defaultValue: {
        summary: `undefined`
      },
      type: {
        summary: `(value: IDefaultText) => void`
      }
    }
  },
  {
    argsName: `children`,
    description: `Label checkbox component`,
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
    description: `Classname list for customize classname each html tags on checkbox component`,
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
    description: `Value contains on checkbox componentValue checkbox component`,
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
