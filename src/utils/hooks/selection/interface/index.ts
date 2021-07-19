import {
  ISelectionReducers,
  ISelectionSetterParam,
  ISelectionType
} from './selection-reducer.interface';

export * from './selection-reducer.interface';

/**
 * Selection Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export interface ISelectionHooks {
  action: ISelectionHooksAction;
  state: ISelectionReducers;
}

/**
 * Selection Hooks Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export interface ISelectionHooksAction {
  changeValue(param: ISelectionSetterParam): void;
}

/**
 * Selection Hooks Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export interface ISelectionHooksParam {
  defaultValue?: (string | number)[];
  onChange?: (payload: ISelectionReducers) => void;
  type?: ISelectionType;
  value?: (string | number)[];
}
