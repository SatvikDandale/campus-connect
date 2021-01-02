import { Search } from '@material-ui/icons'
import React from 'react'
import './ChatSearchbar.css';

function ChatSearchbar(props) {

    const [query, setQuery] = React.useState("");

    const onChange = (event) => {
        setQuery(event.target.value);
        props.onSearchType(event.target.value);
    }

    return (
        <div className="chat__search">
            <input type="text" placeholder="Search" value={query} onChange={onChange}/>
            <Search/>
        </div>
    )
}

export default ChatSearchbar
