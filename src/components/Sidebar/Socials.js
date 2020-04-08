import React from 'react';
import Instagram from '../../assets/vectors/insta.svg';
import GitHub from '../../assets/vectors/github.svg';
import YouTube from '../../assets/vectors/youtube.svg';

const Socials = () => (
    <div className="socials">
        <div className="icons">
            <img src={YouTube} className="svg" alt="social"/>
            <img src={GitHub} className="svg" alt="social"/>
            <img src={Instagram} className="svg" alt="social"/>
        </div>
        <div className="line"></div>
    </div>
);

export default Socials;