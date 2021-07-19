import { GenReducer } from '@/interface/general';
import {
  ISelectionActionType as Action,
  ISelectionReducers as Reducer,
  ISelectionSetterParam,
  ISelectionType,
  ISelectionTypesEnum
} from '@/utils/hooks/selection/interface';

/**
 * Selection Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.19
 */
export const selectionReducer: GenReducer<Reducer, Action> = (
  state,
  { payload, type }
) => {
  switch (type) {
    case ISelectionTypesEnum.setSelection: {
      const { selected, type } = state;
      const { event, value } = payload as ISelectionSetterParam;

      if (type === `single`) {
        return {
          ...state,
          selected: event === `register` ? [value] : []
        };
      }

      let response: (string | number)[] = [...selected];

      if (event === `register` && !selected.includes(value)) {
        response = [...selected, value];
      } else if (event === `remove` && selected.includes(value)) {
        response = selected.filter((selectedItem) => selectedItem !== value);
      }

      return {
        ...state,
        selected: response
      };
    }

    case ISelectionTypesEnum.setSelectionType:
      return {
        ...state,
        type: payload as ISelectionType
      };

    default:
      return state;
  }
};
