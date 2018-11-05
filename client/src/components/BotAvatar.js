import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { botApi } from '../config';
import { storeState } from '../redux/storeConfiguration';

const renderAvatar = (avatar, type) => {
    switch (type) {
        case 'video/mp4':
            return (
                <video key={avatar} autoPlay loop>
                    <source src={botApi + avatar} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        case 'image/png':
            return (
                <div className="text-center">
                    <img style={{ maxWidth: "100%" }} src={botApi + avatar} alt="avatar" />
                </div>)
        default:
            return (<p>Unknown media type: {type}</p>);
    }
}

const BotAvatar = ({avatar, avatarType, defaultAvatar}) => {
    let content;

    if (avatar) {
        content = renderAvatar(avatar, avatarType);
    } else {
        content = <div className="text-center"><img src={defaultAvatar} alt="default avatar" /></div>;
    }

    return (
        <div className="card no-border mt-3">
            {content}
        </div>)
};

const mapStateToProps = (state, ownProps) => {
    const { botId } = ownProps.match.params;
    const botData = storeState.bots.getData(state, botId);
    const lastExchage = storeState.exchanges.getLast(state, botId);

    return {
        avatar: lastExchage && lastExchage.response.avatar,
        avatarType: lastExchage && lastExchage.response.avatarType,
        defaultAvatar: botData && botData.avatar,
    };
}

export default withRouter(connect(mapStateToProps)(BotAvatar));