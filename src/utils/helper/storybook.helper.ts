/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable require-jsdoc-except/require-jsdoc */
import { action } from '@storybook/addon-actions';

/**
 * Partial event logging, as full logging can be expensive/slow
 * @param {string} actionName - action name
 * @return {() => void}
 * */
export const partialAction = (actionName: string): any => {
  const beacon = action(actionName);

  return (eventObj: any, ...args: any[]) => {
    beacon({ ...eventObj, view: undefined }, ...args);
  };
};
