import React from 'react';
import { NavLink } from 'react-router-dom';

const BotLink = ({ bot, onSelect}) => {
    return (
        <li>
            <NavLink exact to={`/chat/${bot.id}`} activeStyle={{
                textDecoration: 'none',
                color: 'black'
            }}>{bot.name}</NavLink>
        </li>
    );
}

export default BotLink;