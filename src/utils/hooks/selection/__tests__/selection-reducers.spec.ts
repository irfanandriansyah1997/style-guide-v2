import { selectionReducer } from '@/utils/hooks/selection/reducers';

import { ISelectionReducers, ISelectionTypesEnum } from '../interface';
import MultipleState from './__fixtures__/base-multiple-selection-state.fixtures.json';
import SingleState from './__fixtures__/base-single-selection-state.fixtures.json';

describe(`Testing Expand Reducers`, () => {
  describe(`Testing Single Selection`, () => {
    it(`Testing Set Selection Type`, () => {
      const result = selectionReducer(SingleState as ISelectionReducers, {
        payload: `multiple`,
        type: ISelectionTypesEnum.setSelectionType
      });

      expect(result).toStrictEqual({
        selected: [],
        type: `multiple`
      });
    });

    it(`Testing Set Register & Remove`, () => {
      let result = selectionReducer(SingleState as ISelectionReducers, {
        payload: {
          event: `register`,
          value: 1
        },
        type: ISelectionTypesEnum.setSelection
      });

      expect(result).toStrictEqual({
        selected: [1],
        type: `single`
      });

      result = selectionReducer(result, {
        payload: {
          event: `remove`,
          value: 1
        },
        type: ISelectionTypesEnum.setSelection
      });

      expect(result).toStrictEqual({
        selected: [],
        type: `single`
      });
    });
  });

  describe(`Testing Multiple Selection`, () => {
    it(`Testing Set Selection Type`, () => {
      const result = selectionReducer(MultipleState as ISelectionReducers, {
        payload: `single`,
        type: ISelectionTypesEnum.setSelectionType
      });

      expect(result).toStrictEqual({
        selected: [],
        type: `single`
      });
    });

    it(`Testing Set Register & Remove`, () => {
      let result = selectionReducer(MultipleState as ISelectionReducers, {
        payload: {
          event: `register`,
          value: 1
        },
        type: ISelectionTypesEnum.setSelection
      });

      expect(result).toStrictEqual({
        selected: [1],
        type: `multiple`
      });

      result = selectionReducer(result, {
        payload: {
          event: `register`,
          value: 2
        },
        type: ISelectionTypesEnum.setSelection
      });

      expect(result).toStrictEqual({
        selected: [1, 2],
        type: `multiple`
      });

      result = selectionReducer(result, {
        payload: {
          event: `remove`,
          value: 1
        },
        type: ISelectionTypesEnum.setSelection
      });

      expect(result).toStrictEqual({
        selected: [2],
        type: `multiple`
      });

      result = selectionReducer(result, {
        payload: {
          event: `remove`,
          value: 2
        },
        type: ISelectionTypesEnum.setSelection
      });

      expect(result).toStrictEqual({
        selected: [],
        type: `multiple`
      });
    });

    it(`Testing Set Duplicate Register`, () => {
      let result = selectionReducer(MultipleState as ISelectionReducers, {
        payload: {
          event: `register`,
          value: 1
        },
        type: ISelectionTypesEnum.setSelection
      });

      expect(result).toStrictEqual({
        selected: [1],
        type: `multiple`
      });

      result = selectionReducer(result, {
        payload: {
          event: `register`,
          value: 1
        },
        type: ISelectionTypesEnum.setSelection
      });

      expect(result).toStrictEqual({
        selected: [1],
        type: `multiple`
      });
    });
  });
});
