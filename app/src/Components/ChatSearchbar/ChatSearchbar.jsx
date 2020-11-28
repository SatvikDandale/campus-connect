import { Search } from '@material-ui/icons'
import React from 'react'
import './ChatSearchbar.css';

function ChatSearchbar() {
    return (
        <div className="chat__search">
            <input type="text" placeholder="Search"/>
            <Search/>
        </div>
    )
}

export default ChatSearchbar
