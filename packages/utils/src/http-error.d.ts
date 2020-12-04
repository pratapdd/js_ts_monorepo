/**
 * High-level outcome of an HTTP status code
 * @public
 */
export declare enum HTTPErrorKind {
    Information = 100,
    Success = 200,
    Redirect = 300,
    Client = 400,
    Server = 500
}
/**
 * An error that's associated with a HTTP response status code
 * @public
 */
export default class HTTPError extends Error {
    kind: HTTPErrorKind;
    constructor(info: {
        statusText: string;
        status: number;
    }, message: string);
}
