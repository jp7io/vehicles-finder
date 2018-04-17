import React, { Component } from 'react';
import { connect } from 'react-redux';
import Vehicle from './Vehicle';

class VehiclesList extends Component {
  render() {
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
  vehicles: state.vehicles,
});

export default connect(mapStateToProps)(VehiclesList);
