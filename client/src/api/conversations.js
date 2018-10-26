import { botApi, localApi, applicationID } from '../config';
import { handleResponse, handleResponseError } from './utils';

export const sendMessage = (botId, message, conversationId = null) => {
    return requestBot(botId, conversationId, message)
        .then(exchange => createConversationIfNotExist(!!conversationId, botId, exchange))
        .then(({request, response}) => saveExchange(conversationId, request, response));
};

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

const saveExchange = (conversationId, request, response) => {
    const body = {
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

const createConversationIfNotExist = (isExist, botId, exchange) => {
    if (isExist) {
        return Promise.resolve(exchange);
    } else {
        const body = {
            botId: botId,
            id: exchange.response.conversation,
            date: new Date().toISOString()
        }

        return fetch(`${localApi}conversations`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(handleResponse, handleResponseError)
            .then(() => exchange);
    }
};