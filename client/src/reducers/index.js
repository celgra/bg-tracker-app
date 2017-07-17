import { combineReducers } from 'redux';
import ResultsReducer from './reducer_results';

const rootReducer = combineReducers({
    results: ResultsReducer
});

export default rootReducer;
