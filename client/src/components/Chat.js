import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { storeState } from '../redux/storeConfiguration';
import MessageBox from './MessageBox';
import Conversation from './Conversation';
import BotAvatar from './BotAvatar';
import { sendMessage, fetchExchanges } from '../redux/actionCreators/conversations';

class Chat extends Component {
    fetchExchanges() {
        const { botId, fetchExchanges } = this.props;

        fetchExchanges(botId);
    }

    componentDidMount() {
        this.fetchExchanges();
    }

    componentDidUpdate(prevProps) {
        if (this.props.botId !== prevProps.botId) {
            this.fetchExchanges();
        }
    }

    render() {
        const { botId, exchanges, sendMessage, conversationId, botName } = this.props;
        const {avatar, avatarType, defaultAvatar } = this.props;

        return (
            <div className="chat-container">
                <div className="chat-content">
                    <Conversation exchanges={exchanges} botName={botName} />
                </div>
                <div>
                    <MessageBox onSend={(message) => sendMessage(botId, message, conversationId)} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { botId } = ownProps.match.params;
    const botData = storeState.bots.getData(state, botId);
    const exchanges = storeState.exchanges.getAll(state, botId);

    return {
        exchanges,
        conversationId: storeState.bots.getConversationId(state, botId),
        botId,
        botName: botData && botData.name
    };
};

const actionsMap = {
    sendMessage,
    fetchExchanges
};

export default withRouter(connect(mapStateToProps, actionsMap)(Chat));