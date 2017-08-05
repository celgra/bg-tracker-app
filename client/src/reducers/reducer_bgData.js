import _ from 'lodash';
import moment from 'moment';
import { FETCH_RESULTS, ADD_RESULT_SUCCESS } from './../actions/actions_results';

const date = moment();
const month = date.month();
const year = date.year();
const results = {};

export default function (state = { month, year, results }, action) {
    switch (action.type) {
        case FETCH_RESULTS:
            return {...state, results: _.mapKeys(action.payload.data.results, '_id') };
        case ADD_RESULT_SUCCESS:
            console.log('adding');
            return { ...state, results: { 
                ...results, 
                [action.payload.result._id]: action.payload.result 
                } 
            };
        default:
            return state;
    }
};