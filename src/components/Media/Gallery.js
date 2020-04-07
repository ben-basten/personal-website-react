import React from 'react';

class Gallery extends React.Component {
    render() {
        return(
            <div className="gallery">
                <div className="image">
                    <img src={require("../../assets/images/gallery/belay.jpg")} alt="hope"/>
                </div>
                <div className="image">
                    <img src={require("../../assets/images/gallery/breakwall.jpg")} alt="hope"/>
                </div>
                <div className="image">
                    <img src={require("../../assets/images/gallery/campfire.jpg")} alt="hope"/>
                </div>
                <div className="image">
                    <img src={require("../../assets/images/gallery/campsunset.jpg")} alt="hope"/>
                </div>
                <div className="image">
                    <img src={require("../../assets/images/gallery/capitol.jpg")} alt="hope"/>
                </div>
                <div className="image">
                    <img src={require("../../assets/images/gallery/cathedral.jpg")} alt="hope"/>
                </div>
            </div>
        );
    }
}

export default Gallery;