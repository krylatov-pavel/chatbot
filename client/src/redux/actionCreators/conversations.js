import * as ActionType from '../actionTypes';
import { sendMessage as sendMessageApi} from '../../api/conversations';

export const sendMessage = (botId, message, conversationId = null) => (dispatch) => {
    dispatch({
        type: ActionType.SEND_MESSAGE_REQUEST
    });

    return sendMessageApi(botId, message, conversationId)
        .then(
        exchange => dispatch({
            type: ActionType.SEND_MESSAGE_SUCCESS,
            payload: exchange
        }),
        error => dispatch({
            type: ActionType.SEND_MESSAGE_FAILURE,
            payload: error
        }));
};