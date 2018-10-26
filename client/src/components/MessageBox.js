import React from 'react';
import { LocalForm, Control, actions } from 'react-redux-form';

const MessageBox = ({onSend}) => {
    let formDispatch;

    const onSubmit = (model) => {
        onSend({
            text: model.text
        });
        formDispatch(actions.reset('message'));
    }

    return (
        <LocalForm model="message"
            onSubmit={onSubmit}
            getDispatch={(dispatch) => formDispatch = dispatch}>
            <div className="form-group">
                <Control.textarea rows="3" model=".text" className="form-control" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-light float-right">Send</button>
            </div>
        </LocalForm>
    );
};

export default MessageBox;