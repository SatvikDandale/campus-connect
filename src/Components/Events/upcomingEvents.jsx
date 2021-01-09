import React, { useEffect, useState } from 'react'
import { pastEvents, upcomingEvents } from '../../Services/committeeService'
import Event from './event'
import SingleEventPage from './singleEventPage';

export default function UpcomingEvents(props) {
    const [events, setEvents] = useState([]);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        upcomingEvents(props.user.userName).then((eventsList) => setEvents(eventsList))
    }, [props.user.userName])

    return (
        <div className="past__events">
        {!selected && events.map(event => {
            return <Event onClick={() => setSelected(true)}/>
        })}
        {selected && <SingleEventPage />}
        </div>
    )
}
