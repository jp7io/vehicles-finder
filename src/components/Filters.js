import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import FilterSelect from './FilterSelect';
import { fetchFilters } from '../actions/filters';
import { setFilterValue } from '../actions/filtersValues';

class Filters extends Component {
  componentWillMount() {
    this.props.fetchFilters();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.values !== this.props.values ) {
      this.props.fetchFilters(_.pickBy(this.props.values));
    }
  }

  handleChange = (e) => {
    this.props.setFilterValue(e.target.name, e.target.value);
  }

  render() {
    const { filters, values } = this.props;
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters.options,
    values: state.filtersValues,
  };
}

export default connect(mapStateToProps, {
  fetchFilters,
  setFilterValue,
})(Filters);
