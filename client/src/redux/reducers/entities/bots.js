import * as ActionType from '../../actionTypes';

const bot = data => ({
    data,
    exchanges: []
});

const addBots = (state = {}, action) => {
    const bots = {
        ...state
    };

    action.payload.forEach(botData => {
        bots[botData.id] = bot(botData);
    });

    return bots;
}

const addExchange = (state = {}, action) => {
    const {botId, exchange} = action;
    const bot = state[botId];

    return {
        ...state,
        [botId]: {
            ...bot,
            exchanges: bot.exchanges.concat(exchange.id)
        }
    };
}

const bots = (state = {}, action) => {
    switch (action.type) {
        case ActionType.FETCH_BOTS_SUCCESS:
            return addBots(state, action);
        case ActionType.SEND_MESSAGE_SUCCESS:
            return addExchange(state, action);
        default:
            return state;
    }
}

export default bots;

export const getList = (state) => Object.keys(state).map(key => state[key].data);
export const getExchangesIds = (state, botId) => state[botId] ? state[botId].exchanges : [];