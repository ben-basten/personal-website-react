import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/media">media</a></li>
                    <li><a href="/code">code</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Header;