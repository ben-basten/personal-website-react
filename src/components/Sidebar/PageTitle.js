import React from 'react';
import { withRouter } from "react-router-dom";

class PageTitle extends React.Component {

    render() {
        var header = this.props.location.pathname.substring(1);
        
        if(header === "") header = "home";
        else if (header !== "media" && header !== "code" && header !== "contact") header = "404";

        return(
            <div className="page-title">
                <div className="line"></div>
                <h1>{header}</h1>
            </div>
        );
    }
}

export default withRouter(PageTitle);