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
  type?: Partial<IStorybookArgsType>;
}

/**
 * Storybook Args Table Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export interface IStorybookArgsTable {
  category: string;
  defaultValue: { summary: string };
  subcategory: string;
  type: { [key: string]: any };
}

/**
 * Storybook Args Type Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export interface IStorybookArgsType {
  name: string;
  required: boolean;
}

export type IStorybookComponent = FC<any> | ComponentClass<any>;

export type IStorybookType = 'atomic' | 'molecules' | 'organism';
