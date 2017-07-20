import axios from 'axios'; 

export const FETCH_RESULTS = 'FETCH_RESULTS';
export const FETCH_RESULTS_ERROR = 'FETCH_RESULTS_ERROR';
export const ADD_RESULT = 'ADD_RESULT';
export const ADD_RESULT_SUCCESS = 'ADD_RESULT_SUCCESS';

 const ROOT_URL = 'http://localhost:3001/api';

 export function fetchResults() {
     const request = axios.get(`${ROOT_URL}/results`);

     return (dispatch) => {
        request.then((data) => {
            dispatch({ type: FETCH_RESULTS, payload: data });
        });
     };
 }

  export function fetchResultsByMonth(month, year) {
     const request = axios.get(`${ROOT_URL}/results/${month}/${year}`);

     return (dispatch) => {
        request.then((data) => {
            dispatch({ type: FETCH_RESULTS, payload: data });
        }, (err) => {
            dispatch({ type: FETCH_RESULTS_ERROR });
        });
     };
 }

 export function addResult(newResult, e, dispatch) {
     const request = axios.post(`${ROOT_URL}/results/`, newResult);

     return (dispatch) => {
        dispatch({ type: ADD_RESULT });
        request.then((data) => {
            dispatch({ type: ADD_RESULT_SUCCESS, data })
        }, (err) => {
            console.log(err);
        });
     }
 }