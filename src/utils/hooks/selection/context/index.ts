import { createContext } from 'react';

import { NullAble } from '@/interface/general';
import { ISelectionHooks } from '@/utils/hooks/selection/interface';

/**
 * Selection Context
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
const SelectionContext = createContext<NullAble<ISelectionHooks>>(undefined);

export default SelectionContext;
