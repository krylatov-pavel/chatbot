import { botApi, localApi, applicationID } from '../config';
import { handleResponse, handleResponseError } from './utils';

const requestBot = (botId, conversationId, message) => {
    const date = new Date().toISOString();
    const body = {
        application: applicationID,
        instance: botId,
        message: message.text
    };

    if (conversationId) {
        body.conversation = conversationId
    };

    return fetch(`${botApi}rest/json/chat`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(handleResponse, handleResponseError)
        .then(response => ({
            response,
            request: {
                ...message,
                date
            }
        }));
};

const saveExchange = (botId, conversationId, request, response) => {
    const body = {
        botId,
        conversationId: conversationId || response.conversation,
        request,
        response: {
            ...response,
            date: new Date().toISOString()
        }
    };

    return fetch(`${localApi}exchanges`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(handleResponse, handleResponseError);
}

export const sendMessage = (botId, message, conversationId = null) => {
    return requestBot(botId, conversationId, message)
        .then(({request, response}) => saveExchange(botId, conversationId, request, response));
};

export const fetchExchanges = (botId) => {
    const url = `${localApi}bots\\${botId}\\exchanges?_sort=request.date&_order=asc`;
    return fetch(url).then(handleResponse, handleResponseError);
}