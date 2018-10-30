import { combineReducers } from 'redux';

const createApiInteraction = (requestActionType, successActionType, failureActionType) => {
    const isFetching = (state = false, action) => {
        switch (action.type) {
            case (requestActionType):
                return true;
            case (successActionType):
            case (failureActionType):
                return false;
            default:
                return state;
        }
    };

    const errorMessage = (state = null, action) => {
        switch (action.type) {
            case (failureActionType):
                return action.payload;
            case (requestActionType):
            case (successActionType):
                return null;
            default:
                return state;
        }
    };

    return combineReducers({
        isFetching,
        errorMessage
    });
};

export default createApiInteraction;

export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;