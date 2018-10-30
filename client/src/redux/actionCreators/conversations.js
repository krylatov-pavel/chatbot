import * as ActionType from '../actionTypes';
import {
    sendMessage as sendMessageApi,
    fetchExchanges as fetchExchangesApi
} from '../../api/conversations';

export const sendMessage = (botId, message, conversationId = null) => (dispatch) => {
    dispatch({
        type: ActionType.SEND_MESSAGE_REQUEST
    });

    return sendMessageApi(botId, message, conversationId)
        .then(
        exchange => dispatch({
            type: ActionType.SEND_MESSAGE_SUCCESS,
            botId,
            exchange,
            conversationId: exchange.response.conversation
        }),
        error => dispatch({
            type: ActionType.SEND_MESSAGE_FAILURE,
            payload: error
        }));
};

const getActiveConversationId = (exchanges) => {
    if (exchanges.length) {
        return exchanges[exchanges.length - 1].response.conversation || null;
    }
    return null;
}

export const fetchExchanges = (botId) => (dispatch) => {
    dispatch({
        type: ActionType.FETCH_EXCHANGES_REQUEST
    });

    return fetchExchangesApi(botId)
        .then(
        exchanges => dispatch({
            type: ActionType.FETCH_EXCHANGES_SUCCESS,
            botId,
            exchanges,
            activeConversationId: getActiveConversationId(exchanges)
        }),
        error => dispatch({
            type: ActionType.FETCH_EXCHANGES_FAILURE,
        }));
};