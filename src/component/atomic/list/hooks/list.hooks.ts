import { useCallback, useEffect, useReducer, useRef } from 'react';

import {
  generateClassnameContainer,
  generateStyleItem
} from '@/atomic/list/helper/list.helper';
import { IListHooks, IListStyle } from '@/atomic/list/interface';
import { shallowEquals } from '@/helper/component.helper';

type IListReducer =
  | {
      type: 'set-css';
      value: Pick<IListHooks, 'styleItem'>;
    }
  | {
      type: 'set-class';
      value: Pick<IListHooks, 'classnameContainer'>;
    }
  | {
      type: 'set-all';
      value: IListHooks;
    };

/**
 * Toggle Reducer
 * @param {IListHooks} state - initial state reducers
 * @param {} param1
 */
function toggleReducer(
  state: IListHooks,
  { type, value }: IListReducer
): IListHooks {
  switch (type) {
    case `set-css`:
    case `set-class`:
    case `set-all`:
      return { ...state, ...value };

    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
}

/**
 * Use List Content
 * @description generate label on pagination component
 * @param {Partial<IListStyle>} style - style props
 * @returns {IReactPaginationContent}
 */
export function useList(style: Partial<IListStyle>): IListHooks {
  const { current: initialState } = useRef<IListHooks>({
    classnameContainer: generateClassnameContainer(style),
    styleItem: generateStyleItem(style)
  });
  const [state, dispatch] = useReducer(toggleReducer, initialState);
  const content = state;

  const onChangeContent = useCallback(
    ({ classnameContainer, styleItem }: IListHooks) => {
      if (
        !shallowEquals(content.styleItem, styleItem) &&
        !shallowEquals(content.classnameContainer, classnameContainer)
      ) {
        dispatch({
          type: `set-all`,
          value: {
            classnameContainer,
            styleItem
          }
        });
      }

      if (!shallowEquals(content.styleItem, styleItem)) {
        dispatch({
          type: `set-css`,
          value: {
            styleItem
          }
        });
      }

      if (!shallowEquals(content.classnameContainer, classnameContainer)) {
        dispatch({
          type: `set-class`,
          value: {
            classnameContainer
          }
        });
      }
    },
    [content]
  );

  useEffect(() => {
    onChangeContent({
      classnameContainer: generateClassnameContainer(style),
      styleItem: generateStyleItem(style)
    });
  }, [style, onChangeContent]);

  return content;
}
