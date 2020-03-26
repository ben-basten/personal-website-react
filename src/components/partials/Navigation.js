import React from 'react';

class Navigation extends React.Component {
    render() {
        return(
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/media">media</a></li>
                <li><a href="/code">code</a></li>
                <li><a href="/contact">contact</a></li>
            </ul>
        );
    }
}

export default Navigation;