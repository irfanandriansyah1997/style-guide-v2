import { verifiedIsNotEmpty } from '@99/helper';

import { NullAble } from '@/interface/general';
import {
  IStorybookArgsItem,
  IStorybookGeneratedArgs,
  IStorybookType
} from '@/modules/storybook/interface';

/**
 * Generate Args Modules
 * @param {IStorybookArgsItem[]} args - multiple args type storybook modules
 * @returns {IStorybookGeneratedArgs}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 *
 */
export const generateArgsModules = (
  args: IStorybookArgsItem[]
): IStorybookGeneratedArgs =>
  args
    .map(
      ({ argsName, ...res }): IStorybookGeneratedArgs => ({
        [`${argsName}`]: { ...res }
      })
    )
    .reduce((prev, current) => ({ ...prev, ...current }), {});

/**
 * Generate Title Modules
 * @param {IStorybookType} type - storybook modules type
 * @param {string} modules - storybook modules name
 * @param {string} parentModules - storybook parent modules name
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const generateTitleModules = (
  type: IStorybookType,
  modules: string,
  parentModules: NullAble<string> = undefined
): string => {
  if (verifiedIsNotEmpty(parentModules))
    return `${type}/${parentModules}/${modules}`;

  return `${type}/${modules}`;
};
