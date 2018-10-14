import axios from 'axios';

export const CHANGE_AUTH = 'CHANGE_AUTH';
export const AUTH_ERROR = 'AUTH_ERROR';

export function authenticate(isLoggedIn: boolean) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_AUTH,
            payload: isLoggedIn
        });
    };
}

function extractAndSetToken(response) {
    let token = response.headers['x-auth'];

    localStorage.setItem('auth', token);
}

export function logIn(email, password) {
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

export function signUp(email, password) {
    const request = axios.post('api/users', { email, password });

    return (dispatch) => {
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
