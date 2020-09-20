import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useStateProviderValue } from './StateProvider'

function Sidebar() {
    const [{ playlists }, dispatch] = useStateProviderValue();

    return (
        <div className="Sidebar">
            <img className="Sidebar__logo" src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png" />
            <SidebarOptions Icon={HomeOutlinedIcon} title="Home"/>
            <SidebarOptions Icon={SearchOutlinedIcon} title="Search"/>
            <SidebarOptions Icon={LibraryMusicOutlinedIcon} title="Your Library"/>
            <strong className="Sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOptions title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar;