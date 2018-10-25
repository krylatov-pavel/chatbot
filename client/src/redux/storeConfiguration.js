import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bots, * as botsState from './reducers/bots'

export const configureStore = () => {
    const middleware = [thunk, logger];

    return createStore(
        combineReducers({
            bots
        }),
        applyMiddleware(...middleware)
    );
};

export const storeState = {
    bots: {
        getList: state => botsState.getList(state.bots),
        getIsFetching: state => botsState.getIsFetching(state.bots),
        getErrorMessage: state => botsState.getErrorMessage(state.bots)
    }
};