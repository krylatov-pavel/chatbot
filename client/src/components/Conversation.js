import React from 'react';

const Conversation = ({exchanges}) => {
    const exchangesData = exchanges.map(exchange => <li key={exchange.id}>
    <p>Me: {exchange.request.text}</p>
    <p>Bot: {exchange.response.message}</p>
    </li>);


    return(<ul>{exchangesData}</ul>);
}

export default Conversation;