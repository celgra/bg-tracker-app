export const CHANGE_AUTH = 'CHANGE_AUTH';

export function autheticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}