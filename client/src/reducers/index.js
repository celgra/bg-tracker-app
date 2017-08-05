import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BGReducer from './reducer_bgData';
import AuthReducer from './reducer_authentication';

const rootReducer = combineReducers({
    bgData: BGReducer,
    auth: AuthReducer,
    form: formReducer
});

export default rootReducer;
