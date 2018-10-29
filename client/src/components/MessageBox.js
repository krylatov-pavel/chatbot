import React, { Component } from 'react';
import { LocalForm, Control, actions } from 'react-redux-form';

class MessageBox extends Component {
    attachDispatch(dispatch) {
        this.formDispatch = dispatch;
    }

    onSubmit(model) {
        const { onSend } = this.props;
        this.formDispatch(actions.reset('message'));
        onSend({
            text: model.text
        });
        //formDispatch(actions.reset('message'));
    }

    render() {
        return (
            <LocalForm model="message"
                onSubmit={(model) => this.onSubmit(model)}
                getDispatch={(dispatch) => this.attachDispatch(dispatch)}>
                <div className="form-group">
                    <Control.textarea rows="3" model=".text" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-light float-right">Send</button>
                </div>
            </LocalForm>
        );
    }
};

export default MessageBox;