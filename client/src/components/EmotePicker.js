import React from 'react';
import { EMOTION_TYPE } from './utils/emotionTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EmotePicker = ({emote, onSelect}) => {
    const removeEmote = () => {
        onSelect(EMOTION_TYPE.NONE);
    };

    const addEmote = () => {
        onSelect(EMOTION_TYPE.HAPPY);
    };

    if (emote === EMOTION_TYPE.NONE) {
        return (<div className="emote-picker">
            <FontAwesomeIcon icon={['far', 'sad-tear']} size="lg" />
        </div>)
    } else {
        return (
            <div className="emote-picker">
                asd
                <FontAwesomeIcon icon={['far', 'sad-tear']} />
        </div>)
    };
};

export default EmotePicker;