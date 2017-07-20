import _ from 'lodash';
import { FETCH_RESULTS, ADD_RESULT, ADD_RESULT_SUCCESS } from './../actions/actions_results';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_RESULTS:
            return _.mapKeys(action.payload.data.results, '_id');
        case ADD_RESULT_SUCCESS:
            console.log('adding');
            return { ...state, [action.payload.data._id]: action.payload.data };
        default:
            return state;
    }
}