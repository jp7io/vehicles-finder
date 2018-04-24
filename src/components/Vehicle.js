import React, { Component } from 'react';

class Vehicle extends Component {
  render() {
    const { make, model, color, photo } = this.props.vehicle;
    const img = photo || 'http://via.placeholder.com/240x180';
    return (
      <div className="Vehicle">
        <img src={img} alt={make.name} />
        <div>
          <b>{make.name} {model.name}</b>
        </div>
        <div>{color.name}</div>
      </div>
    );
  }
}

export default Vehicle;
