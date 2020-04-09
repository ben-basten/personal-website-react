import React from 'react';
import {ReactComponent as GitHub} from '../../assets/vectors/github.svg';
import {ReactComponent as YouTube} from '../../assets/vectors/youtube.svg';
import {ReactComponent as Instagram} from '../../assets/vectors/insta.svg';

const Socials = () => (
    <div className="socials">
        <div className="icons">
            <a href="https://github.com/ben-basten" target="_blank" rel="noopener noreferrer"><GitHub /></a>
            <a href="https://www.youtube.com/channel/UC4QJKs4omKo_cDSVvPC1nEA" target="_blank" rel="noopener noreferrer"><YouTube /></a>
            <a href="https://www.instagram.com/ben.basten2/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
        </div>
        <div className="line"></div>
    </div>
);

export default Socials;