import React, { Component } from 'react';
import MessageDate from './MessageDate';

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


        return (
            <ul className="list-group clearfix">
                {exchangesData}
                <li className="float-left" ref={(el) => { this.messagesEnd = el; }}></li>
            </ul>);
    }
}

export default Conversation;