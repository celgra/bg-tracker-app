//@flow
export type Result = { 
    bloodGlucoseLevel: number,
    resultDate: Date,
    resultContext: string,
    editedDate: Date,
    user: string
};

type ResultsPayload = {
    month: number,
    year: number,
    results: Array<Result>
};

//authentication
export type ChangeAuthAction = { type: "CHANGE_AUTH", payload: boolean };
export type AuthErrorAction = { type: "AUTH_ERROR" };

//bgData
export type FetchResultsAction = { type: "FETCH_RESULTS", payload: { month: number, year: number, results: any } };
export type FetchResultsErrorAction = { type: "FETCH_RESULTS_ERROR" };
export type AddResult = { type: "ADD_RESULT" };
export type AddResultSuccess = { type: "ADD_RESULT_SUCCESS", payload: Result }

export type Action = ChangeAuthAction |
    AuthErrorAction |
    FetchResultsAction |
    FetchResultsErrorAction |
    AddResult |
    AddResultSuccess;

export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch) => any;
export type Dispatch = (action: Action) => any;
