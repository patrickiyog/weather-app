// REFERENCE: https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript

type ErrorWithMessage = {
    message: string;
};

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as Record<string, unknown>['message']) === 'string' // A Record<K, T> is an object type whose property keys are K and whose property values are T. 
    );
};

const toErrorWithMessage = (possibleError: unknown): ErrorWithMessage => {
    if (isErrorWithMessage(possibleError)) {
        return possibleError;
    };
    try {
        return new Error(JSON.stringify(possibleError));
    } catch {
        // Fall back in case there are errors in stringify possible error
        return new Error(String(possibleError));
    };
};

const getErrorMessage = (error: unknown) => {
    return toErrorWithMessage(error).message;
};

export default getErrorMessage;