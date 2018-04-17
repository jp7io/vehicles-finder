import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVehicles } from '../actions/vehicles';
import Vehicle from './Vehicle';

class VehiclesList extends Component {
  componentWillMount() {
    this.props.fetchVehicles();
  }

  render() {
    if (!this.props.vehicles.length) {
      return <div>Loading...</div>
    }
    return (
      <div className="VehiclesList">
        {this.props.vehicles.map(vehicle => (
          <Vehicle vehicle={vehicle} key={vehicle._id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vehicles: state.vehicles.all,
});

export default connect(mapStateToProps, { fetchVehicles })(VehiclesList);
