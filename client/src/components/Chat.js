import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Chat extends Component {
    render() {
        return (<p>Bot ID: {this.props.botId}</p>);
    }
}

const mapStateToProps = (state, ownProps) => ({
    botId: ownProps.match.params.botId
});

export default withRouter(connect(mapStateToProps, null)(Chat));