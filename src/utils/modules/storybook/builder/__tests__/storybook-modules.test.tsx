import { FC } from 'react';

import { StorybookModulesBuilder } from '@/modules/storybook/builder/storybook-modules.builder';
import {
  IStorybookArgsItem,
  IStorybookGenerated
} from '@/modules/storybook/interface';

const BASIC_ARGS: IStorybookArgsItem = {
  argsName: `tag`,
  control: {
    options: [`p`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `span`],
    type: `select`
  },
  defaultValue: ``,
  description: `HTML tags to be displayed`,
  table: {
    category: `Content`,
    defaultValue: {
      summary: `-`
    },
    type: {
      summary: `ITextType`
    }
  },
  type: {
    required: true
  }
};

/**
 * Sample Component
 */
const SAMPLE_COMPONENT: FC = () => <div />;

describe(`Testing Storybook Modules`, () => {
  describe(`Testing Failure Case`, () => {
    it(`Testing without invoke all setter method`, () => {
      const modules = new StorybookModulesBuilder().execute();

      expect(modules).toBeUndefined();
    });

    it(`Testing without set module name`, () => {
      const modules = new StorybookModulesBuilder()
        .setArgs(BASIC_ARGS)
        .setParentModuleName(`Parent Modules`)
        .setComponent(SAMPLE_COMPONENT)
        .setMultipleArgs([BASIC_ARGS])
        .setType(`atomic`)
        .execute();

      expect(modules).toBeUndefined();
    });

    it(`Testing without set component`, () => {
      const modules = new StorybookModulesBuilder()
        .setArgs(BASIC_ARGS)
        .setParentModuleName(`Parent Modules`)
        .setModuleName(`Component`)
        .setMultipleArgs([BASIC_ARGS])
        .setType(`atomic`)
        .execute();

      expect(modules).toBeUndefined();
    });
  });

  it(`Testing Success Case`, () => {
    const modules = new StorybookModulesBuilder()
      .setArgs(BASIC_ARGS)
      .setParentModuleName(`Parent Modules`)
      .setModuleName(`Component`)
      .setComponent(SAMPLE_COMPONENT)
      .setMultipleArgs([BASIC_ARGS])
      .setType(`atomic`)
      .execute();
    const { component, ...res } = modules as IStorybookGenerated;

    expect(component).not.toBeUndefined();
    expect(res).toStrictEqual({
      argTypes: {
        tag: {
          control: {
            options: [`p`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `span`],
            type: `select`
          },
          defaultValue: ``,
          description: `HTML tags to be displayed`,
          table: {
            category: `Content`,
            defaultValue: { summary: `-` },
            type: { summary: `ITextType` }
          },
          type: { required: true }
        }
      },
      title: `atomic/Parent Modules/Component`
    });
  });
});
