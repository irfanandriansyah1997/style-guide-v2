import { bind, bulkVerifiedIsNotEmpty } from '@99/helper';

import { NullAble } from '@/utils/interface/general';
import {
  generateArgsModules,
  generateTitleModules
} from '@/utils/modules/storybook/helper';
import {
  IStorybookArgsItem,
  IStorybookComponent,
  IStorybookGenerated,
  IStorybookType
} from '@/utils/modules/storybook/interface';

/**
 * Storybook Modules Builder
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export class StorybookModulesBuilder {
  private parentModule: NullAble<string>;

  private moduleName: NullAble<string>;

  private type: IStorybookType = `atomic`;

  private args: IStorybookArgsItem[] = [];

  private component?: IStorybookComponent = undefined;

  /**
   * Setter Module Name Storybook Modules
   * @param {string} name - storybook modules name
   * @returns {StorybookModulesBuilder}
   */
  setModuleName(name: string): StorybookModulesBuilder {
    this.moduleName = name;

    return this;
  }

  /**
   * Setter Parent Module Name Storybook Modules
   * @param {string} name - storybook modules name
   * @returns {StorybookModulesBuilder}
   */
  setParentModuleName(name: string): StorybookModulesBuilder {
    this.parentModule = name;

    return this;
  }

  /**
   * Setter Type Storybook Modules
   * @param {IStorybookType} type - storybook modules type
   * @returns {StorybookModulesBuilder}
   */
  setType(type: IStorybookType): StorybookModulesBuilder {
    this.type = type;

    return this;
  }

  /**
   * Setter Component Storybook Modules
   * @param {IStorybookComponent} component - main component for storybook modules
   * @returns {StorybookModulesBuilder}
   */
  setComponent(component: IStorybookComponent): StorybookModulesBuilder {
    this.component = component;

    return this;
  }

  /**
   * Setter Args Storybook Modules
   * @param {IStorybookArgsItem} args - one args type storybook modules
   * @returns {StorybookModulesBuilder}
   */
  setArgs(args: IStorybookArgsItem): StorybookModulesBuilder {
    this.args = [...this.args, args];

    return this;
  }

  /**
   * Setter Multiple Args Storybook Modules
   * @param {IStorybookArgsItem[]} args - multiple args type storybook modules
   * @returns {StorybookModulesBuilder}
   */
  setMultipleArgs(args: IStorybookArgsItem[]): StorybookModulesBuilder {
    this.args = [...this.args, ...args];

    return this;
  }

  /**
   * Execute Builder
   * @returns {NullAble<IStorybookModules>}
   */
  @bind
  execute(): NullAble<IStorybookGenerated> {
    const { args, component, moduleName, parentModule, type } = this;

    if (bulkVerifiedIsNotEmpty([component, moduleName])) {
      return {
        argTypes: generateArgsModules(args),
        component: component as IStorybookComponent,
        title: generateTitleModules(type, moduleName as string, parentModule)
      };
    }

    return undefined;
  }
}