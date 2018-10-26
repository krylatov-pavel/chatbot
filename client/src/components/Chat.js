import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageBox from './MessageBox';
import { sendMessage } from '../redux/actionCreators/conversations';

class Chat extends Component {
    render() {
        const {botId, sendMessage} = this.props;

        return (<div>
            <p>Bot ID: {botId}</p>
            <MessageBox onSend={(message) => sendMessage(botId, message, null)} />
            </div>);
    }
}

const mapStateToProps = (state, ownProps) => ({
    botId: ownProps.match.params.botId
});

const actionsMap = {
    sendMessage
}

export default withRouter(connect(mapStateToProps, actionsMap)(Chat));