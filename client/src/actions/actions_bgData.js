import axios from 'axios';
import moment from 'moment';

export const FETCH_RESULTS = "FETCH_RESULTS";
export const FETCH_RESULTS_ERROR = "FETCH_RESULTS_ERROR";
export const ADD_RESULT = "ADD_RESULT";
export const ADD_RESULT_SUCCESS = "ADD_RESULT_SUCCESS";

const ROOT_URL = '/api';

export function fetchResultsByMonth(month, year) {
    const request = axios.get(
        `${ROOT_URL}/results/${month}/${year}`,
        { headers: { 'x-auth': localStorage.getItem('auth') } }
    );
    return (dispatch) => {
        request.then((res) => {
            const { data: { results } }  = res;

            dispatch({ type: FETCH_RESULTS, payload: { month, year, results } }); 
        }, (err) => {
            dispatch({ type: FETCH_RESULTS_ERROR });
        });
    };
}

export function addResult(values, e) {
    const newResult = {
        bloodGlucoseLevel: values.glucose
    };

    const request = axios.post(`${ROOT_URL}/results/`, newResult, { headers: { 'x-auth': localStorage.getItem('auth') } });

    return (dispatch) => {
        dispatch({ type: ADD_RESULT });
        request.then((res) => {
            const { data: { result } } = res;
            if (moment(result.resultDate).month() === moment().month()) {
                dispatch({ type: ADD_RESULT_SUCCESS, payload: result })
            }
        }, (err) => {
            console.log(err);
        });
    }
}