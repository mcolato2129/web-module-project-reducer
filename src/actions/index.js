export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    return ({ type: APPLY_NUMBER, payload: number });
}

export const operationChanger = (operation) => {
    return ({ type: CHANGE_OPERATION, payload: operation })
} /* created this action. hooks up to the reducer in reducer file and has the case of CHANGE_OPERATION which makes this run in the reducer function. THE TYPES NEED TO MATCH IN REDUCER SO IT KNOWS WHAT CASE WE WANT */

export const displayClearer = () => {
    return ({ type: CLEAR_DISPLAY })
}