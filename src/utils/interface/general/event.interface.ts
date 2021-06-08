/**
 * Event Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.08
 */
export interface IEventComponent<E = string, P = Record<string, any>> {
  event: E;
  payload: P;
}
