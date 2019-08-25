import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.js';

class App extends Component {
state = {
  galleryList: [],
};

componentDidMount() {
  console.log('MOUNTED COMPONENT');
  this.getGallery();
}

getGallery = () => {
  axios({
    method: 'GET',
    url: '/gallery',
  })
  .then((response) => {
    console.log('GET gallery: ', response);
    this.setState({
      galleryList: response.data,
    });
  })
  .catch((err) => {
    console.log('GET error: ', err);
    alert('You Failed!!!');
  });
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        {/* <img alt="Goat in mountain" src="images/goat_small.jpg"/>
        <img alt="Crystal clear water" src="images/ocean.jpg"/>
        <img alt="Country road in the fall" src="images/fall.jpg"/> */}
        <GalleryList getGalleryCallback={this.getGallery} list={this.state.galleryList} />
      </div>
    );
  }
}

export default App;
