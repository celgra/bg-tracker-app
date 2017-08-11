//@flow
import axios from 'axios'; 

export const CHANGE_AUTH = 'CHANGE_AUTH';
export const AUTH_ERROR = 'AUTH_ERROR';

export function authenticate(isLoggedIn: boolean) {
    return (dispatch: Function) => {
        dispatch({ 
            type: CHANGE_AUTH,
            payload: isLoggedIn
        });
    };
}

export function logIn(email: string, password: string) {
    const request = axios.post('/api/users/login', { email, password });
    return (dispatch: Function) => {
        request.then((response) => {
            let token = response.headers['x-auth'];
            console.log("Token ", token);

            localStorage.setItem('auth', token);

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