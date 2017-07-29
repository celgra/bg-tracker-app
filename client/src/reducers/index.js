import { combineReducers } from 'redux';
import ResultsReducer from './reducer_results';
import AuthReducer from './reducer_authentication';

const rootReducer = combineReducers({
    results: ResultsReducer,
    auth: AuthReducer
});

export default rootReducer;
