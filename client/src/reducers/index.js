import { combineReducers } from 'redux';
import ResultsReducer from './reducer_results';
import AuthReducer from './reducer_authenticate';
const rootReducer = combineReducers({
    results: ResultsReducer,
    auth: AuthReducer
});

export default rootReducer;
