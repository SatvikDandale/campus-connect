import React from 'react'

import SettingsModal from "../../Components/Settings/settings";

export default function ForgotPassword(props) {
    
    const handleSettingsSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <SettingsModal show={true} forgotPassword={true} handleSettingsSubmit={handleSettingsSubmit} {...props}/>
        </div>
    )
}
