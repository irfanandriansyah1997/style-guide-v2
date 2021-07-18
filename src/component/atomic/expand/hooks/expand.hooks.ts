/* eslint-disable react-hooks/exhaustive-deps */
import { verifiedIsNotEmpty } from '@99/helper';
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef
} from 'react';

import ExpandContext from '@/atomic/expand/context';
import { generateClassnameContainer } from '@/atomic/expand/helper/expand.helper';
import {
  IExpandActionType,
  IExpandHooks,
  IExpandProps,
  IExpandReducer,
  IExpandTypesEnum
} from '@/atomic/expand/interface';
import { expandReducer } from '@/atomic/expand/reducers';

/**
 * Use Expand Context
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export const useExpandContext = (): IExpandHooks => {
  const context = useContext(ExpandContext);

  if (context === undefined) {
    throw new Error(`useExpandContext must be used within a <Expand />`);
  }

  return context;
};

/**
 * Toggle React Hooks
 * @param {IExpandProps} props - expand props
 * @returns {IExpandHooks}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.17
 */
export const useToggle = ({
  className,
  initialHeight,
  on,
  openned,
  selectorPosition
}: Partial<IExpandProps>): IExpandHooks => {
  const ref = useRef<HTMLDivElement>();
  const { current: initialState } = useRef<IExpandReducer>({
    className: generateClassnameContainer({
      className,
      openned: openned || false,
      selectorPosition
    }),
    expand: openned as boolean,
    height: initialHeight || 0
  });
  const [state, dispatch] = useReducer(expandReducer, initialState);
  const onIsControlled = openned !== undefined;
  const showState = onIsControlled ? (openned as boolean) : state.expand;

  /**
   * Dispatch With On Change
   * @param {IExpandActionType} action - action reducers
   * @returns {void}
   */
  const dispatchWithOnChange = (action: IExpandActionType): void => {
    if (action.type === IExpandTypesEnum.toggleExpand) {
      if (!onIsControlled) {
        dispatch(action);
      }

      on?.({
        event: `on-toggle`,
        payload: expandReducer({ ...state, expand: showState }, action).expand
      });
    } else {
      dispatch(action);
    }
  };

  /**
   * Toggle Expand Component
   * @param {boolean} toggle - toggle show / hidden component
   * @returns {void}
   */
  const toggleExpand = useCallback((): void => {
    dispatchWithOnChange({
      type: IExpandTypesEnum.toggleExpand
    });
  }, [dispatchWithOnChange]);

  useEffect((): void => {
    const response = generateClassnameContainer({
      className,
      openned: showState,
      selectorPosition
    });

    if (state.className !== response) {
      dispatchWithOnChange({
        payload: response,
        type: IExpandTypesEnum.setClassname
      });
    }
  }, [
    className,
    dispatchWithOnChange,
    selectorPosition,
    showState,
    state.className
  ]);

  useLayoutEffect((): void => {
    const temporaryHeight = initialHeight || 0;

    if (ref.current && verifiedIsNotEmpty(ref.current.scrollHeight)) {
      const { scrollHeight } = ref.current;
      const actualHeight = showState ? scrollHeight : temporaryHeight;

      if (state.height !== actualHeight) {
        dispatchWithOnChange({
          payload: actualHeight,
          type: IExpandTypesEnum.setHeight
        });

        on?.({
          event: `on-resize`,
          payload: actualHeight
        });
      }
    }
  });

  return useMemo(
    () => ({
      action: {
        toggleExpand
      },
      state: {
        ...state,
        ref
      }
    }),
    [state, toggleExpand]
  );
};
