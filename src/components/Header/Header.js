import React from 'react';
import Hemlock from '../../assets/vectors/hemlock.svg';

class Header extends React.Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><a href="/" className="home">ben basten</a></li>
                    <li><a href="/media">media</a></li>
                    <li className="spacer">&middot;</li>
                    <li><a href="/code">code</a></li>
                    <li className="spacer">&middot;</li>
                    <li><a href="/contact">contact</a></li>
                </ul>
                <img src={Hemlock} alt="hemlock"/>
            </nav>
        );
    }
}

export default Header;