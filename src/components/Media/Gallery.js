import React from 'react';

class Gallery extends React.Component {
    generateImages = r => { 
        let images = {};
        r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
        // images object contains objects in format of {[filename]: [path]}

        let gallery = [];
        for (const filename in images) { // iterates through the file paths to generate the gallery JSX
            var name = filename.substring(0, filename.length - 4); // alt text is the filename minus the extension
            gallery.push(<div className="image" key={filename}><img src={images[filename]} alt={name}/></div>) 
        }

        return gallery;
    }

    render() {
        return(
            <div className="gallery">
                {/* require.context is a webpack feature to get modules from a directory */}
                {this.generateImages(require.context('../../assets/images/gallery', false, /\.(png|jpe?g|svg)$/))} 
            </div>
        );
    }
}

export default Gallery;