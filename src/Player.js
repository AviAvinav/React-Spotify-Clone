import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from './Footer';

function Player({ spotify }) {
    return (
        <div className="Player">
            <div className="Player__body">
                {/* Sidebar */}
                <Sidebar />
                {/* Main */}
                <Main spotify={spotify}/>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Player
