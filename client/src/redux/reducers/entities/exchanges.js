import * as ActionType from '../../actionTypes';

const addExchange = (state, action) => {
    return {
        ...state,
        [action.exchange.id]: action.exchange
    };
};

const addExchanges = (state, action) => {
    const exchanges = {};

    action.exchanges.forEach(exchange => {
        exchanges[exchange.id] = exchange;
    });

    return {
        ...state,
        ...exchanges
    };
};

const exchanges = (state = {}, action) => {
    switch (action.type) {
        case ActionType.SEND_MESSAGE_SUCCESS:
            return addExchange(state, action);
        case ActionType.FETCH_EXCHANGES_SUCCESS:
            return addExchanges(state, action);
        default:
        return state;
    }
};

export default exchanges;

export const getExchange = (state, id) => state[id];