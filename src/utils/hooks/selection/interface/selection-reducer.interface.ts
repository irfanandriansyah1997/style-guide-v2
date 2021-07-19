import { GenActionMap } from '@/interface/general';

export type ISelectionActionType = GenActionMap<ISelectionPayload>[keyof GenActionMap<ISelectionPayload>];

/**
 * Selection Reducers Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export interface ISelectionReducers {
  selected: (string | number)[];
  type: ISelectionType;
}

/**
 * Selection Setter Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export interface ISelectionSetterParam {
  event: 'register' | 'remove';
  value: string | number;
}

export type ISelectionType = 'single' | 'multiple';

/**
 * Selection Types Enum Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export enum ISelectionTypesEnum {
  setSelection = `SET_SELECTION`,
  setSelectionType = `SET_SELECTION_TYPE`
}

/**
 * Selection Payload Action Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
type ISelectionPayload = {
  [ISelectionTypesEnum.setSelection]: ISelectionSetterParam;
  [ISelectionTypesEnum.setSelectionType]: ISelectionType;
};
