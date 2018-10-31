import React from 'react';
import MessageDate from './MessageDate';

const Conversation = ({exchanges, botName}) => {
    const exchangesData = exchanges.map(exchange =>
        <li key={exchange.id} className="exchange">
            <div className="from">
                <span className="message-metadata">
                    <MessageDate dateString={exchange.request.date} />
                </span>
                <div className="message">
                    {exchange.request.text}
                </div>
            </div>
            <div className="to">
                <span className="message-metadata">
                    <b>{botName}:</b> <MessageDate dateString={exchange.response.date} />
                </span>
                <div className="message">{exchange.response.message}</div>
            </div>
        </li>);


    return (<ul className="list-group">{exchangesData}</ul>);
}

export default Conversation;