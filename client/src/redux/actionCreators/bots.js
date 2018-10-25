import * as ActionType from '../actionTypes';
import { getAll } from '../../api/bots';

export const fetchBots = () => (dispatch) => {
    dispatch({
        type: ActionType.FETCH_BOTS_REQUEST
    });

    return getAll().then(
        bots => dispatch({
            type: ActionType.FETCH_BOTS_SUCCESS,
            payload: bots
        }),
        error => dispatch({
            type: ActionType.FETCH_BOTS_FAILURE,
            payload: error.message
        })
    );
}