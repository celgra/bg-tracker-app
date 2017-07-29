import axios from 'axios';

export const CHANGE_AUTH = 'CHANGE_AUTH';

export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}

export function logIn(email, password) {
    const request = axios.post('/api/users/login', { email, password });
    return (dispatch) => {
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
        });
    };
}