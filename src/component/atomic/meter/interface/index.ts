/**
 * All Class Name Each Tag on Meter Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.13
 */
export interface IMeterClassnameList {
  content: string;
  wrapper: string;
}

/**
 * Meter Component Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.19
 */
export interface IMeterProps extends Partial<IMeterStyling> {
  className?: Partial<IMeterClassnameList>;
  value: number;
}

export type IMeterShape = number | 'rounded' | 'square';

/**
 * Meter Custom Styling
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.19
 */
export interface IMeterStyling {
  bgColor: string;
  borderRadius: IMeterShape;
  color: string;
  height: number;
}
