import { combineReducers } from 'redux';
import * as ActionType from '../../actionTypes';

const isFetching = (state = false, action) => {
    switch (action.type) {
        case (ActionType.FETCH_BOTS_REQUEST):
            return true;
        case (ActionType.FETCH_BOTS_SUCCESS):
        case (ActionType.FETCH_BOTS_FAILURE):
            return false;
        default:
            return state;
    }
};

const errorMessage = (state = null, action) => {
    switch (action.type) {
        case (ActionType.FETCH_BOTS_FAILURE):
            return action.payload;
        case (ActionType.FETCH_BOTS_REQUEST):
        case (ActionType.FETCH_BOTS_SUCCESS):
            return null;
        default:
            return state;
    }
};

export const botsList = combineReducers({
    isFetching,
    errorMessage
});

export default botsList;

export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;