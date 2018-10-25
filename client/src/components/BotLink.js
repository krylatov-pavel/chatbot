import React from 'react';

const BotLink = ({ bot, onSelect}) => {
    return (
        <li>
            {bot.name}
        </li>
    );
}

export default BotLink;