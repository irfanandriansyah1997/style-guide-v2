/**
 * Null Able
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export type NullAble<T> = T | undefined;

/**
 * Partial Null Able
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.17
 */
export type PartialNull<T> = NullAble<Partial<T>>;
