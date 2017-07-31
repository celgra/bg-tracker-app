import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ResultsReducer from './reducer_results';
import AuthReducer from './reducer_authentication';

const rootReducer = combineReducers({
    results: ResultsReducer,
    auth: AuthReducer,
    form: formReducer
});

export default rootReducer;
