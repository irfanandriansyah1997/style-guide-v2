import { bind, bulkVerifiedIsNotEmpty } from '@99/helper';

import { NullAble } from '@/interface/general';
import {
  generateArgsModules,
  generateTitleModules
} from '@/modules/storybook/helper';
import {
  IStorybookArgsItem,
  IStorybookComponent,
  IStorybookGenerated,
  IStorybookType
} from '@/modules/storybook/interface';

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

  private subComponent: Record<string, IStorybookComponent> = {};

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
   * Setter Sub Component Storybook Modules
   * @param {IStorybookComponent} component - main component for storybook modules
   * @returns {StorybookModulesBuilder}
   */
  setSubComponent(
    component: Record<string, IStorybookComponent>
  ): StorybookModulesBuilder {
    this.subComponent = component;

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
    const {
      args,
      component,
      moduleName,
      parentModule,
      subComponent,
      type
    } = this;

    if (bulkVerifiedIsNotEmpty([component, moduleName])) {
      return {
        argTypes: generateArgsModules(args),
        component: component as IStorybookComponent,
        subcomponents: subComponent,
        title: generateTitleModules(type, moduleName as string, parentModule)
      };
    }

    return undefined;
  }
}
