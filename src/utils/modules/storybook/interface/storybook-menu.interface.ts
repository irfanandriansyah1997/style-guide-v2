import { ComponentClass, FC } from 'react';

/**
 * Storybook Args Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export interface IStorybookArgsItem {
  [key: string]: any;
  argsName: string;
  defaultValue?: any;
  description?: string;
  table?: Partial<IStorybookArgsTable>;
}

/**
 * Storybook Args Table Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export interface IStorybookArgsTable {
  category: string;
  subcategory: string;
}

export type IStorybookComponent = FC<any> | ComponentClass<any>;

export type IStorybookType = 'atomic' | 'molecules' | 'organism';
