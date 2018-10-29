import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bots, * as botsState from './reducers/entities/bots';
import exchanges, * as exchangesState from './reducers/entities/exchanges';
import botsUI, * as botsUIState from './reducers/ui/botsList';

export const configureStore = () => {
    const middleware = [thunk, logger];

    return createStore(
        combineReducers({
            bots,
            exchanges,
            ui: combineReducers({
                botsUI
            })
        }),
        applyMiddleware(...middleware)
    );
};

export const storeState = {
    bots: {
        getList: state => botsState.getList(state.bots)
    },
    exchanges: {
        getAll: (state, botId) => botsState.getExchangesIds(state.bots, botId)
            .map(id => exchangesState.getExchange(state.exchanges, id))
    },
    ui: {
        bots: {
            getIsFetching: state => botsUIState.getIsFetching(state.ui.botsUI),
            getErrorMessage: state => botsUIState.getErrorMessage(state.ui.botsUI)
        }
    }
};