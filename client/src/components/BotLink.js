import React from 'react';
import { NavLink } from 'react-router-dom';

const BotLink = ({ bot, onSelect}) => {
    return (

        <NavLink exact to={`/chat/${bot.id}`} className="no-underline">
            <li className="list-group-item bot-link">
                <div className="media">
                    <img className="align-self-center mr-3 avatar-sm" src={bot.avatar} alt="avatar" />
                    <div className="media-body align-self-center">
                        <h4>{bot.name}</h4> 
                    </div>
                </div>
            </li>
        </NavLink>
    );
}

export default BotLink;