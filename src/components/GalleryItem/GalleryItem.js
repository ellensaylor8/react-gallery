import React, { Component } from 'react';
import axios from 'axios';

class GalleryItem extends Component {
    // deleteImage(imageId) {
    //     axios({
    //         method: 'DELETE',
    //         url: `/songs/${songId}`,
    //     })
    //     // axios.get('/songs')
    //     .then((response) => {
    //         console.log('GET songs: ', response);
    //         this.props.getSongsCallback()
    //     })
    //     .catch((err) => {
    //         console.log('GET error: ', err);
    //         alert('You Failed!!!');
    //     });
    // }

    // clickDeleteHandler = (event) => {
    //     this.deleteSongs(this.props.itemData.id);
    // }

    render() {
        
        return (
            <li>Track: {this.props.itemData.track}
                <button
                    onClick={this.clickDeleteHandler}
                >
                    Delete
                </button>
            </li>
        );
    }
}

export default GalleryItem;