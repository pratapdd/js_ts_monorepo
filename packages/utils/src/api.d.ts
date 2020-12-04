/**
 *
 * @param  getData
 * @param  options
 */
export declare function useAsyncDataEffect<T>(getData: () => Promise<T>, options: {
    stateName: string;
    otherStatesToMonitor?: unknown[];
    setter: (arg: T) => void;
}): void;
