import React from 'react';
import './SidebarOptions.css';

function SidebarOptions({ title, Icon }) {
    return (
        <div className="SidebarOptions">
            {Icon && <Icon className="SidebarOptions__icons" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOptions
