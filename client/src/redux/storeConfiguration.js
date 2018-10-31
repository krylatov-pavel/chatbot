import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bots, * as botsState from './reducers/entities/bots';
import exchanges, * as exchangesState from './reducers/entities/exchanges';
import createApiInteraction, * as apiInterationState from './reducers/ui/createApiInteractions';
import * as ActionType from './actionTypes';

export const configureStore = () => {
    const middleware = [thunk, logger];

    return createStore(
        combineReducers({
            bots,
            exchanges,
            ui: combineReducers({
                bots: createApiInteraction(ActionType.FETCH_BOTS_REQUEST,
                    ActionType.FETCH_BOTS_SUCCESS,
                    ActionType.FETCH_BOTS_FAILURE),
                exchanges: createApiInteraction(ActionType.FETCH_EXCHANGES_REQUEST,
                    ActionType.FETCH_EXCHANGES_SUCCESS,
                    ActionType.FETCH_EXCHANGES_FAILURE),
                message: createApiInteraction(ActionType.SEND_MESSAGE_REQUEST,
                    ActionType.SEND_MESSAGE_SUCCESS,
                    ActionType.SEND_MESSAGE_FAILURE)
            })
        }),
        applyMiddleware(...middleware)
    );
};

export const storeState = {
    bots: {
        getList: state => botsState.getList(state.bots),
        getConversationId: (state, botId) => botsState.getActiveConversationId(state.bots, botId),
        getData: (state, botId) => botsState.getData(state.bots, botId)
    },
    exchanges: {
        getAll: (state, botId) => botsState.getExchangesIds(state.bots, botId)
            .map(id => exchangesState.getExchange(state.exchanges, id)),
    },
    ui: {
        bots: {
            getIsFetching: state => apiInterationState.getIsFetching(state.ui.bots),
            getErrorMessage: state => apiInterationState.getErrorMessage(state.ui.bots)
        },
        exchanges: {
            getIsFetching: state => apiInterationState.getIsFetching(state.ui.exchanges),
            getErrorMessage: state => apiInterationState.getErrorMessage(state.ui.exchanges)
        },
        message: {
            getIsSending: state => apiInterationState.getIsFetching(state.ui.message),
            getErrorMessage: state => apiInterationState.getErrorMessage(state.ui.message)
        }
    }
};