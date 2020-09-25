import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import './ChatTextbox.css';

function ChatTextbox() {
    return (
        <div className="chat__input">
            <input type="text" placeholder="Write a Message"/>
            <SendIcon/>
        </div>
    )
}

export default ChatTextbox;
