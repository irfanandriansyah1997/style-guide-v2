import { ReactNode } from 'react';

import { ITextType } from '@/component/atomic/text/interface';
import {
  IBaseItemSelection,
  IToggleClassnameList
} from '@/interface/selection';

/**
 * Base Selection Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
interface IBaseProps extends IBaseItemSelection {
  children?: ReactNode;
  labelTag?: ITextType;
}

/**
 * Checkbox Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
export interface ICheckboxProps extends IBaseProps {
  className?: Partial<IToggleClassnameList>;
}

/**
 * Radio Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
export interface IRadioProps extends IBaseProps {
  className?: Partial<IToggleClassnameList>;
}

/**
 * Selection Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
export interface ISelectionProps extends IBaseProps {
  className: IToggleClassnameList;
}
