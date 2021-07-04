import { objToString } from '@99/helper';
import { FC } from 'react';

import styles from '@/molecules/range/style/style.module.scss';

import HandleRange from './handle.component';

/**
 * Basic Range Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.04
 */
const BasicRange: FC = () => (
  <div
    className={objToString({
      [styles[`m-basic-range`]]: true,
      relative: true
    })}
  >
    <div
      className={objToString({
        [styles[`m-basic-range__rails`]]: true,
        absolute: true
      })}
    />
    <HandleRange max={10} min={0} value={5} position={50} />
  </div>
);

export default BasicRange;
