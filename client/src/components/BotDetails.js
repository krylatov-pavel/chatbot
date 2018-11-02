import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { storeState } from '../redux/storeConfiguration';

const BotDetails = ({data, isFetching, error, botId}) => {
    if (isFetching && data == null) {
        return (<p>Loading...</p>);
    } else if (error && data == null) {
        return (<p>{error}</p>);
    } else if (!data) {
        return (<p></p>);
    } else {
        return (
            <div className="card mt-3">
                <div className="text-center">
                    <img style={{ maxWidth: "100%" }} src={data.avatar} alt="bot avatar" />
                </div>
                <div className="card-body">
                    <p className="mb-0"><b className="text-muted">Name:</b> {data.name}</p>
                    <p><b className="text-muted">Description: </b> <small>{data.description}</small></p>
                    <p className="mb-0 text-center">
                        <NavLink to={`/chat/${botId}`} className="btn btn-primary">Start Chat</NavLink>
                    </p>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    const {botId} = ownProps.match.params;

    return {
        data: storeState.bots.getData(state, botId),
        isFetching: storeState.ui.bots.getIsFetching(state),
        error: storeState.ui.bots.getErrorMessage(state),
        botId
    };
}

export default withRouter(connect(mapStateToProps)(BotDetails));