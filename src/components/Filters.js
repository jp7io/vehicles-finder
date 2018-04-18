import React, { Component } from 'react';
import staticData from '../data/filters';
import FilterSelect from './FilterSelect';

class Filters extends Component {

  state = {
    values: {
      make: '',
      model: '',
      color: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    const filters = staticData;
    const values = this.state.values;
    if (!filters) {
      return <div>Loading...</div>
    }
    return (
      <div className="Filters">
        <h2>Filters</h2>
        <FilterSelect
          name="make"
          label="Make"
          onChange={this.handleChange}
          value={values.make}
          options={filters.makes}
        />
        <FilterSelect
          name="model"
          label="Model"
          onChange={this.handleChange}
          value={values.model}
          options={filters.models}
        />
        <FilterSelect
          name="color"
          label="Color"
          onChange={this.handleChange}
          value={values.color}
          options={filters.colors}
        />
      </div>
    )
  }
}

export default Filters;
