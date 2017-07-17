import axios from 'axios'; 

export const FETCH_RESULTS = 'FETCH_RESULTS';
export const FETCH_RESULTS_ERROR = 'FETCH_RESULTS_ERROR';

 const ROOT_URL = 'http://localhost:3001/api';

 export function fetchResults() {
     const request = axios.get(`${ROOT_URL}/results`);

     return (dispatch) => {
        request.then((data) => {
            dispatch({type: FETCH_RESULTS, payload: data});
        });
     };
 }

  export function fetchResultsByMonth(month, year) {
     const request = axios.get(`${ROOT_URL}/results/${month}/${year}`);

     return (dispatch) => {
        request.then((data) => {
            dispatch({ type: FETCH_RESULTS, payload: data });
        }, (err) => {
            dispatch({ type: 'FETCH_RESULTS_ERROR' });
        });
     };
 }