import React, { Component } from 'react';
import { EMOTION_TYPE } from './utils/emotionTypes';
import EmotePicker from './EmotePicker';

class MessageBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            emote: EMOTION_TYPE.NONE
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.subimOnEnterPress = this.subimOnEnterPress.bind(this);
        this.changeEmote = this.changeEmote.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    changeEmote(emote) {
        this.setState({
            emote
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const { onSend } = this.props;
        onSend(this.state);
    }

    subimOnEnterPress(e) {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            this.onSubmit(e);
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group message-editor">
                    <textarea rows="3" name="text" className="form-control"
                        value={this.state.text}
                        onChange={this.handleChange}
                        onKeyDown={this.subimOnEnterPress} />
                    <EmotePicker emote={this.state.emote} onSelect={this.changeEmote} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-light float-right">Send</button>
                    <div className="clearfix"></div>
                </div>
            </form>
        );
    }
};

export default MessageBox;