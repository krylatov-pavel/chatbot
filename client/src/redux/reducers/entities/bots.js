import { combineReducers } from 'redux';
import * as ActionType from '../../actionTypes';

const addBots = (state = {}, action) => {
    const bots = {
        ...state
    };

    action.payload.forEach(botData => {
        const {id} = botData;

        bots[id] = {
            ...state[id],
            data: botData
        };

        bots[id].exchanges = state[id] ? [...state[id].exchanges] : [];
    });

    return bots;
};

const addExchange = (state = {}, action) => {
    const {botId, exchange, conversationId} = action;
    const bot = state[botId];

    return {
        ...state,
        [botId]: {
            ...bot,
            activeConversationId: conversationId,
            exchanges: bot.exchanges.concat(exchange.id)
        }
    };
};

const addExchanges = (state = {}, action) => {
    const {botId, exchanges, activeConversationId} = action;

    return {
        ...state,
        [botId]: {
            ...state[botId],
            activeConversationId,
            exchanges: exchanges.map(exchange => exchange.id)
        }
    }
};

const byId = (state = {}, action) => {
    switch (action.type) {
        case ActionType.FETCH_BOTS_SUCCESS:
            return addBots(state, action);
        case ActionType.SEND_MESSAGE_SUCCESS:
            return addExchange(state, action);
        case ActionType.FETCH_EXCHANGES_SUCCESS:
            return addExchanges(state, action);
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    switch (action.type) {
        case ActionType.FETCH_BOTS_SUCCESS:
            return [...action.payload.map(bot => bot.id)];
        default:
            return state;
    }
};

export default combineReducers({
    byId,
    allIds
});

export const getList = (state) => state.allIds.map(id => state.byId[id].data);
export const getExchangesIds = (state, botId) => state.byId[botId] ? state.byId[botId].exchanges : [];
export const getActiveConversationId = (state, botId) => state.byId[botId] ? state.byId[botId].activeConversationId : null;
export const getData = (state, botId) => state.byId[botId] ? state.byId[botId].data : null;