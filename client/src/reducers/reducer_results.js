import _ from 'lodash';
import { FETCH_RESULTS } from './../actions/actions_results';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_RESULTS:
            return _.mapKeys(action.payload.data.results, '_id');
        default:
            return state;
    }
}