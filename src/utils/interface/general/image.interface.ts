/**
 * Image Responsive Preset Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description the main purpose this interface for grouping src and srcset as one of the requirement implement image responsive
 * @since 2021.06.06
 */
export interface IImageResponsive {
  src: string; // main image, we collect smallest size image from list srcset preset
  srcSet: string; // list image preset
}
