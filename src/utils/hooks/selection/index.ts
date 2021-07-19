/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useMemo, useReducer, useRef } from 'react';

import SelectionContext from './context';
import {
  ISelectionActionType,
  ISelectionHooks,
  ISelectionHooksParam,
  ISelectionReducers,
  ISelectionSetterParam,
  ISelectionTypesEnum
} from './interface';
import { selectionReducer } from './reducers';

/**
 * Use Selection
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export const useSelection = ({
  defaultValue = [],
  value,
  onChange,
  type = `multiple`
}: ISelectionHooksParam): ISelectionHooks => {
  const { current: initialState } = useRef<ISelectionReducers>({
    selected: defaultValue,
    type
  });
  const [state, dispatch] = useReducer(selectionReducer, initialState);
  const valueIsControlled = value !== undefined;
  const valueState = valueIsControlled
    ? (value as (string | number)[])
    : state.selected;

  /**
   * Dispatch With On Change
   * @param {ISelectionActionType} action - action reducers
   * @returns {void}
   */
  function dispatchWithOnChange(action: ISelectionActionType) {
    if (!valueIsControlled) {
      dispatch(action);
    }

    onChange?.(selectionReducer({ ...state, selected: valueState }, action));
  }

  /**
   * Toggle Change Value
   * @param {ISelectionSetterParam} toggle - toggle show / hidden component
   * @returns {void}
   */
  const changeValue = useCallback(
    (payload: ISelectionSetterParam): void => {
      dispatchWithOnChange({
        payload,
        type: ISelectionTypesEnum.setSelection
      });
    },
    [dispatchWithOnChange]
  );

  return useMemo(
    (): ISelectionHooks => ({
      action: {
        changeValue
      },
      state
    }),
    [state]
  );
};

/**
 * Use Selection Context
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export const useSelectionContext = (): ISelectionHooks => {
  const context = useContext(SelectionContext);

  if (context === undefined) {
    throw new Error(`useExpandContext must be used within a <Expand />`);
  }

  return context;
};
