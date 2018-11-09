import React, { Component } from 'react';
import MessageDate from './MessageDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getEmoteIcon } from './utils/emotionTypes';

class Conversation extends Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidUpdate(prevProps) {
        this.scrollToBottom();
    }

    render() {
        const { exchanges, botName } = this.props;

        const exchangesData = exchanges.map(exchange =>
            <li key={exchange.id} className="exchange">
                <div className="from">
                    <span className="message-metadata">
                        <MessageDate dateString={exchange.request.date} />
                    </span>
                    <div className="message">
                        <span>{exchange.request.text} </span>
                        {
                            exchange.request.emote && exchange.request.emote != 'NONE'
                                ? <FontAwesomeIcon icon={['far', getEmoteIcon(exchange.request.emote)]} className="darkorange" />
                                : null
                        }
                    </div>
                </div>
                <div className="to">
                    <span className="message-metadata">
                        <b>{botName}:</b> <MessageDate dateString={exchange.response.date} />
                    </span>
                    <div className="message">
                        <span>{exchange.response.message} </span>
                        {exchange.response.emote !== 'NONE' ? <FontAwesomeIcon icon={['far', getEmoteIcon(exchange.response.emote)]} className="darkorange" /> : null}
                    </div>
                </div>
            </li>);


        return (
            <ul className="list-group clearfix">
                {exchangesData}
                <li className="float-left" ref={(el) => { this.messagesEnd = el; }}></li>
            </ul>);
    }
}

export default Conversation;