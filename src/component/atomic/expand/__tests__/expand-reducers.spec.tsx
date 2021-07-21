import { IExpandActionType, IExpandTypesEnum } from '@/atomic/expand/interface';
import { expandReducer } from '@/atomic/expand/reducers';

import data from './__fixtures__/base-state.fixtures.json';

describe(`Testing Expand Reducers`, () => {
  it(`Testing Set Classname`, () => {
    const result = expandReducer(data, {
      payload: `some-classname`,
      type: IExpandTypesEnum.setClassname
    });

    expect(result).toStrictEqual({
      className: `some-classname`,
      expand: false,
      height: 0
    });
  });

  describe(`Testing Set Classname`, () => {
    it(`Testing With Same Data`, () => {
      const result = expandReducer(data, {
        payload: 0,
        type: IExpandTypesEnum.setHeight
      });

      expect(result).toStrictEqual({
        className: ``,
        expand: false,
        height: 0
      });
    });

    it(`Testing With Different Data`, () => {
      const result = expandReducer(data, {
        payload: 100,
        type: IExpandTypesEnum.setHeight
      });

      expect(result).toStrictEqual({
        className: ``,
        expand: false,
        height: 100
      });
    });
  });

  it(`Testing Toogle Expand`, () => {
    const result = expandReducer(data, {
      type: IExpandTypesEnum.toggleExpand
    });

    expect(result).toStrictEqual({
      className: ``,
      expand: true,
      height: 0
    });
  });

  it(`Testing With Unknown Ty[e]`, () => {
    try {
      expandReducer(data, ({
        payload: 0,
        type: `random text`
      } as unknown) as IExpandActionType);
    } catch (e) {
      expect((e as Error).message).toBe(`Unsupported type: random text`);
    }
  });
});
