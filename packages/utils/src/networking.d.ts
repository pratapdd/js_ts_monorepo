/**
 * Make a same-origin GET request to the API
 *
 * @param path - API path
 * @param init - fetch options
 * @public
 */
export declare function apiCall(path: string, init?: RequestInit): Promise<unknown>;
