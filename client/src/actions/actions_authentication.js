//@flow
import axios from 'axios';

import type { ThunkAction } from './action_flowtypes';

export const CHANGE_AUTH = 'CHANGE_AUTH';
export const AUTH_ERROR = 'AUTH_ERROR';

export function authenticate(isLoggedIn: boolean): ThunkAction {
    return (dispatch) => {
        dispatch({
            type: CHANGE_AUTH,
            payload: isLoggedIn
        });
    };
}

function extractAndSetToken(response:{ headers: { 'x-auth': string} }) {
    let token: string = response.headers['x-auth'];

    localStorage.setItem('auth', token);
}

export function logIn(email: string, password: string): ThunkAction {
    const request = axios.post('/api/users/login', { email, password });

    return (dispatch) => {
        request.then((response) => {
            extractAndSetToken(response);

            dispatch({
                type: CHANGE_AUTH,
                payload: true
            });
        }, (err) => {
            console.log(err);
            dispatch({
                type: AUTH_ERROR
             });
        });
    };
}

export function signUp(email: string, password: string): ThunkAction {
    const request = axios.post('api/users', { email, password });

    return (dispatch: Dispatch) => {
        request.then((response) => {
            extractAndSetToken(response);

            dispatch({
                type: CHANGE_AUTH,
                payload: true
            });
        }, (err) => {
            dispatch({
                type: AUTH_ERROR
            });
        });
    }
}
