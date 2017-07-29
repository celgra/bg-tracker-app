import axios from 'axios';

export const CHANGE_AUTH = 'CHANGE_AUTH';

export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}