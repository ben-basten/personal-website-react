import React from 'react';
import { NavLink } from 'react-router-dom';
import Hemlock from '../../assets/vectors/hemlock.svg';

class Header extends React.Component {
    render() {
        return(
            <nav>
                {/* need outer div to fill the wide grid space without making the whole header a link */}
                <div className="outer-link">
                    <NavLink exact activeClassName="nav-link-home--active" className="nav-link home" to="/">
                        {/* inner div for more precise underlining */}
                        <div className="inner-link">
                            ben basten
                        </div>
                    </NavLink> 
                </div>
                <NavLink activeClassName="nav-link--active" className="nav-link" to="/media">
                    <div className="inner-link">
                        media
                    </div>    
                </NavLink> 
                <span className="spacer">&middot;</span>
                <NavLink activeClassName="nav-link--active" className="nav-link" to="/code">
                    <div className="inner-link">
                        code
                    </div>
                </NavLink> 
                <span className="spacer">&middot;</span>
                <NavLink activeClassName="nav-link--active" className="nav-link" to="/contact">
                    <div className="inner-link">
                        contact
                    </div>
                </NavLink> 
                <img src={Hemlock} alt="hemlock"/>
            </nav>
        );
    }
}

export default Header;