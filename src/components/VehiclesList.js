import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchVehicles } from '../actions/vehicles';
import Vehicle from './Vehicle';

class VehiclesList extends Component {
  componentWillMount() {
    this.props.fetchVehicles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filtersValues !== this.props.filtersValues) {
      this.props.fetchVehicles(_.pickBy(this.props.filtersValues));
    }
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
  filtersValues: state.filtersValues,
});

export default connect(mapStateToProps, { fetchVehicles })(VehiclesList);
