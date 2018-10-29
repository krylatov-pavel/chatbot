import * as ActionType from '../../actionTypes';

const addExchange = (state, action) => {
    return {
        ...state,
        [action.exchange.id] : action.exchange
    };
}

const exchanges = (state = {}, action) => {
    switch (action.type) {
        case ActionType.SEND_MESSAGE_SUCCESS:
            return addExchange(state, action);
        default:
        return state;
    }
};

export default exchanges;

export const getExchange = (state, id) => state[id];