import { CHANGE_AUTH } from './../actions/actions_authentication';

export default function (state = false, action) {
    switch(action.type) {
        case CHANGE_AUTH:
            return action.payload;
        default:
            return state;
    }
};