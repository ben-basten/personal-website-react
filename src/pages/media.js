import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Gallery from '../components/Media/Gallery';

class Media extends React.Component {
    render() {
        return (
            <div>
                <Sidebar pageName="media" />
                <Gallery />
            </div>
        )
    }
}

export default Media;