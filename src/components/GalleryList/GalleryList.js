
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        const galleryElements = this.props.list.map((image, index) => {
            return  <GalleryItem
                        key={index}
                        getGalleryCallback={this.props.getGalleryCallback}
                        itemData={image}
                    />;
        });
        console.log(galleryElements);

        return (
            <div>
                {galleryElements}
            </div>
        );
    }
}

export default GalleryList;