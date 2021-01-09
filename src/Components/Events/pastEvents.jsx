import React, { useEffect, useState } from 'react'
import { pastEvents } from '../../Services/committeeService'
import Event from './event'
import SingleEventPage from './singleEventPage';

export default function PastEvents(props) {
    const events = [1, 2]
    const [selected, setSelected] = useState(false);

    return (
        <div className="past__events">
            {!selected && events.map(event => {
                return <Event setSelected={setSelected}/>
            })}
            {selected && <SingleEventPage />}
        </div>
    )
}
