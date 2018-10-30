import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { storeState } from '../redux/storeConfiguration';
import MessageBox from './MessageBox';
import Conversation from './Conversation';
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
        const { botId, exchanges, sendMessage, conversationId } = this.props;

        return (<div>
            <p>Bot ID: {botId}</p>
            <p>ConversationID: {conversationId}</p>
            <Conversation exchanges={exchanges} />
            <MessageBox onSend={(message) => sendMessage(botId, message, conversationId)} />
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    const { botId } = ownProps.match.params;

    return {
        exchanges: storeState.exchanges.getAll(state, botId),
        conversationId: storeState.bots.getConversationId(state, botId),
        botId,
    };
};

const actionsMap = {
    sendMessage,
    fetchExchanges
};

export default withRouter(connect(mapStateToProps, actionsMap)(Chat));