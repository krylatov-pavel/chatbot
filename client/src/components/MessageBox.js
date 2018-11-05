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
    }

    subimOnEnterPress(e) {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            this.formDispatch(actions.submit('message'));
        }
    }

    render() {
        return (
            <LocalForm model="message"
                onSubmit={(model) => this.onSubmit(model)}
                getDispatch={(dispatch) => this.attachDispatch(dispatch)}>
                <div className="form-group">
                    <Control.textarea rows="3" model=".text" className="form-control" onKeyDown={(event) => this.subimOnEnterPress(event)} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-light float-right">Send</button>
                    <div className="clearfix"></div>
                </div>
            </LocalForm>
        );
    }
};

export default MessageBox;