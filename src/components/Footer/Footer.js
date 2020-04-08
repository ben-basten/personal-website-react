import React from 'react';
import Button from '../partials/Button';
import Graphics from '../../assets/vectors/footer.svg';

const Footer = () => (
    <footer>
        <div className="credits">
            <Button text={"view repo"} link={"https://github.com/ben-basten/personal-website-react"}/>
            <p>website design by ben basten</p>
        </div>
        <img src={Graphics} alt="dope graphics"/>
    </footer>
);

export default Footer;