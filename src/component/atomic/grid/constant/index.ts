import { Property } from 'csstype';

import { IGridSize } from '@/atomic/grid/interface';

export const DEFAULT_GRID_ALIGN_ITEM: Property.AlignItems[] = [
  `-moz-initial`,
  `baseline`,
  `center`,
  `end`,
  `flex-end`,
  `flex-start`,
  `inherit`,
  `initial`,
  `normal`,
  `revert`,
  `self-end`,
  `self-start`,
  `start`,
  `stretch`,
  `unset`
];

export const DEFAULT_GRID_JUSTIFY_CONTENT: Property.JustifyContent[] = [
  `-moz-initial`,
  `center`,
  `end`,
  `flex-end`,
  `flex-start`,
  `inherit`,
  `initial`,
  `left`,
  `normal`,
  `revert`,
  `right`,
  `space-around`,
  `space-between`,
  `space-evenly`,
  `start`,
  `stretch`,
  `unset`
];

export const DEFAULT_GRID_SIZE: IGridSize[] = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  `auto`
];
