import React from 'react';
import { EMOTION_TYPE } from './utils/emotionTypes';

const EmotePicker = ({emote, onSelect}) => {
    const removeEmote = () => {
        onSelect(EMOTION_TYPE.NONE);
    };

    const addEmote = () => {
        onSelect(EMOTION_TYPE.HAPPY);
    };

    const image = emote !== EMOTION_TYPE.NONE
        ? <img src="/images/smile.png" alt="smile" />
        : null;
    const button = emote !== EMOTION_TYPE.NONE
        ? <button type="button" onClick={removeEmote}>Remove</button>
        : <button type="button" onClick={addEmote}>Add</button>

    return (<div className="emote-picker">
        {button}
        {image}
    </div>);
};

export default EmotePicker;