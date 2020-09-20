import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import RepeatIcon from '@material-ui/icons/Repeat';

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer__left">
                <img className="Footer__albumLogo" src="https://cdn141.picsart.com/335733463023211.png?type=webp&to=min&r=480" alt="" />
                <div className="Footer__songInfo">
                    <h4>Dynamite</h4>
                    <p>BTS</p>
                </div>
            </div>
            <div className="Footer__center">
                <ShuffleIcon className="Footer__green" />
                <SkipPreviousIcon className="Footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="Footer__icon" />
                <SkipNextIcon className="Footer__icon" />
                <RepeatIcon className="Footer__green" />
            </div>
            <div className="Footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
