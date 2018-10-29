import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { storeState } from '../redux/storeConfiguration';
import { fetchBots } from '../redux/actionCreators/bots';
import BotLink from './BotLink';

class BotsList extends Component {
    componentDidMount() {
        this.props.fetchBots();
    }

    render() {
        const {bots, isFetching, error} = this.props;

        if (isFetching && !bots.length) {
            return (<p>Loading...</p>);
        } else if (error && !bots.length) {
            return (<p className="text-danger">Could not fetch list of bots: {error}</p>);
        } else {
            const list = bots.map(bot => <BotLink key={bot.id} bot={bot} onSelect={() => console.log(bot.id)} />);

            return (<ul className="list-group">{list}</ul>);
        }
    }
}

const mapStateToProps = (state) => ({
    bots: storeState.bots.getList(state),
    isFetching: storeState.ui.bots.getIsFetching(state),
    error: storeState.ui.bots.getErrorMessage(state)
});

const actionsMap = {
    fetchBots
};

export default withRouter(connect(mapStateToProps, actionsMap)(BotsList));