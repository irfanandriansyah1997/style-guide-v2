import {
  IExpandActionType as Action,
  IExpandReducer as Reducer,
  IExpandTypesEnum as Types
} from '@/atomic/expand/interface';
import { GenReducer } from '@/interface/general';

/**
 * Expand Reducer
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export const expandReducer: GenReducer<Reducer, Action> = (
  state,
  { payload, type }
) => {
  switch (type) {
    case Types.setClassname:
      return {
        ...state,
        className: payload as string
      };

    case Types.setHeight: {
      if (state.height !== payload) {
        return {
          ...state,
          height: payload as number
        };
      }

      return { ...state };
    }

    case Types.toggleExpand:
      return {
        ...state,
        expand: !state.expand
      };

    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
};
