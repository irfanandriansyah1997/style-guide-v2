import { IDefaultText } from '@/interface/general';

/**
 * Base Item Selection Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.04
 */
export interface IBaseItemSelection {
  active?: boolean;
  onChangeSelection?: (value: IDefaultText) => void;
  value: IDefaultText; // must be unique
}

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
