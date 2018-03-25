import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BGReducer from './reducer_bgData';
import AuthReducer from './reducer_auth';
import ReportReducer  from './reducer_report';

const rootReducer = combineReducers({
    bgData: BGReducer,
    auth: AuthReducer,
    report: ReportReducer,
    form: formReducer
});

export default rootReducer;
