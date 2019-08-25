import React, { Component } from 'react';
// import axios from 'axios';

class GalleryItem extends Component {
    constructor(props) {
        super(props);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleDescriptionClick = this.handleDescriptionClick.bind(this);
        this.state = {imageIsClicked: false};
      }
    
      handleImageClick() {
        this.setState({imageIsClicked: true});
      }
    
      handleDescriptionClick() {
        this.setState({imageIsClicked: false});
      }
    
      render() {
        const imageIsClicked = this.state.imageIsClicked;
        let placeholder;
    
        if (imageIsClicked) {
            placeholder = <p onClick={this.handleDescriptionClick}>{this.props.itemData.description} </p>;
          
        } else {
            placeholder = <img alt={this.props.itemData.description} src={this.props.itemData.path} 
            onClick={this.handleImageClick} />;
        }

        return (
            <div>
                {placeholder}
                <br></br>
                <button
                    onClick={this.clickLikeHandler}
                >love it!</button>
                <p>{this.props.itemData.likes} people like this!</p>
            </div>
        );
    }
}

export default GalleryItem;