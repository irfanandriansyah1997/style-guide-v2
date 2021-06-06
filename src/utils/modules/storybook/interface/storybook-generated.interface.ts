import {
  IStorybookArgsItem,
  IStorybookComponent
} from './storybook-menu.interface';

/**
 * Storybook Generated Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export interface IStorybookGenerated {
  argTypes: IStorybookGeneratedArgs;
  component: IStorybookComponent;
  subcomponents: Record<string, IStorybookComponent>;
  title: string;
}

/**
 * Storybook Generated Args Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export interface IStorybookGeneratedArgs {
  [key: string]: Omit<IStorybookArgsItem, 'argsName'>;
}
