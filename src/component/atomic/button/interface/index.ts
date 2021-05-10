/**
 * Button Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.09
 */
export interface IButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large';
}
