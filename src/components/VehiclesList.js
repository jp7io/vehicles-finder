import React, { Component } from 'react';
import staticData from '../data/vehicles';
import Vehicle from './Vehicle';

class VehiclesList extends Component {
  render() {
    return (
      <div className="VehiclesList">
        {staticData.vehicles.map(vehicle => (
          <Vehicle vehicle={vehicle} key={vehicle._id} />
        ))}
      </div>
    );
  }
}

export default VehiclesList;
