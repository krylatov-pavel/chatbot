import React, { Component } from 'react';
import { EMOTION_TYPE } from './utils/emotionTypes';
import { getEmoteIcon } from './utils/emotionTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, UncontrolledTooltip } from 'reactstrap';

class EmotePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emotePickerOpen: false
        };

        this.removeEmote = this.removeEmote.bind(this);
        this.addEmote = this.selectEmote.bind(this);
        this.toggleEmotePicker = this.toggleEmotePicker.bind(this);
    }

    toggleEmotePicker() {
        this.setState({
            emotePickerOpen: !this.state.emotePickerOpen
        });
    }

    removeEmote() {
        const {onSelect} = this.props;
        onSelect('');
    };

    selectEmote(emote) {
        const {onSelect} = this.props;
        onSelect(emote);
        this.toggleEmotePicker();
    };

    render() {
        const {emote} = this.props;

        const emotions = Object.keys(EMOTION_TYPE).map(e => (
            <div className="emote-item text-center mb-1 mt-1" key={e}>
                <FontAwesomeIcon className="icon-clickable" icon={['far', getEmoteIcon(e)]} size="lg" onClick={() => this.selectEmote(e)} id={`tooltip-${e}`} />
                <UncontrolledTooltip placement="top" target={`tooltip-${e}`}>{e.toLowerCase()}</UncontrolledTooltip> 
            </div>
        ));

        return (<div className="emote-picker">
            <FontAwesomeIcon id="emotePicker" icon={['far', emote ? getEmoteIcon(emote) : 'meh']}
                size="lg" onClick={this.toggleEmotePicker} className={`icon-clickable current-emote ${emote ? 'active' : ''}`} />
            {emote ? <FontAwesomeIcon icon="times" size="xs" className="icon-clickable remove-emote-btn" onClick={this.removeEmote} /> : null}
            <Popover placement="top" isOpen={this.state.emotePickerOpen} target="emotePicker"
                toggle={this.toggleEmotePicker}>
                <div className="emote-container">
                    {emotions}
                </div>
            </Popover>
        </div>)
    }
};

export default EmotePicker;