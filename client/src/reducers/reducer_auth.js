import { CHANGE_AUTH, AUTH_ERROR } from './../actions/actions_auth';


export default function (state = { auth: false, error: null }, action) {
    switch(action.type) {
        case CHANGE_AUTH:
            return changeAuth(state, action);
        case AUTH_ERROR:
            return { ...state, error: {} };
        default:
            return state;
    }
};

const changeAuth = (state, action) => {
    return { 
        ...state, auth: action.payload, error: null
    }; 
};