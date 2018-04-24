import React, { Component } from 'react';

class Vehicle extends Component {
  render() {
    const { make, model, color, photos } = this.props.vehicle;
    const photo = photos.length ?
      photos[0].url :
      'http://via.placeholder.com/240x180';
    return (
      <div className="Vehicle">
        <img src={photo} alt={make.name} />
        <div>
          <b>{make.name} {model.name}</b>
        </div>
        <div>{color.name}</div>
      </div>
    );
  }
}

export default Vehicle;
