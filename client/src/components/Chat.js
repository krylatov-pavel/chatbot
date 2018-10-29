import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { storeState } from '../redux/storeConfiguration';
import MessageBox from './MessageBox';
import Conversation from './Conversation';
import { sendMessage } from '../redux/actionCreators/conversations';

class Chat extends Component {
    render() {
        const { botId, exchanges, sendMessage } = this.props;

        return (<div>
            <p>Bot ID: {botId}</p>
            <Conversation exchanges={exchanges} />
            <MessageBox onSend={(message) => sendMessage(botId, message, null)} />
            </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    const { botId } = ownProps.match.params;

    return {
        exchanges: storeState.exchanges.getAll(state, botId),
        botId,
    };
};

const actionsMap = {
    sendMessage
}

export default withRouter(connect(mapStateToProps, actionsMap)(Chat));