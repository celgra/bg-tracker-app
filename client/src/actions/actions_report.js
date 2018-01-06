import axios from 'axios';

export const FETCH_REPORT = 'FETCH_REPORT';

export function getReport() {
    const request = axios.get('/api/a1c', { 
        headers: { 
            'x-auth': localStorage.getItem('auth') 
        } 
    });

    return (dispatch) => {
        request.then((res) => {
            const {
                data: {
                    a1c, 
                    resultCount, 
                    averageBloodGlucose 
                } 
            } = res;

            dispatch({ 
                type: FETCH_REPORT,
                payload: {
                    a1c,
                    resultCount,
                    averageBloodGlucose
                }
             });
        });
    };
}