import { combineReducers } from 'redux';
import * as ActionType from '../actionTypes';

const list = (state = [], action) => {
    switch (action.type) {
        case ActionType.FETCH_BOTS_SUCCESS:
            return [...action.payload];
        default:
            return state;
    }
};

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

const bots = combineReducers({
    list,
    isFetching,
    errorMessage
});

export default bots;

export const getList = (state) => state.list;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;