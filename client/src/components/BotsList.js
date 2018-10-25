import React, { Component } from 'react';
import { connect } from 'react-redux';
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

            return (<ul>{list}</ul>);
        }
    }
}

const mapStateToProps = (state) => ({
    bots: storeState.bots.getList(state),
    isFetching: storeState.bots.getIsFetching(state),
    error: storeState.bots.getErrorMessage(state)
});

const actions = {
    fetchBots
};

export default connect(mapStateToProps, actions)(BotsList);