import { FETCH_REPORT } from '../actions/actions_report';

const initState = {
    a1c: "",
    resultCount: 0,
    averageBloodGlucose: ""
};

export default function (state = initState, action) { 
    switch(action.type) {
        case FETCH_REPORT:
            return {
                ...state,
                a1c: action.payload.a1c,
                resultCount: action.payload.resultCount,
                averageBloodGlucose: action.payload.averageBloodGlucose
            };
        default:
            return state;
    }
};