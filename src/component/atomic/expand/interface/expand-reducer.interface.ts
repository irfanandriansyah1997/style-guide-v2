import { GenActionMap } from '@/interface/general';

export type IExpandActionType = GenActionMap<IExpandPayload>[keyof GenActionMap<IExpandPayload>];

/**
 * Expand Reducers Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export interface IExpandReducer {
  className: string;
  expand: boolean;
  height: number;
}

/**
 * Expan Types Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export enum IExpandTypesEnum {
  toggleExpand = `TOGGLE_EXPAND`,
  setHeight = `SET_HEIGHT_WRAPPER`,
  setClassname = `SET_CLASSNAME_WRAPPER`
}

/**
 * Expand Payload Action Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
type IExpandPayload = {
  [IExpandTypesEnum.toggleExpand]: undefined;
  [IExpandTypesEnum.setHeight]: number;
  [IExpandTypesEnum.setClassname]: string;
};
