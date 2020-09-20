import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateProviderValue } from './StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateProviderValue();

    return (
        <div className="Header">
            <div className="Header__left">
                <SearchIcon />
                <input type="text" placeholder="Artists, Songs or podcasts" />
            </div>
            <div className="Header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} fontSize="small" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
};

export default Header;