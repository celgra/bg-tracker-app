//@flow
import { CHANGE_AUTH, AUTH_ERROR } from './../actions/actions_authentication';

type AuthState = { auth: boolean, error: null | {} };
type AuthAction = { type: String, payload: boolean };

export default function (state: AuthState = { auth: false, error: null }, action: AuthAction): AuthState {
    switch(action.type) {
        case CHANGE_AUTH:
            return changeAuth(state, action);
        case AUTH_ERROR:
            return { ...state, error: {} };
        default:
            return state;
    }
};

const changeAuth = (state: AuthState, action: AuthAction): AuthState => {
    return action.payload ? { 
        ...state, auth: action.payload, error: null 
    } : { 
        ...state, auth:action.payload, error: {} 
    }; 
};