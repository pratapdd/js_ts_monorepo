/**
 * @public
 */
export declare type ResolveHandler<T> = (value: T | PromiseLike<T>) => void;
/**
 * @public
 */
export declare type RejectHandler = (reason: unknown) => void;
/**
 * An "inverted" promise, that can be resolved
 * from the outside
 *
 * @public
 */
declare class Deferred<T> {
    #private;
    constructor();
    get promise(): Promise<T>;
    get resolve(): ResolveHandler<T>;
    get reject(): RejectHandler;
}
export default Deferred;
