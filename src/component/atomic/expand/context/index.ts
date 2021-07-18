import { createContext } from 'react';

import { NullAble } from '@/interface/general';

import { IExpandHooks } from '../interface';

/**
 * Expand Context
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
const ExpandContext = createContext<NullAble<IExpandHooks>>(undefined);

export default ExpandContext;
