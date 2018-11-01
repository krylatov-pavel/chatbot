import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { storeState } from '../redux/storeConfiguration';

const BotDetails = ({data, isFetching, error}) => {
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
                    <img src={data.avatar} alt="bot avatar" />
                </div>
                <div className="card-body">
                    <p className="mb-0"><b className="text-muted">Name:</b> {data.name}</p>
                    <p className="mb-0"><b className="text-muted">Description: </b> <small>{data.description}</small></p>
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
        error: storeState.ui.bots.getErrorMessage(state)
    };
}

export default withRouter(connect(mapStateToProps)(BotDetails));