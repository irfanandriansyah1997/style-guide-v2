import { IDefaultText } from '@/interface/general';
import { IEventComponent } from '@/interface/general/event.interface';

/**
 * Base Item Selection Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
export interface IBaseItemSelection {
  active?: boolean;
  on?: (param: IEventOnChangeSelection) => void;
  value: IDefaultText; // must be unique
}

/**
 * Event On Change Selection
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export type IEventOnChangeSelection = IEventComponent<
  'on-change-selection',
  {
    show: boolean;
    value: IDefaultText;
  }
>;

/**
 * All Class Name Each Tag on Radio / Checkbox Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
export interface IToggleClassnameList {
  label: string;
  selector: string;
  wrapper: string;
}
