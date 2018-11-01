import React from 'react';
import { botApi } from '../config';

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
            return (<img src={botApi + avatar} alt="avatar" />)
        default:
            return (<p>Unknown media type: {type}</p>);
    }
}

const BotAvatar = ({avatar, avatarType, defaultAvatar}) => {
    let content;

    if (avatar) {
        content = renderAvatar(avatar, avatarType);
    } else {
        content = <img src={defaultAvatar} alt="default avatar" />;
    }

    return (<div>{content}</div>)
};

export default BotAvatar;