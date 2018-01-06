import _ from 'lodash';
import moment from 'moment';
import { FETCH_RESULTS, ADD_RESULT_SUCCESS } from '../actions/actions_bgData';

const date = moment();
const month = date.month() + 1;
const year = date.year();
const results = {};

const initState = { month, year, results };

export default function (state = initState, action) {
    switch (action.type) {
        case FETCH_RESULTS:
            return {
                ...state, 
                results: _.mapKeys(action.payload.results, '_id'),
                month: action.payload.month,
                year: action.payload.year
            };
        case ADD_RESULT_SUCCESS:
            console.log('adding');
            return { 
                ...state, 
                results: { 
                    ...state.results, 
                    [action.payload._id]: action.payload 
                } 
            };
        default:
            return state;
    }
};